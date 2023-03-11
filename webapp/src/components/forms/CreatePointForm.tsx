import "../../public/css/components/forms/CreatePointForm.css"
import BaseButton from "../buttons/BaseButton"

function CreatePointForm(){
    return (
        <div className="create-form-main">
            <div className="create-form-title">
                Crear un punto
            </div>
            <div className="create-form-info">
                Los campos con (*) son obligatorios.
            </div>
            <div className="create-form-form">

            </div>
            <div className="create-form-buttons">
                <div className="create-form-buttonrigth">
                    <BaseButton type="button-red-form" text="Publicar" />
                </div>
                <div className="create-form-buttonleft"> 
                    <BaseButton type="button-grey-form" text ="Cancelar" />
                </div>

            </div>
        </div>
    )
}

export default CreatePointForm