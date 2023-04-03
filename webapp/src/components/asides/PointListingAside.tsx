import { Link } from "react-router-dom";
import PointSummaryCard from "../cards/PointSummaryCard";

import "../../public/css/components/asides/PointListingAside.scss";
import { PointListingAsideProps } from "../../shared/shareddtypes";
import { formatDateWithGenericFormat } from "../../utils/dateUtils";

function PointListingAside({ points }: PointListingAsideProps) {
  return (
    <div className="point-listing-aside-container">
      <div className="point-listing-aside__head">
        <p>Puntos de interés recientes</p>
        <Link to="/points" className="point-listing_link">
          Ver todos
        </Link>
      </div>

      <div className="point-listing-aside__body">
        {points && points.length > 0 ? (
          points.map((point) => {
            return (
              <PointSummaryCard
                key={point._id}
                imgUrl={point.image?.url || ""}
                pointName={point.name}
                pointUser={point.owner?.name || ""}
                pointInfo={point}
                pointCreatedAt={
                  point.createdAt &&
                  formatDateWithGenericFormat(point.createdAt, "HH:mm")
                }
                
              />
            );
          })
        ) : (
          <p>No hay puntos de interés</p>
        )}
      </div>
    </div>
  );
}

export default PointListingAside;
