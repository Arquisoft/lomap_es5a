import { create } from "zustand";
import { Category, Point } from "../shared/shareddtypes";

interface PointDetailsStore {
  info: Point;
  setCurrentPoint: (point: Point) => void;
}

interface AllPointsStore {
  points: Point[];
  setAllPoints: (points: Point[]) => void;
}

const useAllPointsStore = create<AllPointsStore>((set) => ({
  points: [],
  setAllPoints: (points: Point[]) => set({ points }),
}));

/**
 * Store para el detalle de un punto de interés seleccionado.
 */
const usePointDetailsStore = create<PointDetailsStore>((set) => ({
  info: {
    _id: "",
    name: "",
    description: "",
    location: {
      address: "",
      postalCode: 0,
      city: "",
      country: "",
      coords: {
        lat: 43.362503991605806,
        lng: -5.8507845362433235,
      },
    },
    owner: {
      webId: "",
      name: "",
      imageUrl: "",
    },
    reviews: [],
    image: {
      url: "",
      alt: "",
    },
    isPublic: false,
    category: Category.NONE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  setCurrentPoint: (point: Point) => set({ info: point }),
}));

export { usePointDetailsStore };
