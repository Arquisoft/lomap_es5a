import { getJsonLdParser, getNamedNodeAll, getSolidDataset, getStringNoLocale, getThing, getThingAll, isThing, setThing, Thing, getUrl, getUrlAll } from "@inrupt/solid-client";
import { getUserProfileUrl } from "../helpers/PodHelper";
import * as jsonld from "jsonld";
import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";
import { UserInSessionProfile } from "../shared/shareddtypes";
import {fetch} from "@inrupt/solid-client-authn-browser";
import { profile } from "console";


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
  
  // const data = await fetch(profileUrl, {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/n-quads",
  //   },
  // });

  // return data.text().then((text: any) => {
  //   return jsonld.fromRDF(text, { format: 'application/n-quads' });
  // }).then(async (doc) => {
    
  //   let docAsJson = JSON.parse(JSON.stringify(doc, null, 2))[0];
  //   // Imagen de perfil
  //   const userData = docAsJson["@graph"]
  //   .find((el: any) => el["@id"].includes("profile/card#me"));

  //   return {
  //     name: userData[FOAF.name][0]["@value"],
  //     imageUrl: userData[VCARD.hasPhoto][0]["@id"],
  //     friends: userData[FOAF.knows]
  //   } as UserInSessionProfile;  

  // }).catch(err => {
  //   console.log("Error profile: ", err);
  // });
};

export { getUserProfileInfo, getUserProfile };
