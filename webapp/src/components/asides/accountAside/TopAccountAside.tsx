import "../../../public/css/components/asides/accountAside/TopAccountAside.css";
import TopAsideButton from "./topAccountAside/TopAsideButton";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LockIcon from "@mui/icons-material/Lock";
import MapIcon from "@mui/icons-material/Map";
import RoomIcon from "@mui/icons-material/Room";
import SettingsIcon from "@mui/icons-material/Settings";
import { red } from "@mui/material/colors";

function TopAccountAside() {
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
        />
      </div>
    </div>
  );
}

export default TopAccountAside;
