import { getPodUrlAll, getStringNoLocale, getThing, getWebIdDataset, getSolidDataset, getFile } from "@inrupt/solid-client";

import {
  fetch,
  getDefaultSession,
  handleIncomingRedirect,
  login
} from "@inrupt/solid-client-authn-browser";

import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";

async function signIn(webID: string, providerUrl: string) {
  
  //await handleIncomingRedirect();

  if (!getDefaultSession().info.isLoggedIn){
    await login({
      oidcIssuer: providerUrl,
      redirectUrl: "http://localhost:3000/",
      // clientName: "Lomap",
    });
  }

  const findAllPoints = async (webID: string) => {
 
    const sample = "pruebasolid1";

    try {
      const data = await getFile(encodeURI(`https://${sample}.inrupt.net/public/points/points1.jsonld`), {
        fetch: fetch,   
      });

      console.log(data);
  
      //expand(data);
      //return JSON.parse(await data.text());
  
    } catch (err) {
      console.error(err);
    }
  };
  
}

async function getUserDataFromPod(webId: string) {
  const data = await getPodUrlAll(webId, { fetch: fetch });

  return data;
}

async function getPodData(webId: string) {
    // Use `getSolidDataset` to get the Profile document.
  // Profile document is public and can be read w/o authentication; i.e.: 
  // - You can either omit `fetch` or 
  // - You can pass in `fetch` with or without logging in first. 
  //   If logged in, the `fetch` is authenticated.
  // For illustrative purposes, the `fetch` is passed in.
  const data = await getPodUrlAll(webId, { fetch: fetch });

  const myDataset = await getSolidDataset(webId, { fetch: fetch });

  // Get the Profile data from the retrieved SolidDataset
  const profile = getThing(myDataset, webId);

  console.log("profile: " + profile);

  if(profile == null){
    return;
  }

  // Get the formatted name using `FOAF.name` convenience object.
  // `FOAF.name` includes the identifier string "http://xmlns.com/foaf/0.1/name".
  // As an alternative, you can pass in the "http://xmlns.com/foaf/0.1/name" string instead of `FOAF.name`.
 
  const fn = getStringNoLocale(profile, FOAF.name);

  // Get the role using `VCARD.role` convenience object.
  // `VCARD.role` includes the identifier string "http://www.w3.org/2006/vcard/ns#role"
  // As an alternative, you can pass in the "http://www.w3.org/2006/vcard/ns#role" string instead of `VCARD.role`.

  const role = getStringNoLocale(profile, VCARD.role);

}

async function getUserDatasetByWebId(webId: string) {
  const profile = await getWebIdDataset(webId);
  const profileThing = getThing(profile, webId);
  //const name = getStringNoLocale(profileThing, FOAF.name);

  //console.log(podRoot);

  //const name = getStringNoLocale(profileThing, FOAF.name);
}

export { signIn, getUserDataFromPod, getUserDatasetByWebId, getPodData };

