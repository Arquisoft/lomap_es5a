import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import SingleDetail from "../../components/points/details/SingleDetails";
import PointReviewSection from "../../components/points/details/PointReviewSection";
import AddNewPointLink from "../../components/points/details/AddNewPointLink";
import ReviewListing from "../../components/points/details/ReviewListing";
import "../../public/css/pages/points/SinglePointPage.scss";


function SinglePointDetailsPage() {

  return (
    <AuthenticatedLayout>
      <div className="single-point-details-container">
        <SinglePointDetailBanner />
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
