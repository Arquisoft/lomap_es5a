import { Friend, UserInSessionProfile } from "../shared/shareddtypes";
import {
  addUrl,
  getNamedNodeAll,
  getSolidDataset,
  getStringNoLocale,
  getThing,
  getUrl,
  getUrlAll,
  saveSolidDatasetAt,
  setThing,
  Thing
} from "@inrupt/solid-client";
import {fetch} from "@inrupt/solid-client-authn-browser";

import { FOAF, VCARD} from "@inrupt/vocab-common-rdf";
import { getUserProfileUrl } from "../helpers/PodHelper";
import { getUserProfileInfo } from "./user.api";

/**
 * 
 * @param webId webId del usuario en sesión que quiere añadir un amigo
 * @param friendWebId webId del amigo que se quiere añadir
 */
const addFriend = async (webId:string, friendWebId:string) => {
  const userInSesionProfileUrl:string = getUserProfileUrl(webId) + '#me';
  const userDataset = await getSolidDataset(userInSesionProfileUrl, {fetch:fetch});
  const userInSesionProfile = getThing(userDataset, userInSesionProfileUrl) as Thing;
  const friendUrl = getUserProfileUrl(friendWebId) + '#me';
  if (checkIfExistsFriend(userInSesionProfile, friendWebId)){
    console.log("Ya sois amigoss!!!");
  }else{
    const newFriend = addUrl(userInSesionProfile, FOAF.knows, friendUrl);
    setThing(userDataset, newFriend);
    await saveSolidDatasetAt(getUserProfileUrl(webId),userDataset);
  }

}

const checkIfExistsFriend = (userProfile:any, webId:string):boolean => {
  const friends = getUrlAll(userProfile, FOAF.knows);
  if (friends.includes(webId)){
    return true;
  }
  return false;
}

/**
 * Devuelve todos los amigos del usuario en sesión, con la información
 * necesaria para mostrar en pantalla.
 * @param webId 
 * @returns 
 */
const getAllFriends = async (webId:string) => {
  const profileUrl : string = getUserProfileUrl(webId) + '#me';

  const profileDataset = await getSolidDataset(profileUrl, {fetch:fetch});
  
  const profile = getThing(profileDataset, profileUrl) as Thing;

  const friends = getUrlAll(profile,FOAF.knows);
    
  const myFriendsList : Friend[] = [];

  // Recorremos las relaciones obtenidas almacenando los datos de cada amigo
  friends.forEach(async (friend) => {        
    let friendName = getStringNoLocale(await getUserProfileInfo(friend), FOAF.name) as string;
    let imgUrl = getUrl(await getUserProfileInfo(friend), VCARD.hasPhoto) as string;
    let user : Friend = {
      webId : friend,
      name : friendName,
      imgUrl : imgUrl
    };
    myFriendsList.push(user);
  });

  return myFriendsList;

 
};

export { getAllFriends };


