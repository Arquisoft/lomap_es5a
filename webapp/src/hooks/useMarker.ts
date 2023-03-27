import { LatLng, LatLngExpression } from "leaflet";
import { useState } from "react";

function useMarker() {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 0,
    lng: 0,
  } as LatLng);

  const handleCurrentPosition = (position: any) => {
    if ((position.lat && position.lng) || (position[0] && position[1])) {
      console.log(position);
      setCurrentPosition({
        lat: position.lat || position[0],
        lng: position.lng || position[1],
      } as LatLng);
    }
  };

  return {
    currentPosition,
    handleCurrentPosition,
  };
}

export default useMarker;
