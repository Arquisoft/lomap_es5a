import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "src/context/AuthContext";
import { menuItems } from "../helpers/MenuHelper";
import "../public/css/navs/BaseNav.scss";
import AppLogo from "./AppLogo";
import BaseAvatar from "./avatars/BaseAvatar";
import AccountNavMenu from "./menus/AccountNavMenu";

function BaseNav() {
  // Para mostrar u ocultar el menu asociado al avatar del menu de navegacion.
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const isAuthenticated = useContext(AuthContext);

  /**
   * Muestra el menu asociado al avatar del menu de navegación.
   */
  const handleShowAccountNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowAccountMenu(!showAccountMenu);
  };

  return (
    <div className="base-nav-container">
      {showAccountMenu && <AccountNavMenu />}
      <AppLogo />
      <nav id="main-nav">
        <ul>
          {menuItems
            .filter((item) => item.show && item.url)
            .map((item) => (
              <li key={item.alias}>
                {item.url && <Link to={item.url}>{item.name}</Link>}
              </li>
            ))}

          <li>
            {isAuthenticated ? (
              <BaseAvatar
                img="https://randomuser.me/api/portraits/women/68.jpg"
                imgAlt="María Fernández"
                onClick={(e) => handleShowAccountNavMenu(e)}
              />
            ) : (
              <div id="nav-">
                <Button type="button" size="small" variant="outlined">
                  Crear una cuenta
                </Button>
                <Button type="button" size="small" variant="contained">
                  Iniciar sesión
                </Button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BaseNav;
