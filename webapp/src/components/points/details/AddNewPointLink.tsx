import { createPortal } from "react-dom";
import { AddIcon, ArrowForwardIosIcon } from "../../../helpers/IconContants";
import "../../../public/css/components/points/details/AddNewPointLink.css";
import { Point } from "../../../shared/shareddtypes";
import { usePointReviewStore } from "../../../store/review.store";
import AddNewReviewToPointPopup from "../../popups/AddNewReviewToPointPopup";

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
                <div className="add-new-point-link-button" role="container">
                    <div className="add-new-point-link-button-text" role="text">
                        <AddIcon /> <p>Añadir valoración</p>
                    </div>
                    <div className="add-new-point-link-button-arrow" role="arrow-icon" >
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </button>
        </div>
  );
}

export default AddNewPointLink;
