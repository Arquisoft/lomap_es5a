import "../../../public/css/components/points/details/PointReviewSection.css"
import PointReviewSummary from "./review/PointReviewSummary"
import ReviewStars from "./review/ReviewStars"


function PointReviewSection(){

    return(
        <div className="point-review-section-container">
            <h2>Valoraciones</h2>
            <div className="point-review-section-review-container">
                <div className="point-review-section-review-summary">
                    <PointReviewSummary />
                </div>

                <p> 20 valoraciones</p>

                <div className="point-review-section-review-stars">
                    <ReviewStars />
                </div>
            </div>
        </div>
    )
}

export default PointReviewSection