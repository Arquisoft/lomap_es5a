import "../../../../public/css/components/points/details/review/PointReviewSummary.css"
import { ceilNumber } from "../../../../utils/numberUtils"


type Props = {
    media : number
}

function PointReviewSummary(media:Props){

    return(
        <div className="point-review-summary-container">
            <div className="point-review-summary-container-media">{ceilNumber(media.media, 0)} </div><p> / 5</p>
        </div>
    )
}

export default PointReviewSummary