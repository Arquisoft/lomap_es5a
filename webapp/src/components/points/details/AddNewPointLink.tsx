import { AddIcon, ArrowForwardIosIcon } from "../../../helpers/IconContants";
import "../../../public/css/components/points/details/AddNewPointLink.css";
import { usePointReviewStore } from "../../../store/review.store";

function AddNewPointLink() {
  const { setShowAddReviewPopup } = usePointReviewStore();

  const handleShowAddReviewPopup = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowAddReviewPopup(true);
  };

  return (
    <div className="add-new-point-link-container">
      <button onClick={handleShowAddReviewPopup}>
        <div className="add-new-point-link-button">
          <div className="add-new-point-link-button-text">
            <AddIcon /> <p>Añadir valoración</p>
          </div>
          <div className="add-new-point-link-button-arrow">
            <ArrowForwardIosIcon />
          </div>
        </div>
      </button>
    </div>
  );
}

export default AddNewPointLink;
