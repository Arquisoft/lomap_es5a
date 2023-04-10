import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import SingleDetail from "../../components/points/details/SingleDetails";
import "../../public/css/pages/points/SinglePointPage.scss";
import PointReviewSection from "../../components/points/details/PointReviewSection";
import AddNewPointLink from "../../components/points/details/AddNewPointLink";
import ReviewListing from "../../components/points/details/ReviewListing";
import "../../public/css/pages/points/SinglePointPage.scss";
import { usePointDetailsStore } from "../../store/point.store";


function SinglePointDetailsPage() {
  const { pointToShow } = usePointDetailsStore();
  return (
    <AuthenticatedLayout>      
      <div className="single-point-details-container" id="point-details-page">
        <SinglePointDetailBanner pointImage={pointToShow?.image?.url || ""} />
        <section className="single-point-details__details">
          <SingleDetail pointToShow = {pointToShow}/>
        </section>
        <section className="single-point-details__reviews">
          <PointReviewSection pointToShow = {pointToShow} />
        </section> 
        <section className="single-point-details__addReview" >
          <AddNewPointLink pointToShow={pointToShow}/>
        </section>
        <section className="single-point-details__reviewListing" >
          <ReviewListing />
        </section>

      </div>
    </AuthenticatedLayout>
  );
}

export default SinglePointDetailsPage;
