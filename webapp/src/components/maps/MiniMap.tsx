import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

type Props = {
  position?: [number, number];
  width?: string;
  height?: string;
  styles?: React.CSSProperties;
};

function MiniMap({ position, styles }: Props) {
  return (
      <MapContainer
        data-testid = "minimap"
        center={position}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
        minZoom={3}
        maxZoom={18}
        dragging={false}
        doubleClickZoom={false}
        style={styles}
      ><TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?"
    /></MapContainer>
  );
}

export default MiniMap;
