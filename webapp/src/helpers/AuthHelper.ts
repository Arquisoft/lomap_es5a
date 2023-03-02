import { FOAF } from "@inrupt/lit-generated-vocab-common";
import {
  getPodUrlAllFrom,
  getProfileAll,
  getStringNoLocale,
  getThing,
  getThingAll,
  getWebIdDataset,
} from "@inrupt/solid-client";

import {
  fetch,
  getDefaultSession,
  handleIncomingRedirect,
  login,
} from "@inrupt/solid-client-authn-browser";

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
  const data = await getProfileAll(webId, { fetch: fetch });
  return data;
}

async function getUserDatasetByWebId(webId: string) {
  const profile = await getWebIdDataset(webId);
  const podRoot = getPodUrlAllFrom({ webIdProfile: profile, altProfileAll: [] }, webId);
  const profileThing = getThing(profile, webId);
  //const name = getStringNoLocale(profileThing, FOAF.name);

  console.log(profileThing);

  //const name = getStringNoLocale(profileThing, FOAF.name);
}

export { signIn, getUserDataFromPod, getUserDatasetByWebId };
