import { createPortal } from "react-dom";
import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AddNewReviewToPointPopup from "../../components/popups/AddNewReviewToPointPopup";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import "../../public/css/pages/points/SinglePointPage.scss";
import { usePointDetailsStore } from "../../store/point.store";
import { usePointReviewStore } from "../../store/review.store";
import BaseStarRating from "../../components/stars/BaseStarRating";

function SinglePointDetailsPage() {
  const { pointToShow } = usePointDetailsStore();
  const { showAddReviewPopup, setShowAddReviewPopup } = usePointReviewStore();

  return (
    <AuthenticatedLayout>
      {showAddReviewPopup &&
        createPortal(
          <AddNewReviewToPointPopup pointInfo={pointToShow}/>,
          (document.getElementById("point-details-page") as Element) ??
            document.body
        )}
      <div className="single-point-details-container" id="point-details-page">
        <SinglePointDetailBanner pointImage={pointToShow?.image?.url || ""} />
        <section className="single-point-details__details">
          <h2>Detalles</h2>
          <div>
            {pointToShow && (
              <div>
                <p>Nombre: {pointToShow.name}</p>
                <p>Descripción: {pointToShow.description}</p>
                <p>Latitud: {pointToShow.location.coords.lat}</p>
                <p>Longitud: {pointToShow.location.coords.lng}</p>
              </div>
            )}
          </div>
          <div>
            {pointToShow?.reviews &&
              pointToShow.reviews.map((review) => (
                <div key={review._id}>
                  <p>
                    Valoración: {review.title}: {review.comment} ::{" "}
                    {review.rating}
                  </p>
                </div>
              ))}
          </div>
        </section>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowAddReviewPopup(true);
          }}
        >
          Añadir valoracion
        </button>

        {/* <section className="single-point-details__reviews">
          <h2>Valoraciones</h2>
        </section> */}
      </div>
    </AuthenticatedLayout>
  );
}

export default SinglePointDetailsPage;
