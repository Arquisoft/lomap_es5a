import React from "react";
import AppLogo from "../../components/AppLogo";
import NoAuthenticatedLayout from "../../layouts/NoAuthenticatedLayout";
import LoginForm from "../../components/forms/LoginForm";
import "../../public/css/pages/login/LoginPage.scss";

import bg1 from "../../public/images/bg-1.jpg";

function LoginPage() {
  return (
    <>
      <NoAuthenticatedLayout>
        <div className="login-page-container">
          <div className="login-page__image">
            <div className="login-page__image__wrapper">
              <AppLogo width={350} height={200} fill="#FFFFFF" />
              {/* <h2>Tu aplicación de mapas</h2> */}
            </div>
          </div>
          <div className="login-page__wrapper">
            <h1>Iniciar sesión</h1>
            <LoginForm />
          </div>
        </div>
      </NoAuthenticatedLayout>
    </>
  );
}

export default LoginPage;
