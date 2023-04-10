import "../../../public/css/components/points/details/AddNewPointLink.css"
import { AddIcon } from "../../../helpers/IconContants"
import { ArrowForwardIosIcon } from "../../../helpers/IconContants"
import { usePointReviewStore } from "../../../store/review.store";
import { createPortal } from "react-dom";
import AddNewReviewToPointPopup from "../../popups/AddNewReviewToPointPopup";
import { Point } from "../../../shared/shareddtypes";

type Props = {
    pointToShow : Point
}

function AddNewPointLink(point:Props){

    const { showAddReviewPopup, setShowAddReviewPopup } = usePointReviewStore();

    return(
        <div className="add-new-point-link-container">
            {showAddReviewPopup &&
                createPortal(
                <AddNewReviewToPointPopup pointInfo={point.pointToShow}/>,
                (document.getElementById("point-details-page") as Element) ??
            document.body
        )}
            <button onClick={(e) => {
                e.preventDefault();
                setShowAddReviewPopup(true);
            }}>
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