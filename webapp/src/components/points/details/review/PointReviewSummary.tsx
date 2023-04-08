import "../../../../public/css/components/points/details/review/PointReviewSummary.css"
import { usePointDetailsStore } from "../../../../store/point.store";

function PointReviewSummary(){
    const {info} = usePointDetailsStore(); 
    const valoraciones = info.reviews?.map(r => r.rating);
    let media = 0;
    if(valoraciones){
        const sumValor = valoraciones.reduce((a,b)=> a + b,0) 
        media = sumValor/ valoraciones.length
    }
    return(
        <div className="point-review-summary-container">
            <div className="point-review-summary-container-media">{media} </div><p> / 5</p>
        </div>
    )
}

export default PointReviewSummary