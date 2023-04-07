import "../../../public/css/components/points/details/PointReviewSection.css"
import PointReviewSummary from "./review/PointReviewSummary"
import ReviewStars from "./review/ReviewStars"

function PointReviewSection(){
    return(
        <div className="point-review-section-container">
            <h2>Valoraciones</h2>

            <div className="point-review-section-summary">
                <PointReviewSummary />
            </div>

            <p> 20 valoraciones</p>

            <div className="point-review-section-stars">
                <ReviewStars />
            </div>
        </div>
    )
}

export default PointReviewSection