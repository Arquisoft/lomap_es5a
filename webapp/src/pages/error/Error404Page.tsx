import React from "react";
import { useNavigate } from "react-router";
import BaseButton from "../../components/buttons/BaseButton";
import "../../public/css/pages/error404/error404Page.scss";
import { HOME_PATH } from "../../routes";
function Error404Page() {
  const navigate = useNavigate();
  const redirectToHome = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(HOME_PATH);
  };

  return (
    <div className="error404-container">
      <h1>Página no encontrada</h1>
      <h2>La página que buscas no está disponible</h2>
      <BaseButton
        type="button-blue"
        text="Volver a inicio"
        onClick={(e) => redirectToHome(e)}
      />
    </div>
  );
}

export default Error404Page;
