import "../../../../public/css/components/points/details/review/PointReviewSummary.css"


type Props = {
    media : number
}

function PointReviewSummary(media:Props){

    return(
        <div className="point-review-summary-container">
            <div className="point-review-summary-container-media">{media.media} </div><p> / 5</p>
        </div>
    )
}

export default PointReviewSummary