
import {  
  getDefaultSession,
  handleIncomingRedirect,
  login    
} from "@inrupt/solid-client-authn-browser";



async function signIn(providerUrl: string) {  
  if (!getDefaultSession().info.isLoggedIn){
    await login({
      oidcIssuer: providerUrl,
      redirectUrl: window.location.href,
      clientName: "Lomap"
    });    
  }

  await handleIncomingRedirect({
    restorePreviousSession:true
  });
}




export { signIn };

