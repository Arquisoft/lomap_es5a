import { useSession } from "@inrupt/solid-ui-react";
import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AddNewPointLink from "../../components/points/details/AddNewPointLink";
import PointReviewSection from "../../components/points/details/PointReviewSection";
import ReviewListing from "../../components/points/details/ReviewListing";
import SingleDetail from "../../components/points/details/SingleDetails";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import "../../public/css/pages/points/SinglePointPage.scss";
import { usePointDetailsStore } from "../../store/point.store";

function SinglePointDetailsPage() {
  const { pointToShow } = usePointDetailsStore();
  const { session } = useSession();

  return (
    <AuthenticatedLayout>
      <div className="single-point-details-container" id="point-details-page">
        <SinglePointDetailBanner pointImage={pointToShow?.image?.url || ""} />
        <section className="single-point-details__details">
          <SingleDetail pointToShow={pointToShow} />
        </section>
        <section className="single-point-details__reviews">
          <PointReviewSection pointToShow={pointToShow} />
        </section>
        <p>
          {session.info.webId} - {pointToShow?.owner?.webId}
        </p>
        {session.info.webId !== pointToShow?.owner?.webId && (
          <section className="single-point-details__addReview">
            <AddNewPointLink pointToShow={pointToShow} />
          </section>
        )}
        <section className="single-point-details__reviewListing">
          <ReviewListing pointToShow={pointToShow} />
        </section>
      </div>
    </AuthenticatedLayout>
  );
}

export default SinglePointDetailsPage;
