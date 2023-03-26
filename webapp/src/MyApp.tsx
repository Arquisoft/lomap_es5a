
import { handleIncomingRedirect, getDefaultSession,Session, ISessionInfo } from "@inrupt/solid-client-authn-browser";
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
import { useState } from "react";
import App from "./App"; 




function MyApp(){
    const saveSession = (session:ISessionInfo | undefined) => {
        localStorage.setItem("solid-auth-client", JSON.stringify(session));
    }
    
    const loadSession = () => {
        let sessionJson = localStorage.getItem("solid-auth-client");
        return sessionJson ? JSON.parse(sessionJson) : undefined;
    }
    const session = loadSession();

    const checkSession = () => {
        if (!session){
            handleIncomingRedirect().then((session) => {
                saveSession(session);
                console.log(session)
            });
        }
    }

    
    if (!session){
        handleIncomingRedirect().then((session) => {
            saveSession(session);
            console.log(session)
        });
    } else {
        
    }

    return (
        <SessionProvider sessionId="prueba-login" onSessionRestore={loadSession}>
            <App/>
        </SessionProvider>
    );
}

export default MyApp;



