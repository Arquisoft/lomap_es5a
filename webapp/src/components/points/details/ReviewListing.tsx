import "../../../public/css/components/points/details/ReviewListing.css";
import { useAllPointReviewStore } from "../../../store/review.store";
import SingleReview from "./review/SingleReview";

function ReviewListing(){
    const {getAllReviews} = useAllPointReviewStore();
    return(
        <div className="review-listing-container">
            <h2> Valoraciones de los usuarios</h2>
            <div className="review-listing-listReviews">
                {
                    getAllReviews() && getAllReviews().map((review) => {
                        return(
                            <SingleReview key={review._id} review={review} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ReviewListing