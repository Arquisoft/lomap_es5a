import React from "react";
import AppLogo from "../../components/AppLogo";
import LoginForm from "../../components/forms/LoginForm";
import NoAuthenticatedLayout from "../../layouts/NoAuthenticatedLayout";
import "../../public/css/pages/login/LoginPage.scss";

function LoginPage() {
  return (
    <>
      <NoAuthenticatedLayout>
        <div className="login-page-container">
          <div className="login-page__image">
            <div className="login-page__image__wrapper">
              <AppLogo width={350} height={200} fill="#FFFFFF" />
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
