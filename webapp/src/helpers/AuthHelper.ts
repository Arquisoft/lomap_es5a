import { getPodUrlAll, getStringNoLocale, getThing, getWebIdDataset, getSolidDataset } from "@inrupt/solid-client";

import {
  fetch,
  getDefaultSession,
  handleIncomingRedirect,
  login
} from "@inrupt/solid-client-authn-browser";

import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";

async function signIn(webId: string) {
  // 1. Call `handleIncomingRedirect()` to complete the authentication process.
  //    If called after the user has logged in with the Solid Identity Provider,
  //      the user's credentials are stored in-memory, and
  //      the login process is complete.
  //   Otherwise, no-op.
  await handleIncomingRedirect();

  // 2. Start the Login Process if not already logged in.
  if (!getDefaultSession().info.isLoggedIn) {
    await login({
      // Specify the URL of the user's Solid Identity Provider;
      clientSecret: webId,
      // e.g., "https://login.inrupt.com".
      oidcIssuer: "https://login.inrupt.com",
      // Specify the URL the Solid Identity Provider should redirect the user once logged in,
      // e.g., the current page for a single-page app.
      redirectUrl: "http://localhost:3000/",
      // Provide a name for the application when sending to the Solid Identity Provider
      clientName: "Lomap",
    });
  }
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
  
  console.log(data);

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


  console.log(fn , role);

}

async function getUserDatasetByWebId(webId: string) {
  const profile = await getWebIdDataset(webId);
  const profileThing = getThing(profile, webId);
  //const name = getStringNoLocale(profileThing, FOAF.name);

  //console.log(podRoot);

  //const name = getStringNoLocale(profileThing, FOAF.name);
}

export { signIn, getUserDataFromPod, getUserDatasetByWebId, getPodData };

