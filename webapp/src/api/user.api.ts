import { getSolidDataset, getStringNoLocale, getThing, Thing, getUrl, getUrlAll } from "@inrupt/solid-client";
import { getUserProfileUrl } from "../helpers/PodHelper";
import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";
import { UserInSessionProfile } from "../shared/shareddtypes";
import {fetch} from "@inrupt/solid-client-authn-browser";

const getUserProfile = async (webId : string) => {      
  let userDataset =  await getSolidDataset(webId, {fetch:fetch});  
  let thing = getThing(userDataset, webId) as Thing;    
  return thing;  
}

/**
 * Obtener la información del perfil del usuario en sesión.
 * @param webId
 */
const getUserProfileInfo = async (webId: string) => {    
  const profileUrl:string = getUserProfileUrl(webId) + '#me';
  let userDataset =  await getSolidDataset(profileUrl, {fetch:fetch});  
  let thing = getThing(userDataset, profileUrl) as Thing;  
  
  return {
      name: getStringNoLocale(thing,FOAF.name),
      imageUrl: getUrl(thing,VCARD.hasPhoto),
      friends: getUrlAll(thing, FOAF.knows)
    } as UserInSessionProfile;
};

export { getUserProfileInfo, getUserProfile };
