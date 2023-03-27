import { useMarkerStore } from "../store/map.store";

function useMarker() {
  const handleCurrentPosition = (position: any) => {
    useMarkerStore.getState().setPosition(position);
  };

  return {
    handleCurrentPosition,
  };
}

export default useMarker;
