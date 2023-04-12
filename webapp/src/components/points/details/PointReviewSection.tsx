import "../../../public/css/components/points/details/PointReviewSection.css";
import { Point } from "../../../shared/shareddtypes";
import BaseStarRating from "../../stars/BaseStarRating";
import PointReviewSummary from "./review/PointReviewSummary";

type Props = {
    pointToShow:Point
  }

function PointReviewSection(point:Props){

    const valoraciones = point.pointToShow.reviews?.map(r => r.rating);
    let media = 0;
    if(valoraciones){
        const sumValor = valoraciones.reduce((a,b)=> a + b,0) 
        media = sumValor / valoraciones.length
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
                    <BaseStarRating rating ={media.toPrecision(2)}/>
                </div>
            </div>
        </div>
    )
}

export default PointReviewSection