import { Friend, UserInSessionProfile } from "../shared/shareddtypes";
import {
  getNamedNodeAll,
  getSolidDataset,
  getStringNoLocale,
  getThing,
  getUrl,
  getUrlAll,
  Thing
} from "@inrupt/solid-client";
import {fetch} from "@inrupt/solid-client-authn-browser";

import { FOAF, VCARD} from "@inrupt/vocab-common-rdf";
import { getUserProfileUrl } from "../helpers/PodHelper";
import { getUserProfileInfo } from "./user.api";




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
