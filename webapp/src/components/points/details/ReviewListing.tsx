import "../../../public/css/components/points/details/ReviewListing.css"
import { Point } from "../../../shared/shareddtypes"
import SingleReview from "./review/single/SingleReview"

type Props = {
    pointToShow : Point
}

function ReviewListing(point:Props){

    return(
        <div className="review-listing-container">
            <h2> Valoraciones de los usuarios</h2>
            <div className="review-listing-listReviews">
                 
               {point.pointToShow.reviews?.map( review => 
                    <SingleReview 
                        key={review.title}
                        comment={review.comment}
                        rating={review.rating}
                        reviewer={review.reviewer}
                        createdAt= {review.createdAt}
                    />
                )}

            </div>
        </div>
    )
}

export default ReviewListing