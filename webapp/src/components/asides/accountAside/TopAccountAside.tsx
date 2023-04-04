import { useSession } from "@inrupt/solid-ui-react";
import "../../../public/css/components/asides/accountAside/TopAccountAside.css";
import TopAsideButton from "./topAccountAside/TopAsideButton";

import {
  ArrowBackIosIcon,
  FavoriteIcon,
  LockIcon,
  MapIcon,
  RoomIcon,
  SettingsIcon,
} from "../../../helpers/IconContants";

import { red } from "@mui/material/colors";
import { BASE_PATH, LOGIN_PATH } from "../../../routes";

function TopAccountAside() {
  const { session } = useSession();

  const handleLogout = async (e: any) => {
    e.preventDefault();
    sessionStorage.clear();
    await session.logout().then(() => {
      window.location.href = `${BASE_PATH}${LOGIN_PATH}`;
    });
  };

  return (
    <div className="top-acc-aside-main">
      <button className="top-acc-aside-back">
        <ArrowBackIosIcon />
      </button>
      <div className="top-acc-aside-title">Mi cuenta</div>
      <div className="top-acc-aside-buttons">
        <TopAsideButton icon={<MapIcon />} text="Ver mapa" />
        <TopAsideButton
          icon={<FavoriteIcon style={{ color: red[500] }} />}
          text="Puntos guardados"
        />
        <TopAsideButton icon={<RoomIcon />} text="Crear punto" />
        <TopAsideButton icon={<SettingsIcon />} text="Ajustes" />
        <TopAsideButton
          icon={<LockIcon style={{ color: red[500] }} />}
          text="Cerrar sesion"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}

export default TopAccountAside;
