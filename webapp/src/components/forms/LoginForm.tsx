import { ChangeEvent, useEffect, useState } from "react";
import { useSession } from "@inrupt/solid-ui-react";
import "../../public/css/components/forms/loginForm/LoginForm.scss";
import BaseTextInput from "../inputs/BaseTextInput";
import BaseButton from "../buttons/BaseButton";
import { signIn } from "../../helpers/AuthHelper";
import BaseSelect from "../inputs/BaseSelect";
import { SOLID_PROVIDERS } from "../../data/providers";

function LoginForm() {
  const [webId, setWebId] = useState("");
  const [providerUrl, setProviderUrl] = useState("https://inrupt.net");

  const { session } = useSession();

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn(webId, providerUrl);
  };

  const handleWebId = (e: ChangeEvent<HTMLInputElement>) => {
    setWebId(e.target.value);
  };

  const handleSelectProvider = (e: ChangeEvent<HTMLSelectElement>) =>{
    setProviderUrl(e.target.value);
  }

  // useEffect(() => {
  //   sessionStorage.setItem("webId", session.info.webId || "");
  // }, [session.info.sessionId]);

  return (
    <div className="login-form-container">
        <BaseTextInput
          label="WebId"
          onChange={handleWebId}
          type="text"
          placeholder="https://id.inrupt.com/..."
        />
        <BaseSelect 
          label="Proveedor de POD"
          id="provider"
          name="provider"
          category=""
          showContent={true}
          options={SOLID_PROVIDERS}
          handleChange={handleSelectProvider}
        />
        <div className="login-form__button-container">
        <BaseButton
          type="button-blue"
          text="Iniciar sesión"
          onClick={(e) => handleLogin(e)}
        />
        <BaseButton
          type="button-blue-outlined"
          //mode="outlined"
          text="Únete ya"
          onClick={(e) => handleLogin(e)}
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
