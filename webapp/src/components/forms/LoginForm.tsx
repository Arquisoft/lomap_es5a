import { ChangeEvent, useEffect, useState } from "react";
import { LoginButton, useSession } from "@inrupt/solid-ui-react";
import "../../public/css/components/forms/loginForm/LoginForm.scss";
import BaseTextInput from "../inputs/BaseTextInput";
import BaseButton from "../buttons/BaseButton";
import { signIn } from "../../helpers/AuthHelper";

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

  useEffect(() => {
    sessionStorage.setItem("webId", session.info.webId || "");
  }, [session.info.sessionId]);

  return (
    <div className="login-form-container">
        <BaseTextInput
          label="WebId"
          onChange={handleWebId}
          type="text"
          placeholder="https://id.inrupt.com/..."
        />
        <select onChange={handleSelectProvider}>
          <option value="https://solidweb.org/login">Solid Web</option>
          <option value="https://inrupt.net">Inrupt.net</option>
          <option value="https://login.inrupt.com">pod.Inrupt.com</option>
        </select>
        <BaseButton
          type="button-blue"
          text="Iniciar sesión"
          onClick={(e) => handleLogin(e)}
        />
        {/* <LoginButton 
          authOptions={{ clientName: "Lomap", clientId: webId, refreshToken: "refreshToken"}}
          oidcIssuer="https://inrupt.net/"
          redirectUrl="http://localhost:3000/"
          onError={console.error} */}  
    </div>
  );
}

export default LoginForm;
