import { Friend } from "../shared/shareddtypes";
import {
  getNamedNodeAll,
  getSolidDataset,
  getStringNoLocale,
  getThing,
  getUrlAll,
  Thing
} from "@inrupt/solid-client";

import { FOAF, VCARD} from "@inrupt/vocab-common-rdf";
import { getUserProfileUrl } from "../helpers/PodHelper";
import { getUserProfile} from "../api/user.api"


const getFriendInfo = async (webId : string) => {
  const friendProfile = await getUserProfile(webId);
  // const userName = getStringNoLocale(friendProfile, FOAF.firstName);
  // console.log("Friend name: ", userName);
  // const frienImgUrl = getNamedNodeAll(friendProfile, VCARD.photo);
  // console.log("Friend photo url: ", frienImgUrl);

}

const getAllFriends = async (webId:string) => {
  const profileUrl : string = getUserProfileUrl(webId);

  const profileDataset = await getSolidDataset(profileUrl);
  
  const profile = getThing(profileDataset, webId) as Thing;

  const friends = getUrlAll(profile,FOAF.knows);  
  
  return friends;
  //const myFriendsList : Friend[] = [];

  // Recorremos las relaciones obtenidas almacenando los datos de cada amigo
  // friendsInfo.map((friend) => {
  //   myFriendsList.push({
  //     webId : webId,
  //     name : friend.
  //   })
  // })

 
};

export { getAllFriends, getFriendInfo };
