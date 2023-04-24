import Icon from "@mui/material/Icon";
import "../../public/css/components/menus/menuItems/IconMenuItem.scss";
import { useSession } from "@inrupt/solid-ui-react";
import { LOGIN_PATH } from "../../routes";
import { useNavigate } from "react-router-dom";

/**
 * @param name: Nombre del elemento de menu.
 * @param iconName: Nombre del icono MUI Icons.
 */
type Props = {
  name: string;
  iconName?: string;
  url?: string;
};

function IconMenuItem({ name, iconName, url }: Props) {
  const { session } = useSession();
  const navigate = useNavigate();

  const handleRedirect = async (e: any) => {
    if (name === "Cerrar sesión") {
      e.preventDefault();
      sessionStorage.clear();
      await session.logout().then(() => {
        window.location.href = LOGIN_PATH;
      });
    }
    navigate(url ?? "#");
  };

  return (
    <li className="icon-menu-item" onClick={handleRedirect}>
      <Icon sx={{ fontSize: 24 }}>{iconName}</Icon>
      <span>{name}</span>
    </li>
  );
}

export default IconMenuItem;
