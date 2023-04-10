import "../../../public/css/components/points/details/ReviewListing.css"
import SingleReview from "./review/SingleReview"

function ReviewListing(){
    return(
        <div className="review-listing-container">
            <h2> Valoraciones de los usuarios</h2>
            <div className="review-listing-listReviews">
                <SingleReview />
            </div>
        </div>
    )
}

export default ReviewListing