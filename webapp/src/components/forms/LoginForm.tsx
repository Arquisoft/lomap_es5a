import { ChangeEvent, useState } from "react";
import { signIn } from "src/helpers/AuthHelper";
import BaseButton from "../buttons/BaseButton";
import BaseTextInput from "../inputs/BaseTextInput";

import "../../public/css/components/forms/loginForm/LoginForm.scss";

function LoginForm() {
  const [webId, setWebId] = useState("");
  const [providerUrl, setProviderUrl] = useState("https://inrupt.net");

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn(webId, providerUrl);
  };

  const handleWebId = (e: ChangeEvent<HTMLInputElement>) => {
    setWebId(e.currentTarget.value);
  };

  const handleSelectProvider = (e: ChangeEvent<HTMLSelectElement>) =>{
    setProviderUrl(e.currentTarget.value);
  }

  return (
    <div className="login-form-container">
        <BaseTextInput
          label="WebId"
          onChange={handleWebId}
          type="text"
          placeholder="https://id.inrupt.com/..."
        />
        <select onChange={handleSelectProvider}>
          <option value="https://solidweb.org/login" selected>Solid Web</option>
          <option value="https://inrupt.net">Inrupt.net</option>
          <option value="https://pod.inrupt.com">pod.Inrupt.com</option>
        </select>
        <BaseButton
          type="button-blue"
          text="Iniciar sesión"
          onClick={(e) => handleLogin(e)}
        />
    </div>
  );
}

export default LoginForm;
