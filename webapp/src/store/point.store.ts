import { create } from "zustand";
import { Category, Point } from "../shared/shareddtypes";

interface PointDetailsStore {
  info: Point;
  image?: File;
  setCurrentPoint: (point: Point) => void;
  setCurrentPointProperty: (property: string, value: any) => void;
  setPointAddress: (address: string) => void;
  setPosition: (position: {lat: number, lng: number}) => void;
  setPointImageFile: (image: File) => void;
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
  } as Point,
  image: undefined,
  // Update some property of the current point
  setCurrentPointProperty: (property: string, value: any) =>
    set((state: any) => ({ info: { ...state.info, [property]: value } })),

  setCurrentPoint: (point: Point) => set({ info: point }),

  setPointAddress: (address: string) =>
    set((state: any) => ({ info: { ...state.info, location: { ...state.info.location, address } } })),
  
  // Change the coords of the current point
  setPosition: (position: any) => 
  set((state: any) => ({ info: { ...state.info, location: {coords: position} } })),

  // Imagen del punto de interés 
  setPointImageFile: (image: File) => set({ image }),
}));

export { usePointDetailsStore, useAllPointsStore };
