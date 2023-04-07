import { useState } from "react";
import { redirect } from "react-router-dom";
import { LOGIN_PATH } from "../routes";

/**
 * Hook para gestionar la autenticación de un usuario.
 * Actuará como un middleware para proteger las rutas de la aplicación.
 * Utilizado para gestionar el comportamiento de la librería de SOLID, ya que puede
 * refrescar la página y perder la sesión, por lo que se debe volver a autenticar.
 *
 * @returns
 */
function useAuth() {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => {
    setIsLogged(true);
  };

  const logout = () => {
    setIsLogged(false);
    redirect(LOGIN_PATH);
  };

  return {
    isLogged,
    login,
    logout,
  };
}

export default useAuth;
