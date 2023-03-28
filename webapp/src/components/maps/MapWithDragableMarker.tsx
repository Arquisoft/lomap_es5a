import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import DraggableMarker from "./DragableMarker";

import "leaflet/dist/leaflet.css";
import "../../public/css/components/maps/MapWithDragableMark.scss";

type Props = {
  position: LatLngExpression;
  width?: string;
  height?: string;
  styles?: Object;
};

function MapWithDragableMarker({ position, styles }: Props) {
  return (
    <div className="map-with-dragable-marker-container">
      <div className="map-with-dragable-marker-container__info-msg">
        <InfoOutlined />
        <p>Mueve el marcador para obtener las coordenadas</p>
      </div>
      <MapContainer
        center={position}
        zoom={13}
        zoomControl={true}
        scrollWheelZoom={false}
        minZoom={3}
        maxZoom={18}
        dragging={true}
        doubleClickZoom={true}
        style={styles}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?" />
        <DraggableMarker />
      </MapContainer>
    </div>
  );
}

export default MapWithDragableMarker;
