import {
  handleIncomingRedirect,
  login,
} from "@inrupt/solid-client-authn-browser";
import useAuth from "../hooks/useAuth";

async function signIn(session: any, providerUrl: string) {
  if (!session.info.isLoggedIn) {
    await login({
      oidcIssuer: encodeURI(providerUrl),
      redirectUrl: window.location.href,
      clientName: "Lomap",
    });
  }

  await handleIncomingRedirect().then(() => {
    useAuth().login();
  });
}

export { signIn };
