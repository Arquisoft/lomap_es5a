import "../../../public/css/components/asides/accountAside/TopAccountAside.css";
import TopAsideButton from "./topAccountAside/TopAsideButton";
import { useSession } from "@inrupt/solid-ui-react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LockIcon from "@mui/icons-material/Lock";
import MapIcon from "@mui/icons-material/Map";
import RoomIcon from "@mui/icons-material/Room";
import SettingsIcon from "@mui/icons-material/Settings";
import { red } from "@mui/material/colors";

function TopAccountAside() {
  const { session } = useSession();

  const handleLogout = async (e: any) => {
    e.preventDefault();
    sessionStorage.clear();
    await session.logout().then(() => {
      window.location.href = "http://localhost:3000/login";
    })
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
