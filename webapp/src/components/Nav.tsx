import { useSession } from "@inrupt/solid-ui-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../helpers/MenuHelper";
import "../public/css/navs/BaseNav.scss";
import { LOGIN_PATH } from "../routes";
import AppLogo from "./AppLogo";
import BaseAvatar from "./avatars/BaseAvatar";
import BaseButton from "./buttons/BaseButton";
import AccountNavMenu from "./menus/AccountNavMenu";

function BaseNav() {
  // Para mostrar u ocultar el menu asociado al avatar del menu de navegacion.
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const { session } = useSession();

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
            {session.info.isLoggedIn ? (
              <BaseAvatar
                img="https://randomuser.me/api/portraits/women/68.jpg"
                imgAlt="María Fernández"
                onClick={(e) => handleShowAccountNavMenu(e)}
              />
            ) : (
              <div id="nav-">
                <BaseButton
                  type="button-blue"
                  text="Iniciar sesión"
                  onClick={(e) => window.location.href = LOGIN_PATH} />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BaseNav;
