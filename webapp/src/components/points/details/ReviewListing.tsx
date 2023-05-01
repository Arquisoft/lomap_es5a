
import "../../../public/css/components/points/details/ReviewListing.css";
import { usePointDetailsStore } from "../../../store/point.store";
import SingleReview from "./review/single/SingleReview";

function ReviewListing() {
  const { pointToShow } = usePointDetailsStore();
  console.log(pointToShow);
  return (
    
    <div className="review-listing-container">
      <h2> Valoraciones de los usuarios</h2>
      {pointToShow?.reviews && pointToShow?.reviews?.length == 0 && (
        <p> No hay valoraciones </p>
      )}
      <div className="review-listing-listReviews">
        {pointToShow.reviews?.map((review) => (
          
          <SingleReview
            key={review.title}
            comment={review.comment}
            rating={review.rating}
            reviewer={review.reviewer}
            createdAt={review.createdAt}
            pointId= {pointToShow._id}
            reviewId = {review._id}
            ownerId= {pointToShow.owner.webId}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewListing;
