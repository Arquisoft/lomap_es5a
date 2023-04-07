import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import SingleDetail from "../../components/points/details/SingleDetails";
import PointReviewSection from "../../components/points/details/PointReviewSection";
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
      </div>
    </AuthenticatedLayout>
  );
}

export default SinglePointDetailsPage;
