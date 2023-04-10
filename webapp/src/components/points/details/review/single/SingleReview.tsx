import "../../../../../public/css/components/points/details/review/single/SingleReview.css"
import { Reviewer } from "../../../../../shared/shareddtypes"
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


    console.log(review)
    return(
        <div className="single-review-container">
            <div className="single-review-top">
    
                <div className="single-review-user">
                    <img src= {review.reviewer.imageUrl} />
                    <div className="single-review-user-data">
                        <h3>{review.reviewer.webId}</h3>
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