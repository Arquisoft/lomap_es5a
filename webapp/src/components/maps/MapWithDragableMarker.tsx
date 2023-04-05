import { LatLng, LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, useMap, useMapEvent, useMapEvents } from "react-leaflet";
import { InfoOutlined } from "../../helpers/IconContants";
import DraggableMarker from "./DragableMarker";

import "leaflet/dist/leaflet.css";
import "../../public/css/components/maps/MapWithDragableMark.scss";
import { usePointDetailsStore } from "../../store/point.store";
import BaseButton from "../buttons/BaseButton";

type Props = {
  position: LatLngExpression;
  width?: string;
  height?: string;
  styles?: Object;
};

type RecenterMapButtonProps = {
  coords: LatLng
};

function RecenterMapButton({ coords }: RecenterMapButtonProps) {
  const map = useMapEvents({
    click() {
      map.flyTo(coords, map.getZoom())
    },
    dragend() {
      map.flyTo(coords, map.getZoom())
    }
  });

  const handleRecenterMap = () => {
    map.flyTo(coords, map.getZoom());
    map.setMaxBounds(map.getBounds());
  };
  return null;
  // return (
  //   <div className="recenter-map-button">
  //     <BaseButton text="centrar" type="button-primary" onClick={handleRecenterMap} styles={{
  //       position: "absolute",
  //       top: "10px",
  //       right: "10px",
  //       zIndex: 1000,
  //     }} />
  //   </div>
  // );
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
