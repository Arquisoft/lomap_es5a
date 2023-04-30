import React from "react";
import { useNavigate } from "react-router-dom";
import "../../public/css/components/points/PointSummaryWithMap.scss";
import { Point } from "../../shared/shareddtypes";
import { usePointDetailsStore } from "../../store/point.store";
import { canonizeUrl } from "../../utils/stringUtils";
import BaseButton from "../buttons/BaseButton";
import IconButton from "../buttons/IconButton";
import MiniMap from "../maps/MiniMap";

/**
 * name: Nombre del punto de interes.
 * address: Dirección postal del punto.
 * lat: Latitud.
 * lng: Longitud.
 */
type Props = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  hasMap?: boolean;
  pointInfo?: Point;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

function PointSummaryWithMap({
  name,
  address,
  lat,
  lng,
  hasMap = false,
  pointInfo,
  onClick
}: Props) {
  const navigate = useNavigate();
  const {setPointToShow} = usePointDetailsStore();
  const handleRedirectToPointDetail = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if(pointInfo){
      setPointToShow(pointInfo);
      navigate(canonizeUrl("/points", name));
    }
    
  };


  return (
    <div className="point-summary-with-map-container" role="point-summary">
      {hasMap && (
        <div className="point-summary-with-map__map" role="point-summary-with-map">
          <MiniMap
            position={[lat, lng]}
            styles={{
              width: "100%",
              height: "163px",
            }}
          />
        </div>
      )}
      <div className="point-summary-with-map__body" role="point-summary-body">
        <div className="point-summary-with-map-body__details" role="point-summary-details">
          <p>{name}</p>
          <span>{address}</span>
        </div>
      </div>
      <div className="point-summary-with-map__buttons" role="point-summary-buttons">
        <BaseButton
          data-testid="button"
          type="button-blue-rounded"
          text="Ver punto"
          onClick={(e) => handleRedirectToPointDetail(e)}
        />
        <IconButton type="button-red-form" text="Eliminar" muaIconName="delete" handleClick={onClick} />
      </div>
    </div>
  );
}

export default PointSummaryWithMap;
