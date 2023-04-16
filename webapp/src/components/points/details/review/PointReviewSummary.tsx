import "../../../../public/css/components/points/details/review/PointReviewSummary.css"



type Props = {
    media : number
}

function PointReviewSummary(media:Props){

    return(
        <div className="point-review-summary-container">
            <div className="point-review-summary-container-media">{(media.media as number).toPrecision(2)}</div><p> / 5</p>
        </div>
    )
}

export default PointReviewSummary