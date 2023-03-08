import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import "../../public/css/components/maps/BaseMap.scss";

import customMarkerIcon from "../../public/images/icons/marker_base.svg";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import BaseMapPopup from "./popups/BaseMapPopup";

type Props = {
  position?: [number, number];
  width?: string;
  height?: string;
  styles?: Object;
};

function BaseMap({ position, styles }: Props) {
  return (
    <div className="base-map-container">
      <MapContainer
        id="map"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={
          styles
        }
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?"
        />
        <Marker
          position={[43.36297198377049, -5.851084856954243]}
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
    </div>
  );
}

export default BaseMap;
