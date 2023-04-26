import { Icon } from "leaflet";
import { useMemo, useRef } from "react";
import { Marker } from "react-leaflet";
import customMarkerIcon from "../../public/images/icons/marker_base.svg";
import { usePointDetailsStore } from "../../store/point.store";

function DraggableMarker() {
  const { setPosition, info} = usePointDetailsStore();

  const markerRef = useRef<any>(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    [info.location.coords]
  );

  return (
    <Marker
      data-testid="marker"
      draggable={true}
      eventHandlers={eventHandlers}
      position={info.location.coords}
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
