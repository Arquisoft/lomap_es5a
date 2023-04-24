import "../../../../../public/css/components/points/details/review/single/SingleReview.css"
import { Reviewer } from "../../../../../shared/shareddtypes"
import NoImageSkeleton from "../../../../skeletons/NoImageSkeleton"
import BaseStarRating from "../../../../stars/BaseStarRating"
import {differenceInHours } from 'date-fns'
import IconButton from "../../../../buttons/IconButton"
import { deleteReviewByPoint } from "../../../../../api/point.api"
import { useSession } from "@inrupt/solid-ui-react"
import { useNavigate } from "react-router-dom"
import { HOME_PATH } from "../../../../../routes"

type Props = {
    comment: string;
    rating: number;
    reviewer: Reviewer;
    createdAt: Date;
    pointId: string;
    reviewId:string;
    
}

function SingleReview(review:Props){

    const {session} = useSession();
    const navigate = useNavigate();

    const  handleDeleteReview = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        //Comprobamos que el que va a borrar la review, sea el creador
        const pointId = review.pointId;
        const webIdCreator = review.reviewer.webId;
        const reviewId = review.reviewId;
        
        console.log(webIdCreator);
        console.log(session.info.webId);
        if(webIdCreator == session.info.webId){
            (console.log("Llegue aqui"));
            //La eliminamos
            await deleteReviewByPoint(pointId,reviewId,webIdCreator);
            //Reddireccion a home
            navigate(HOME_PATH);
        }
    }

    const hoursDiff = differenceInHours(review.createdAt,new Date()) * -1;

    const nombre =review.reviewer.name ? review.reviewer.name : review.reviewer.webId.split("/")[2]

    return(
        <div className="single-review-container" role="container">
            <div className="single-review-top" role="data">
    
                <div className="single-review-user" role="user-data">
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
            <div className="single-review-delete" role="delete">
                <IconButton type="button-red-form" text="Eliminar" muaIconName="delete" handleClick={handleDeleteReview} />
            </div>
        </div>
    )
}

export default SingleReview