import { useSession } from "@inrupt/solid-ui-react";
import React, { useState } from "react";
import { SOLID_PROVIDERS } from "../../data/providers";
import { signIn } from "../../helpers/AuthHelper";
import useAuth from "../../hooks/useAuth";
import "../../public/css/components/forms/loginForm/LoginForm.scss";
import BaseButton from "../buttons/BaseButton";
import BaseSelect from "../inputs/BaseSelect";

function LoginForm() {
  const { login } = useAuth();
  const { session } = useSession();
  const [providerUrl, setProviderUrl] = useState(SOLID_PROVIDERS[0].value);

  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login();
    signIn(session, providerUrl);
  };

  const handleSelectProvider = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setProviderUrl(e.target.value);
  };

  return (
    <div className="login-form-container">
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
          type="button-blue-outlined"
          text="Log In"
          onClick={(e) => {
            handleLogin(e);
          }}
        />
      </div>
    </div>
  );
}

export default LoginForm;
