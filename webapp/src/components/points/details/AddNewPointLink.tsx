import "../../../public/css/components/points/details/AddNewPointLink.css"
import { AddIcon } from "../../../helpers/IconContants"
import { ArrowForwardIosIcon } from "../../../helpers/IconContants"


function AddNewPointLink(){
    return(
        <div className="add-new-point-link-container">
            <button>
                <div className="add-new-point-link-button">
                    <div className="add-new-point-link-button-text">
                        <AddIcon /> <p>Añadir valoración</p>
                    </div>
                    <div className="add-new-point-link-button-arrow" >
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default AddNewPointLink