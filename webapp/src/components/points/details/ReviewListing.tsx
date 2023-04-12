import { useEffect } from "react";
import "../../../public/css/components/points/details/ReviewListing.css";
import { Point } from "../../../shared/shareddtypes";
import { usePointDetailsStore } from "../../../store/point.store";
import SingleReview from "./review/single/SingleReview";

function ReviewListing() {
  const { pointToShow } = usePointDetailsStore();

  useEffect(() => {
    usePointDetailsStore.subscribe((point: any) => {
      pointToShow.reviews = point.reviews;
    });
  }, []);

  return (
    <div className="review-listing-container">
      <h2> Valoraciones de los usuarios</h2>
      <div className="review-listing-listReviews">
        {pointToShow.reviews?.map((review) => (
          <SingleReview
            key={review.title}
            comment={review.comment}
            rating={review.rating}
            reviewer={review.reviewer}
            createdAt={review.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewListing;
