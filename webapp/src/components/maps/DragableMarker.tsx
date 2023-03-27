import { Icon } from "leaflet";
import { useMemo, useRef } from "react";
import { Marker } from "react-leaflet";
import useMarker from "../../hooks/useMarker";
import customMarkerIcon from "../../public/images/icons/marker_base.svg";
import { useMarkerStore } from "../../store/map.store";

function DraggableMarker() {
  const { handleCurrentPosition } = useMarker();
  const currentPosition = useMarkerStore.getState().position;

  const markerRef = useRef<any>(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          handleCurrentPosition(marker.getLatLng());
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
