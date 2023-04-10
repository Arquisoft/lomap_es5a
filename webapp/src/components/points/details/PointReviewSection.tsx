import "../../../public/css/components/points/details/PointReviewSection.css"
import PointReviewSummary from "./review/PointReviewSummary"
import BaseStarRating from "../../stars/BaseStarRating";
import { usePointDetailsStore } from "../../../store/point.store";
import { Point } from "../../../shared/shareddtypes";

type Props = {
    pointToShow:Point
  }

function PointReviewSection(point:Props){

    const valoraciones = point.pointToShow.reviews?.map(r => r.rating);
    let media = 0;
    if(valoraciones){
        const sumValor = valoraciones.reduce((a,b)=> a + b,0) 
        media = sumValor/ valoraciones.length
    }
    
    return(
        <div className="point-review-section-container">
            <h2>Valoraciones</h2>
            <div className="point-review-section-review-container">
                <div className="point-review-section-review-summary">
                    <PointReviewSummary media={media}/>
                </div>

                <p> {valoraciones?.length} valoraciones</p>

                <div className="point-review-section-review-stars">
                    <BaseStarRating rating ={media}/>
                </div>
            </div>
        </div>
    )
}

export default PointReviewSection