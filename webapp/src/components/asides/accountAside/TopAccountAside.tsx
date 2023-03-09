import "../../../public/css/components/asides/accountAside/TopAccountAside.css"
import TopAsideButton from "./topAccountAside/TopAsideButton"
import MapIcon from "@material-ui/icons/Map";
import FavoriteIcon from '@material-ui/icons/Favorite';
import RoomIcon from '@material-ui/icons/Room';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';


function TopAccountAside(){
    return(
        <div className="top-acc-aside-main">
            <div className="top-acc-aside-back">
                ATRAS
            </div>
            <div className="top-acc-aside-title">
                Mi cuenta
            </div>
            <div className="top-acc-aside-buttons">
                <TopAsideButton
                   icon={<MapIcon fontSize="large"/>}
                    text="Ver mapa"
                />
                <TopAsideButton
                   icon={<FavoriteIcon fontSize="large"/>}
                    text="Puntos guardados"
                />
                <TopAsideButton
                   icon={<RoomIcon fontSize="large"/>}
                    text="Crear punto"
                />
                <TopAsideButton
                   icon={<SettingsIcon fontSize="large"/>}
                    text="Ajustes"
                />
                <TopAsideButton
                   icon={<LockIcon fontSize="large"/>}
                    text="Cerrar sesion"
                />
                
            </div>
        </div>
    )
}

export default TopAccountAside