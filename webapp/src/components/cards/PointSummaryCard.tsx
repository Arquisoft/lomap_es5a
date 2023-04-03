import "../../public/css/components/cards/point/PointSummaryCard.scss";
import NoImageSkeleton from "../skeletons/NoImageSkeleton";

type Props = {
  imgUrl?: string;
  pointName: string;
  pointUser: string;
  pointCreatedAt: string;
};

function PointSummaryCard({
  imgUrl,
  pointName,
  pointUser,
  pointCreatedAt,
}: Props) {
  return (
    <div className="point-summary-card-container">
      {
        imgUrl
        ? <img src={imgUrl} alt="" />
        : <div className="point-summary-card-container__no-image">
          <NoImageSkeleton />
        </div>
      }
      <div className="point-summary-card-container__details">
        <div className="point-summary-details__body">
          <p>{pointName}</p>
          <p>{pointUser}</p>
        </div>
        <span>{pointCreatedAt}</span>
      </div>
    </div>
  );
}

export default PointSummaryCard;
