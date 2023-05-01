import { useSession } from "@inrupt/solid-ui-react";
import { useNavigate } from "react-router-dom";
import { deleteReviewByPoint } from "../../../../../api/point.api";
import "../../../../../public/css/components/points/details/review/single/SingleReview.css";
import { HOME_PATH } from "../../../../../routes";
import { Reviewer } from "../../../../../shared/shareddtypes";
import { formatDateAsRelative } from "../../../../../utils/dateUtils";
import IconButton from "../../../../buttons/IconButton";
import NoImageSkeleton from "../../../../skeletons/NoImageSkeleton";
import BaseStarRating from "../../../../stars/BaseStarRating";

type Props = {
    comment: string;
    rating: number;
    reviewer: Reviewer;
    createdAt: Date;
    pointId: string;
    reviewId: string;
    ownerId: string;
};

function SingleReview(review: Props) {

    const { session } = useSession();
    const navigate = useNavigate();

    const handleDeleteReview = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        //Comprobamos que el que va a borrar la review, sea el creador

        // const pointId = review.pointId;
        const webIdCreator = review.reviewer.webId;
        const reviewId = review.reviewId;
        const webIdOwnerPoint = review.ownerId;

        if (webIdCreator == session.info.webId) {
            //La eliminamos
            await deleteReviewByPoint(reviewId, webIdOwnerPoint);
            //Reddireccion a home
            navigate(HOME_PATH);
        }
    };

    const relativeDate = formatDateAsRelative(review.createdAt);

    const nombre = review.reviewer.name
        ? review.reviewer.name
        : review.reviewer.webId.split("/")[2] || "Anónimo";

    return (
        <div className="single-review-container" role="container">
            <div className="single-review-top" role="data">
                <div className="single-review-user" role="user-data">
                    {review.reviewer.imageUrl ? (
                        <img src={review.reviewer.imageUrl} />
                    ) : (
                        <NoImageSkeleton isRound={true} />
                    )}
                    <div className="single-review-user-data">
                        <h3>{nombre}</h3>
                        {/* <p>Hace {hoursDiff} horas</p> */}
                        <p>{relativeDate}</p>
                    </div>
                </div>

                <div className="single-review-rating">
                    <BaseStarRating rating={review.rating} />
                </div>
            </div>
            <div className="single-review-comment">{review.comment}</div>
            <div className="single-review-delete" role="delete">
                <IconButton
                    type="button-red-form"
                    text="Eliminar"
                    muaIconName="delete"
                    handleClick={handleDeleteReview}
                />
            </div>
        </div>
    );
}

export default SingleReview;