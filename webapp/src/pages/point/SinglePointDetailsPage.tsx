
import { createPortal } from "react-dom";

import SingleDetail from "../../components/points/details/SingleDetails";
import PointReviewSection from "../../components/points/details/PointReviewSection";
import AddNewPointLink from "../../components/points/details/AddNewPointLink";
import ReviewListing from "../../components/points/details/ReviewListing";

import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AddNewReviewToPointPopup from "../../components/popups/AddNewReviewToPointPopup";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";

import "../../public/css/pages/points/SinglePointPage.scss";
import { usePointDetailsStore } from "../../store/point.store";
import { usePointReviewStore } from "../../store/review.store";
import BaseStarRating from "../../components/stars/BaseStarRating";
import "../../public/css/pages/points/SinglePointPage.scss";


function SinglePointDetailsPage() {
  const { pointToShow } = usePointDetailsStore();
  const { showAddReviewPopup } = usePointReviewStore();

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
          <SingleDetail />
        </section>
        <section className="single-point-details__reviews">
          <PointReviewSection />
        </section> 
        <section className="single-point-details__addReview" >
          <AddNewPointLink />
        </section>
        <section className="single-point-details__reviewListing" >
          <ReviewListing />
        </section>

      </div>
    </AuthenticatedLayout>
  );
}

export default SinglePointDetailsPage;
