import BaseButton from "../../../components/buttons/BaseButton"
import "../../../public/css/components/about/comercial/comercialBox.css"
function ComercialBox(){
    return(
        <div className="comercialbox-total" role="comercialbox-total">
            <div className="comercialbox-title" role="comercialbox-title">
                <div className="comercialbox-title-left" role="comercialbox-title-left">Lomap</div> 
                <div className="comercialbox-title-rigth" role="comercialbox-title-rigth">Mapas</div>
            </div>
            <div className="comercialbox-slogan" role="comercialbox-slogan">
                ¡Explora todos los rincones de tu ciudad y compartelos con amigos y todo el mundo!
            </div>
            <div className="comercialbox-discount" role="comercialbox-discount">
                100% GRATIS
            </div>
            {/* <div className="comercialbox-buttons" role="comercialbox-buttons">
                <div className="comercialbox-buttonleft" role="comercialbox-buttonleft"> 
                    <BaseButton data-testid="b1" type="button-grey" text ="Compartir" onClick={() => ""} />
                </div>
                <div className="comercialbox-buttonright" role="comercialbox-buttonright">
                    <BaseButton data-testid="b2" type="button-red" text="Únete" onClick={() => ""}/>
                </div>
            </div> */}
        </div>
    )
}

export default ComercialBox