
import {
  getDefaultSession,
  handleIncomingRedirect,
  login
} from "@inrupt/solid-client-authn-browser";


async function signIn(webID: string, providerUrl: string) {
  
  await handleIncomingRedirect();

  if (!getDefaultSession().info.isLoggedIn){
    await login({
      oidcIssuer: providerUrl,
      redirectUrl: "http://localhost:3000/",
      clientName: "Lomap",
    });
  }  
}

export { signIn };

