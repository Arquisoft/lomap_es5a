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
  setThing
} from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { Friend } from "../shared/shareddtypes";

import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";
import { constructWebIdFromUsername, getUserProfileUrl, getWebIdFromUrl } from "../helpers/PodHelper";
import { getUserProfile } from "./user.api";

const deleteFriend = async (webId:string, friendWebId:string) => {
  const userInSesionProfileUrl:string = getUserProfileUrl(webId); // Obtiene el webid sin el #me
  let userDataset = await getSolidDataset(userInSesionProfileUrl, {fetch:fetch});    
  let userInSesionProfile = getThing(userDataset, webId) as Thing;     
  
  if (!checkIfExistsFriend(userInSesionProfile, getWebIdFromUrl(friendWebId))){
    console.log("No existe dicho amigo");
  }else{    
    userInSesionProfile = buildThing(userInSesionProfile).removeUrl(FOAF.knows, friendWebId).build();  
    userDataset = setThing(userDataset, userInSesionProfile);
    await saveSolidDatasetAt(userInSesionProfileUrl,userDataset, {fetch:fetch});
  }
}


/**
 * Añade un amigo en caso de no existir ya.
 * @param webId webId del usuario en sesión que quiere añadir un amigo
 * @param friendUsername username del amigo que se quiere añadir (formato: '<username>.<provider>')
 */
const addFriend = async (webId:string, friendUsername:string) => {
  // Validar uqe las url llegan bien (pendiente de hacer)
  // Añadir un try/catch para propagar el error en caso de producirse alguno
  const userInSesionProfileUrl:string = getUserProfileUrl(webId); // Obtiene el webid sin el #me
  
  let userDataset = await getSolidDataset(userInSesionProfileUrl, {fetch:fetch});    
  const userInSesionProfile = getThing(userDataset, webId) as Thing;      
  if (checkIfExistsFriend(userInSesionProfile, friendUsername)){
    console.log("Ya sois amigoss!!!");
  }else{    
    const newFriend = addUrl(userInSesionProfile, FOAF.knows, constructWebIdFromUsername(friendUsername));    
    userDataset = setThing(userDataset, newFriend);
    await saveSolidDatasetAt(userInSesionProfileUrl,userDataset, {fetch:fetch});
  }

}

const checkIfExistsFriend = (userProfile:any, friendUsername:string):boolean => {
  const friends = getUrlAll(userProfile, FOAF.knows);
  if (friends.includes(constructWebIdFromUsername(friendUsername))){
    return true;
  }
  return false;
}

/**
 * Devuelve todos los amigos del usuario en sesión, con la información
 * necesaria para mostrar en pantalla.
 * @param webId webId del usuario en sesion para el que se quieren obtener los amigos existentes
 * @returns Array con los amigos del usuario en sesion.
 */
const getAllFriends = async (webId:string) => {  
  const profileDataset = await getSolidDataset(webId, {fetch:fetch});
  
  const profile = getThing(profileDataset, webId) as Thing;

  const friends = getUrlAll(profile,FOAF.knows);
    
  const myFriendsList : Friend[] = [];

  // Recorremos las relaciones obtenidas almacenando los datos de cada amigo
  friends.forEach(async (friend) => {        
    const friendName = getStringNoLocale(await getUserProfile(friend), FOAF.name) as string;
    const imgUrl = getUrl(await getUserProfile(friend), VCARD.hasPhoto) as string;
    const user : Friend = {
      webId : friend,
      name : friendName,
      imgUrl : imgUrl
    };
    myFriendsList.push(user);
  });

  return myFriendsList;

 
};

export { getAllFriends, addFriend, deleteFriend };

