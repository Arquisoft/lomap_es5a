import { ChangeEvent, useEffect, useState } from "react";
//import { LoginButton, useSession } from "@inrupt/solid-ui-react";
import "../../public/css/components/forms/loginForm/LoginForm.scss";
import BaseTextInput from "../inputs/BaseTextInput";
import BaseButton from "../buttons/BaseButton";
import {Button} from "@mui/material";
import { signIn } from "../../helpers/AuthHelper";
import BaseSelect from "../inputs/BaseSelect";
import { SOLID_PROVIDERS } from "../../data/providers";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
  const [webId, setWebId] = useState("")
  const [providerUrl, setProviderUrl] = useState(SOLID_PROVIDERS[0].value);  

  //const { session } = useSession();
  const {login} = useAuth();


  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login();
    signIn(providerUrl);

  };

  const handleSelectProvider = (e: ChangeEvent<HTMLSelectElement>) =>{    
    console.log(e.target.value);
    setProviderUrl(e.target.value);
    //e.preventDefault();
  }

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
          category=""
          showContent={true}
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
    </div>
  );
}

export default LoginForm;
