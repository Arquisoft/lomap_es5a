import { ChangeEvent, useState } from "react";
import { signIn } from "src/helpers/AuthHelper";
import BaseButton from "../buttons/BaseButton";
import BaseTextInput from "../inputs/BaseTextInput";

import "../../public/css/components/forms/loginForm/LoginForm.scss";

function LoginForm() {
  const [webId, setWebId] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn(webId);
  };

  const handleWebId = (e: ChangeEvent<HTMLInputElement>) => {
    setWebId(e.currentTarget.value);
  };

  return (
    <div className="login-form-container">
        <BaseTextInput
          label="WebId"
          onChange={handleWebId}
          type="text"
          placeholder="https://id.inrupt.com/..."
        />
        <BaseButton
          type="button-blue"
          text="Iniciar sesión"
          onClick={(e) => handleLogin(e)}
        />
    </div>
  );
}

export default LoginForm;
