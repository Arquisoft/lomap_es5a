import { create } from "zustand";

interface MarkerStore {
  position: {
    lat: number;
    lng: number;
  };
  setPosition: (position: any) => void;
}

const useMarkerStore = create<MarkerStore>((set) => ({
  position: {
    lat: 43.362503991605806,
    lng: -5.8507845362433235,
  },
  setPosition: (position: any) => set({ position }),
}));

export { useMarkerStore };
