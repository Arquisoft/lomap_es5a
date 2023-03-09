import React from "react";
import NoAuthenticatedLayout from "src/layouts/NoAuthenticatedLayout";
import LoginForm from "../../components/forms/LoginForm";

function LoginPage() {
  return (
    <>
      <NoAuthenticatedLayout>
        <>
          <h1>Iniciar sesión</h1>
          <LoginForm />
        </>
      </NoAuthenticatedLayout>
    </>
  );
}

export default LoginPage;
