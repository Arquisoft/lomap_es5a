import React from "react";
import { useNavigate } from "react-router-dom";
import "../../public/css/components/points/PointSummaryWithMap.scss";
import { Point } from "../../shared/shareddtypes";
import { usePointDetailsStore } from "../../store/point.store";
import { canonizeUrl } from "../../utils/stringUtils";
import BaseButton from "../buttons/BaseButton";
import IconButton from "../buttons/IconButton";
import MiniMap from "../maps/MiniMap";
import { HOME_PATH } from "../../routes";
import { unsavePoint } from "../../api/save.point.api";
import { useSession } from "@inrupt/solid-ui-react";

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
};

function PointSummaryWithMap({
  name,
  address,
  lat,
  lng,
  hasMap = false,
  pointInfo
}: Props) {
  const navigate = useNavigate();
  const {setPointToShow} = usePointDetailsStore();
  const {session} = useSession();
  const handleRedirectToPointDetail = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if(pointInfo){
      setPointToShow(pointInfo);
      navigate(canonizeUrl("/points", name));
    }
    
  };


  const handleDeleteSavedPoint = (
    e: React.MouseEvent<HTMLElement>
    ) => {
      e.preventDefault();
      let idPoint = '';
      let webId = '';
      if(pointInfo?._id){
        idPoint = pointInfo?._id;
      }
      if(session.info.webId){
        webId = session.info.webId;
      }

      unsavePoint(idPoint,webId);

      navigate(HOME_PATH)
    }


  return (
    <div className="point-summary-with-map-container">
      {hasMap && (
        <div className="point-summary-with-map__map">
          <MiniMap
            position={[lat, lng]}
            styles={{
              width: "100%",
              height: "163px",
            }}
          />
        </div>
      )}
      <div className="point-summary-with-map__body">
        <div className="point-summary-with-map-body__details">
          <p>{name}</p>
          <span>{address}</span>
        </div>
      </div>
      <div className="point-summary-with-map__buttons">
        <BaseButton
          type="button-blue-rounded"
          text="Ver punto"
          onClick={(e) => handleRedirectToPointDetail(e)}
        />
        <IconButton type="button-disabled" text="Eliminar" muaIconName="delete" handleClick={handleDeleteSavedPoint} />
      </div>
    </div>
  );
}

export default PointSummaryWithMap;
