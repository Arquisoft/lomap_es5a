import Icon from "@mui/material/Icon";
import "../../public/css/components/menus/menuItems/IconMenuItem.scss";

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
  const handleRedirect = () => {
    window.location.href = url || "";
  };

  return (
    <li className="icon-menu-item"onClick={handleRedirect}>
      <Icon sx={{ fontSize: 24 }}>{iconName}</Icon>
      <span>{name}</span>
    </li>
  );
}

export default IconMenuItem;
