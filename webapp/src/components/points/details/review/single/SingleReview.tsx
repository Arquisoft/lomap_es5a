import "../../../../../public/css/components/points/details/review/single/SingleReview.css"
import { Reviewer } from "../../../../../shared/shareddtypes"

type Props = {
    comment: string;
    rating: number;
    reviewer: Reviewer;
    createdAt: Date;
}

function SingleReview(review:Props){
    console.log(review)
    return(
        <div>

            

        </div>
    )
}

export default SingleReview