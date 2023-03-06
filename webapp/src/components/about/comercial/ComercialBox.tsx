import BaseButton from "src/components/buttons/BaseButton"
import "../../../public/css/components/about/comercial/ComercialBox.css"
function ComercialBox(){
    return(
        <div className="comercialbox-total">
            <div className="comercialbox-title">
                <div className="comercialbox-title-left">Lomap </div> <div className="comercialbox-title-rigth">Mapas</div>
            </div>
            <div className="comercialbox-slogan">
                ¡Explora todos los rincones de tu ciudad y compartelos con amigos y todo el mundo!
            </div>
            <div className="comercialbox-discount">
                100% GRATIS
            </div>
            <div className="comercialbox-buttons">
            <BaseButton type="button-red" text ="Compartir" /> <BaseButton type="button-red" text ="Únete" />
            </div>
        </div>
    )
}

export default ComercialBox