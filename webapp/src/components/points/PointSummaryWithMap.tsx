import ShareIcon from "@mui/icons-material/Share";
import "../../public/css/components/points/PointSummaryWithMap.scss";
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
};

function PointSummaryWithMap({
  name,
  address,
  lat,
  lng,
  hasMap = false,
}: Props) {
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
        <ShareIcon />
      </div>
      <div className="point-summary-with-map__buttons">
        <BaseButton type="button-blue-rounded" text="Ver punto"  onClick={() => ""}/>
        <IconButton type="button-disabled" text="Editar" muaIconName="adjust" />
      </div>
    </div>
  );
}

export default PointSummaryWithMap;
