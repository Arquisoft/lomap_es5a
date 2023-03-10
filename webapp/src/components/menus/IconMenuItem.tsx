import "../../public/css/components/menus/menuItems/IconMenuItem.scss";
import Icon from "@mui/material/Icon";

/**
 * @param name: Nombre del elemento de menu.
 * @param iconName: Nombre del icono MUI Icons.
 */
type Props = {
  name: string;
  iconName?: string;
};

function IconMenuItem({ name, iconName }: Props) {
  return (
    <li className="icon-menu-item">
      <Icon sx={{ fontSize: 24 }}>{iconName}</Icon>
      <span>{name}</span>
    </li>
  );
}

export default IconMenuItem;
