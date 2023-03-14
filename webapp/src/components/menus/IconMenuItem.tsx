import "../../public/css/components/menus/menuItems/IconMenuItem.scss";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";

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
  return (
    <li className="icon-menu-item">
      <Icon sx={{ fontSize: 24 }}>{iconName}</Icon>
      <span>{name}</span>
    </li>
  );
}

export default IconMenuItem;
