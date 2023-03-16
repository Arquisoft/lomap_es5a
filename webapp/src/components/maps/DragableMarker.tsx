import { Icon, LatLngExpression } from "leaflet";
import { useMemo, useRef, useState } from "react";
import { Marker } from "react-leaflet";
import customMarkerIcon from "../../public/images/icons/marker_base.svg";

const center = {
  lat: 51.505,
  lng: -0.09,
};

type Props = {
  position: LatLngExpression
}

function DraggableMarker({position}: Props) {
  const [currentPosition, setCurrentPosition] = useState(position);
  const markerRef = useRef<any>(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;

        if (marker != null) {
          setCurrentPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={currentPosition}
      ref={markerRef}
      icon={
        new Icon({
          iconUrl: customMarkerIcon,
          iconSize: [32, 41],
          iconAnchor: [32, 41],
        })
      }
    ></Marker>
  );
}

export default DraggableMarker;
