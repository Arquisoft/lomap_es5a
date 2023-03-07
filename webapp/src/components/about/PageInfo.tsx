import { InfoBox } from "./info/InfoBox"
import "../../public/css/components/about/PageInfo.css"

function PageInfo(){
    return(
        <div className="info-principal">
            <div className="info-comp1">
                <InfoBox 
                    image="/src/public/images/icons/about/privacidad.png"
                    title="Privacidad" 
                    description="Tu decides que puntos compartir. La información se almacena de forma distribuida."
                 />
            </div>
            <div className="info-comp2">
                <InfoBox 
                    image=""
                    title="Visibilidad" 
                    description="Si eres un negocio local, compártelo con tus amigo y el resto de usuarios." 
                />
            </div>
            <div className="info-comp3">
                <InfoBox 
                    image=""
                    title="Seguridad" 
                    description="Tu eres el propietario de tus publicaciones, no almacenamos tus publicaciones." 
                />
            </div>
        </div>
    )
}

export default PageInfo