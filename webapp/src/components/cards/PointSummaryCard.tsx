import "../../public/css/components/cards/point/PointSummaryCard.scss";

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
      <img src={imgUrl} alt="" />
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
