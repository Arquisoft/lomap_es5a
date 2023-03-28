import { ChangeEvent, useEffect, useState } from "react";
import { LoginButton, useSession } from "@inrupt/solid-ui-react";
import "../../public/css/components/forms/loginForm/LoginForm.scss";
import BaseTextInput from "../inputs/BaseTextInput";
import BaseButton from "../buttons/BaseButton";
import {Button} from "@mui/material";
import { signIn } from "../../helpers/AuthHelper";
import BaseSelect from "../inputs/BaseSelect";
import { SOLID_PROVIDERS } from "../../data/providers";
import { handleIncomingRedirect } from "@inrupt/solid-client-authn-browser";
import { url } from "inspector";


function LoginForm() {
  // const [webId, setWebId] = useState("")
  const [providerUrl, setProviderUrl] = useState("");  
  


  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn(providerUrl);
    
  };

  // const handleWebId = (e: ChangeEvent<HTMLInputElement>) => {
  //   setWebId(e.target.value);
  // };

  const handleSelectProvider = (e: ChangeEvent<HTMLSelectElement>) =>{    
    let provider = SOLID_PROVIDERS.find(prov => prov.value === e.target.value);
    setProviderUrl(provider?.content ?? "");
    console.log(providerUrl);
  }



  // useEffect(() => {
  //   sessionStorage.setItem("webId", session.info.webId || "");
  // }, [session.info.sessionId]);

  return (
    <div className="login-form-container">
        {/* <BaseTextInput
          label="WebId"
          onChange={handleWebId}          
          type="text"
          placeholder="https://id.inrupt.com/..."
        /> */}
        <BaseSelect 
          label="Proveedor de POD"
          id="provider"
          name="provider"
          options={SOLID_PROVIDERS}          
          handleChange={handleSelectProvider}
        />
        <div className="login-form__button-container">
            <BaseButton
            type="button-blue-outlined"
            //mode="outlined"
            text="Log In"
            onClick={(e) => {handleLogin(e)}}
            /> 
        </div>
        
        {/* <LoginButton 
          authOptions={{ clientName: "Lomap", clientId: webId, refreshToken: "refreshToken"}}
          oidcIssuer="https://inrupt.net/"
          redirectUrl="http://localhost:3000/"
          onError={console.error} */}  
    </div>
  );
}

export default LoginForm;
