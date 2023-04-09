import { LatLng, LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { InfoOutlined } from "../../helpers/IconContants";
import DraggableMarker from "./DragableMarker";

import "leaflet/dist/leaflet.css";
import "../../public/css/components/maps/MapWithDragableMark.scss";
import { usePointDetailsStore } from "../../store/point.store";

type Props = {
  position: LatLngExpression;
  width?: string;
  height?: string;
  styles?: React.CSSProperties;
};

type RecenterMapButtonProps = {
  coords: LatLng
};

function RecenterMapButton({ coords }: RecenterMapButtonProps) {
  const map = useMapEvents({
    click() {
      map.flyTo(coords, map.getZoom())
    },
  });
  return null;
}

function MapWithDragableMarker({ position, styles }: Props) {
  const { info } = usePointDetailsStore();

  return (
    <div className="map-with-dragable-marker-container">
      <div className="map-with-dragable-marker-container__info-msg">
        <InfoOutlined />
        <p>Mueve el marcador para obtener las coordenadas</p>
      </div>
      <MapContainer
        center={info.location.coords || position}
        zoom={13}
        zoomControl={true}
        scrollWheelZoom={false}
        minZoom={3}
        maxZoom={18}
        dragging={true}
        doubleClickZoom={true}
        style={styles}
      >
        <RecenterMapButton coords={info.location.coords as LatLng}/>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?" />
        <DraggableMarker />
      </MapContainer>
    </div>
  );
}

export default MapWithDragableMarker;
