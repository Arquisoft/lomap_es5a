import { create } from "zustand";
import { Category, Point } from "../shared/shareddtypes";

interface PointDetailsStore {
  info: Point;
  pointToShow: Point; // Point to show in the details page
  image?: File;
  isUploading: boolean; // Flag to indicate if the process of uploading the point is in progress
  isFinished: boolean; // Flag to indicate if the process of uploading the point is finished
  setCurrentPoint: (point: Point) => void;
  setCurrentPointProperty: (property: string, value: any) => void;
  setPointAddress: (address: string) => void;
  setPosition: (position: { lat: number; lng: number }) => void;
  setPointImageFile: (image: File) => void;
  setIsUploading: (isUploading: boolean) => void;
  setIsFinished: (isFinished: boolean) => void;
  setPointToShow: (point: Point) => void;
}

let pointInitilization: Point = {
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
} as Point;

interface AllPointsStore {
  points: Point[];
  filteredPoints: Point[];
  isFiltering: boolean;
  setAllPoints: (points: Point[]) => void;
  setFilteredPoints: (pointsToFilter: Point[]) => void;
  setIsFiltering: (isFiltering: boolean) => void;
}

const useAllPointsStore = create<AllPointsStore>((set) => ({
  points: [],
  filteredPoints: [],
  isFiltering: false,
  setAllPoints: (points: Point[]) => set({ points }),
  setFilteredPoints: (pointsToFilter: Point[]) =>
    set({ filteredPoints: pointsToFilter }),
  setIsFiltering: (isFiltering: boolean) => set({ isFiltering }),
}));

/**
 * Store para el detalle de un punto de interés seleccionado.
 */
const usePointDetailsStore = create<PointDetailsStore>((set) => ({
  info: pointInitilization,
  pointToShow: pointInitilization,
  image: undefined,
  isUploading: false,
  isFinished: false,
  // Update some property of the current point
  setCurrentPointProperty: (property: string, value: any) =>
    set((state: any) => ({ info: { ...state.info, [property]: value } })),

  setCurrentPoint: (point: Point) => set({ info: point }),

  setPointAddress: (address: string) =>
    set((state: any) => ({
      info: { ...state.info, location: { ...state.info.location, address } },
    })),

  // Change the coords of the current point
  setPosition: (position: any) =>
    set((state: any) => ({
      info: { ...state.info, location: { coords: position } },
    })),

  // Imagen del punto de interés
  setPointImageFile: (image: File) => set({ image }),

  setIsUploading: (isUploading: boolean) => set({ isUploading }),
  setIsFinished: (isFinished: boolean) => set({ isFinished }),

  setPointToShow: (point: Point) => set({ pointToShow: point }),
}));

export { usePointDetailsStore, useAllPointsStore };
