import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

type Props = {
  position?: [number, number];
  width?: string;
  height?: string;
  styles?: Object;
};

function MiniMap({ position, styles }: Props) {
  return (
      <MapContainer
        center={position}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
        minZoom={3}
        maxZoom={18}
        style={styles}
      ><TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?"
    /></MapContainer>
  );
}

export default MiniMap;
