import { icon, LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import customMarkerIcon from "../../public/images/icons/marker_base.svg";
import BaseMapPopup from "./popups/BaseMapPopup";

import "leaflet/dist/leaflet.css";
import "../../public/css/components/maps/BaseMap.scss";
import { Point, PointOwner } from "../../shared/shareddtypes";
import { useAllPointsStore } from "../../store/point.store";
import BaseButton from "../buttons/BaseButton";

type Props = {
  position?: LatLngExpression;
  width?: string;
  height?: string;
  styles?: React.CSSProperties;
  points: any[];
};

function BaseMap({ position, styles, points }: Props) {
  const { setIsFiltering, isFiltering, filteredPoints, getAllPoints} = useAllPointsStore();
  // Ubicación por defecto: Bruselas
  const defaultMapCenter: LatLngExpression = [
    50.85119149087381, 4.3544687591272835,
  ];

  const resetFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFiltering(false);
  };

  return (
    <div className="base-map-container">
      {isFiltering && getAllPoints().length > filteredPoints.length && (
        <BaseButton
          text="Mostrar todo"
          type="button-black button-absolute"
          title="Mostrar todos los puntos"
          onClick={(e) => resetFilters(e)}
        />
      )}

      {/* <Suspense fallback={<BaseMapSkeleton />}> */}
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
        <>
          {points &&
            points.map((point: Point) => {
              return (
                <Marker
                  key={point._id}
                  position={[
                    Number(point.location.coords.lat),
                    Number(point.location.coords.lng),
                  ]}
                  icon={icon({
                    iconUrl: customMarkerIcon,
                    iconSize: [32, 41],
                    iconAnchor: [32, 41],
                  })}
                >
                  <Popup className="map-current-point-popup">
                    <BaseMapPopup
                      name={point.name}
                      image={point?.image?.url as string}
                      location={point.location}
                      category={point.category}
                      owner={point.owner as PointOwner}
                      point={point}
                    />
                  </Popup>
                </Marker>
              );
            })}
        </>
      </MapContainer>
      {/* </Suspense> */}
      <noscript>Para ver el mapa necesitas habilitar javascript</noscript>
    </div>
  );
}

export default BaseMap;
