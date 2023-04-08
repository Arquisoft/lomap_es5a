import "../../../public/css/components/points/details/PointReviewSection.css"
import PointReviewSummary from "./review/PointReviewSummary"
import ReviewStars from "./review/ReviewStars"
import { usePointDetailsStore } from "../../../store/point.store";

function PointReviewSection(){
    const {info} = usePointDetailsStore(); 
    const valoraciones = info.reviews?.map(r => r.rating);
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

                <p> 20 valoraciones</p>

                <div className="point-review-section-review-stars">
                    <ReviewStars media={media}/>
                </div>
            </div>
        </div>
    )
}

export default PointReviewSection