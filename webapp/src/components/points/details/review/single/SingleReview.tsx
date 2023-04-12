import {useEffect} from "react"
import "../../../../../public/css/components/points/details/review/single/SingleReview.css"
import { Reviewer } from "../../../../../shared/shareddtypes"
import NoImageSkeleton from "../../../../skeletons/NoImageSkeleton"
import BaseStarRating from "../../../../stars/BaseStarRating"
import {differenceInHours } from 'date-fns'


type Props = {
    comment: string;
    rating: number;
    reviewer: Reviewer;
    createdAt: Date;
}

function SingleReview(review:Props){

    const hoursDiff = differenceInHours(review.createdAt,new Date()) * -1;

    const nombre =review.reviewer.name ? review.reviewer.name : review.reviewer.webId.split("/")[2]


    useEffect(() => {
        console.log(review.reviewer);
    }, []);

    return(
        <div className="single-review-container">
            <div className="single-review-top">
    
                <div className="single-review-user">
                    {
                        review.reviewer.imageUrl ? 
                        <img src= {review.reviewer.imageUrl} />
                        : <NoImageSkeleton isRound={true}/>
                    }
                    <div className="single-review-user-data">
                        <h3>{nombre}</h3>
                        <p>Hace {hoursDiff} horas</p>
                    </div>
                </div>

                <div className="single-review-rating">
                    <BaseStarRating rating ={review.rating}/>
                </div>

            </div>
            <div className="single-review-comment">
                {review.comment}
            </div>
        </div>
    )
}

export default SingleReview