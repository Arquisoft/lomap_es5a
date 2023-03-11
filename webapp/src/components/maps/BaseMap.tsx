import React, { Suspense } from "react";
import { LatLngExpression, Icon } from "leaflet";

import BaseMapSkeleton from "src/components/skeletons/BaseMapSkeleton";
import customMarkerIcon from "../../public/images/icons/marker_base.svg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import BaseMapPopup from "./popups/BaseMapPopup";

import "leaflet/dist/leaflet.css";
import "../../public/css/components/maps/BaseMap.scss";


type Props = {
  position?: LatLngExpression;
  width?: string;
  height?: string;
  styles?: Object;
};

function BaseMap({ position, styles }: Props) {
  // Ubicación por defecto: Bruselas
  const defaultMapCenter: LatLngExpression = [
    50.85119149087381, 4.3544687591272835,
  ];

  return (
    <div className="base-map-container">
      <Suspense fallback={<BaseMapSkeleton />}>
        <MapContainer
          id="map"
          center={position || defaultMapCenter}
          zoom={13}
          scrollWheelZoom={false}
          style={styles}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?"
          />
          <Marker
            position={defaultMapCenter}
            icon={
              new Icon({
                iconUrl: customMarkerIcon,
                iconSize: [32, 41],
                iconAnchor: [32, 41],
              })
            }
          >
            <Popup className="map-current-point-popup">
              <BaseMapPopup />
            </Popup>
          </Marker>

          <Marker
            position={[42.689342488732336, -5.014509897161181]}
            icon={
              new Icon({
                iconUrl: customMarkerIcon,
                iconSize: [32, 41],
                iconAnchor: [0, 0],
              })
            }
          >
            <Popup className="map-current-point-popup">
              <BaseMapPopup />
            </Popup>
          </Marker>

          <Marker
            position={[42.883267366785304, -2.676109097850461]}
            icon={
              new Icon({
                iconUrl: customMarkerIcon,
                iconSize: [32, 41],
                iconAnchor: [0, 0],
              })
            }
          >
            <Popup className="map-current-point-popup">
              <BaseMapPopup />
            </Popup>
          </Marker>
        </MapContainer>
      </Suspense>
      <noscript>Para ver el mapa necesitas habilitar javascript</noscript>
    </div>
  );
}

export default BaseMap;
