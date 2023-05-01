import {
  Thing,
  addUrl,
  buildThing,
  getSolidDataset,
  getStringNoLocale,
  getThing,
  getUrl,
  getUrlAll,
  saveSolidDatasetAt,
  setThing,
} from "@inrupt/solid-client";
import { Friend } from "../shared/shareddtypes";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";
import {
  getUserProfileUrl,
  constructWebIdFromUsername,
  getWebIdFromUrl,
} from "../helpers/PodHelper";

import { getUserProfile } from "./user.api";

const deleteFriend = async (webId: string, friendWebId: string) => {
  const userInSesionProfileUrl: string = getUserProfileUrl(webId); // Obtiene el webid sin el #me
  let userDataset = await getSolidDataset(userInSesionProfileUrl, {
    fetch: fetch,
  });
  let userInSesionProfile = getThing(userDataset, webId) as Thing;

  if (!checkIfExistsFriend(userInSesionProfile, getWebIdFromUrl(friendWebId))) {
    console.log("No existe dicho amigo");
  } else {
    userInSesionProfile = buildThing(userInSesionProfile)
      .removeUrl(FOAF.knows, friendWebId)
      .build();
    userDataset = setThing(userDataset, userInSesionProfile);
    await saveSolidDatasetAt(userInSesionProfileUrl, userDataset, {
      fetch: fetch,
    });
  }
};

const checkExistsUser = async (friendUsername:string) => {
  const friendProfileUrl:string = "https://" + friendUsername + "/profile/card";
  try{
    await getSolidDataset(friendProfileUrl, {fetch:fetch});
    return true;
  } catch (error){
    console.log("No existe el usuario. " + error);
    return false;
  }
  

}

/**
 * Añade un amigo en caso de no existir ya.
 * @param webId webId del usuario en sesión que quiere añadir un amigo
 * @param friendUsername username del amigo que se quiere añadir (formato: '<username>.<provider>')
 */
const addFriend = async (webId: string, friendUsername: string) => {
  // Validar que existe el usuario a agregar
  if (!await checkExistsUser(friendUsername)) {
    throw new Error(
      `No existe el usuario = ${friendUsername}`
    );
  }

  // Añadir un try/catch para propagar el error en caso de producirse alguno

  try {
    const userInSesionProfileUrl: string = getUserProfileUrl(webId); // Obtiene el webid sin el #me

    let userDataset = await getSolidDataset(userInSesionProfileUrl, {
      fetch: fetch,
    });
    const userInSesionProfile = getThing(userDataset, webId) as Thing;
    if (checkIfExistsFriend(userInSesionProfile, friendUsername)) {
      console.log("Ya sois amigoss!!!");
    } else {
      const newFriend = addUrl(
        userInSesionProfile,
        FOAF.knows,
        constructWebIdFromUsername(friendUsername)
      );
      userDataset = setThing(userDataset, newFriend);
      await saveSolidDatasetAt(userInSesionProfileUrl, userDataset, {
        fetch: fetch,
      });
    }
  } catch (error) {
    throw new Error(
      `Error al añadir al amigo, (${error})`
    );
  }

};

const checkIfExistsFriend = (
  userProfile: any,
  friendUsername: string
): boolean => {
  const friends = getUrlAll(userProfile, FOAF.knows);
  if (friends.includes(constructWebIdFromUsername(friendUsername))) {
    return true;
  }
  return false;
};

/**
 * Devuelve todos los amigos del usuario en sesión, con la información
 * necesaria para mostrar en pantalla.
 * @param webId webId del usuario en sesion para el que se quieren obtener los amigos existentes
 * @returns Array con los amigos del usuario en sesion.
 */
const getAllFriends = async (webId: string) => {
  const myFriendsList: Friend[] = [];

  try {
    const profileDataset = await getSolidDataset(webId, { fetch: fetch });

    const profile = getThing(profileDataset, webId) as Thing;

    const friends = getUrlAll(profile, FOAF.knows);

    // Recorremos las relaciones obtenidas almacenando los datos de cada amigo

    for (let i = 0; i < friends.length; i++) {
      const friendName = getStringNoLocale(
        await getUserProfile(friends[i]),
        FOAF.name
      ) as string;
      const imgUrl = getUrl(
        await getUserProfile(friends[i]),
        VCARD.hasPhoto
      ) as string;
      const user: Friend = {
        webId: friends[i],
        name: friendName,
        imgUrl: imgUrl,
      };
      myFriendsList.push(user);
    }
  } catch (error) {
    console.log("Error al obtener los amigos");
  }

  return myFriendsList;
};

export { getAllFriends, addFriend, deleteFriend };
