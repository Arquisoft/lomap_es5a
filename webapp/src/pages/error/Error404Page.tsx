import BaseButton from "src/components/buttons/BaseButton";
import NoAuthenticatedLayout from "src/layouts/NoAuthenticatedLayout";

import "../../public/css/pages/error404/error404Page.scss";
function Error404Page() {
  const redirectToHome = (e: React.MouseEvent<HTMLBaseElement>) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="error404-container">
      <h1>Página no encontrada</h1>
      <h2>La página que buscas no está disponible</h2>
      <BaseButton
        type="button-blue"
        text="Volver a inicio"
        onClick={redirectToHome}
      />
    </div>
  );
}

export default Error404Page;
