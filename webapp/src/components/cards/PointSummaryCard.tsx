import React from "react";
import { useNavigate } from "react-router";
import "../../public/css/components/cards/point/PointSummaryCard.scss";
import { Point } from "../../shared/shareddtypes";
import { usePointDetailsStore } from "../../store/point.store";
import { canonizeUrl } from "../../utils/stringUtils";
import NoImageSkeleton from "../skeletons/NoImageSkeleton";

type Props = {
  imgUrl?: string;
  pointName: string;
  pointUser: string;
  pointCreatedAt: string;
  pointInfo: Point
};

function PointSummaryCard({
  imgUrl,
  pointName,
  pointUser,
  pointCreatedAt,
  pointInfo
}: Props) {
  const {setPointToShow} = usePointDetailsStore();
  const navigate = useNavigate();

  const handleRedirectToPointDetailsPage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if(pointInfo && pointName.length > 0){
      setPointToShow(pointInfo);
      navigate(canonizeUrl("/points", pointName));
    }
  }

  return (
    <div className="point-summary-card-container" onClick={handleRedirectToPointDetailsPage}>
        {imgUrl ? (
          <img src={imgUrl} alt="" />
        ) : (
          <div className="point-summary-card-container__no-image">
            <NoImageSkeleton />
          </div>
        )}
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
