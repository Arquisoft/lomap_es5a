import "../../../../public/css/components/points/details/review/ReviewStars.css"
import { usePointDetailsStore } from "../../../../store/point.store";

function ReviewStars(){
    const {info} = usePointDetailsStore(); 
    const valoraciones = info.reviews?.map(r => r.rating);
    let media = 0;
    if(valoraciones){
        const sumValor = valoraciones.reduce((a,b)=> a + b,0) 
        media = sumValor/ valoraciones.length
    }
    return(
        <div>
            5 estrellas
        </div>
    )
}

export default ReviewStars