import React from "react";
import PointSummaryCard from "../cards/PointSummaryCard";
import "../../public/css/components/asides/PointListingAside.scss";
import { PointListingAsideProps } from "../../shared/shareddtypes";
import { formatDateWithGenericFormat } from "../../utils/dateUtils";

function PointListingAside({ points }: PointListingAsideProps) {
  return (
    <div className="point-listing-aside-container">
      <p>Puntos de interés recientes</p>
      <div className="point-listing-aside-container-wrapper">
        <div className="point-listing-aside__head"></div>

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
    </div>
  );
}

export default PointListingAside;
