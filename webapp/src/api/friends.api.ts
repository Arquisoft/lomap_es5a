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
import { getUserProfileUrl, constructWebIdFromUsername } from "../helpers/PodHelper";
import { getUserProfileInfo } from "./user.api";

/**
 * Añade un amigo en caso de no existir ya.
 * @param webId webId del usuario en sesión que quiere añadir un amigo
 * @param friendUsername username del amigo que se quiere añadir (formato: '<username>.<provider>')
 */
const addFriend = async (webId:string, friendUsername:string) => {
  // Validar uqe las url llegan bien
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

export { getAllFriends, addFriend };


