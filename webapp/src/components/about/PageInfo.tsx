import { InfoBox } from "./info/InfoBox"
import "../../public/css/components/about/PageInfo.css"


import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';

function PageInfo(){
    return(
        <div className="info-principal">
            <div className="info-comp1">
                <InfoBox 
                    icon={<FingerprintRoundedIcon fontSize="large"/>}
                    title="Privacidad" 
                    description="Tu decides que puntos compartir. La información se almacena de forma distribuida."
                 />
            </div>
            <div className="info-comp2">
                <InfoBox 
                    icon={<ShareRoundedIcon fontSize="large"/>}
                    title="Visibilidad" 
                    description="Si eres un negocio local, compártelo con tus amigo y el resto de usuarios." 
                />
            </div>
            <div className="info-comp3">
                <InfoBox
                    icon={<GppGoodRoundedIcon fontSize="large"/>}
                    title="Seguridad" 
                    description="Tu eres el propietario de tus publicaciones, no almacenamos tus publicaciones." 
                />
            </div>
        </div>
    )
}

export default PageInfo