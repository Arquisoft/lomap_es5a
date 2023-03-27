import { Icon, LatLng, LatLngExpression } from "leaflet";
import { useEffect, useMemo, useRef } from "react";
import { Marker } from "react-leaflet";
import useMarker from "../../hooks/useMarker";
import customMarkerIcon from "../../public/images/icons/marker_base.svg";

const center = {
  lat: 51.505,
  lng: -0.09,
};

type Props = {
  position: LatLngExpression;
};

function DraggableMarker({ position }: Props) {
  const { handleCurrentPosition, currentPosition } = useMarker();
  const markerRef = useRef<any>(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;

        if (marker != null) {
          handleCurrentPosition(marker.getLatLng() as LatLng);
        }
      },
    }),
    [position]
  );

  useEffect(() => {
    handleCurrentPosition(position as LatLng);
  }, []);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={currentPosition || position}
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
