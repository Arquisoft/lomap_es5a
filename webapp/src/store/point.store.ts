import { create } from "zustand";
import {
  Category,
  Friend,
  Point,
  SingleCategory,
} from "../shared/shareddtypes";

interface PointDetailsStore {
  info: Point;
  pointToShow: Point; // Point to show in the details page
  imageToUpload?: File;
  isUploading: boolean; // Flag que indica si el proceso de subida del punto está en curso
  isFinished: boolean; // Flag que indica si el proceso de subida del punto ha finalizado
  setCurrentPoint: (point: Point) => void;
  setCurrentPointProperty: (property: string, value: unknown) => void;
  setPointAddress: (address: string) => void;
  setPosition: (position: { lat: number; lng: number }) => void;
  setPointImageFile: (image: File) => void;
  setIsUploading: (isUploading: boolean) => void;
  setIsFinished: (isFinished: boolean) => void;
  setPointToShow: (point: Point) => void;
  resetPointInfo: () => void;
  getPointDetails: () => Point;
  resetPointImage: () => void;
}

const pointInitilization: Point = {
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
  isOwner: false,
  category: Category.NONE,
  createdAt: new Date(),
  updatedAt: new Date(),
  friends: [],
} as Point;

interface AllPointsStore {
  points: Point[];
  userPoints: Point[];
  filteredPoints: Point[];
  filteredPointsPreview: Point[];
  filters: (SingleCategory | Friend)[]; // categorias y/o amigos
  isFiltering: boolean;
  showFilterPopup: boolean;
  setAllPoints: (points: Point[]) => void;
  getAllPoints: () => Point[];
  setUserPoints: (points: Point[]) => void;
  getUserPoints: () => Point[];
  setFilteredPoints: (pointsToFilter: Point[]) => void;
  setIsFiltering: (isFiltering: boolean) => void;
  addFilter: (filter: SingleCategory | Friend) => void;
  removeFilter: (filter: SingleCategory | Friend) => void;
  makeFilteredPointsPreview: () => void;
  filterPointsBySelectedFilters: () => void;
  resetFilters: () => void;
  setShowFilterPopup: (showFilterPopup: boolean) => void;
}

interface AllSavedPointsStore {
  savedPoints: Point[];
  setSavedPoints: (points: Point[]) => void;
}

const useAllPointsStore = create<AllPointsStore>((set, get) => ({
  points: [],
  userPoints: [],
  filteredPoints: [],
  filteredPointsPreview: [],
  filters: [],
  showFilterPopup: false,
  isFiltering: false,
  setAllPoints: (points: Point[]) => set({ points }),
  getAllPoints: () => get().points,
  setUserPoints: (points: Point[]) => set({ userPoints: points }),
  getUserPoints: () => get().userPoints,
  setFilteredPoints: (pointsToFilter: Point[]) =>
    set({ filteredPoints: pointsToFilter }),
  setIsFiltering: (isFiltering: boolean) => set({ isFiltering }),
  addFilter: (filter: SingleCategory | Friend) =>
    set((state: any) => ({
      filters: [...state.filters, filter],
    })),
  removeFilter: (filterToRemove: SingleCategory | Friend) =>
    set((state: any) => ({
      filters: state.filters.filter(
        (filter: SingleCategory) => filter !== filterToRemove
      ),
    })),
  makeFilteredPointsPreview: () => {
    set({ isFiltering: false });
    set((state: any) => ({
      filteredPointsPreview: state.points.filter((pointToFilter: Point) => {
        return state.filters.some((filter: SingleCategory | Friend) => {
          if ((filter as SingleCategory).code) {
            return pointToFilter.category === (filter as SingleCategory).code;
          } else if ((filter as Friend).webId) {
            return pointToFilter.owner.webId === (filter as Friend).webId;
          }
        });
      }),
    }));
  },
  filterPointsBySelectedFilters: () => {
    set({ isFiltering: true });
    set((state: any) => ({
      filteredPoints: state.points.filter((pointToFilter: Point) => {
        return state.filters.some((filter: SingleCategory | Friend) => {
          if ((filter as SingleCategory).code) {
            return pointToFilter.category === (filter as SingleCategory).code;
          } else if ((filter as Friend).webId) {
            return pointToFilter.owner.webId === (filter as Friend).webId;
          }
        });
      }),
    }));
  },
  resetFilters: () => {
    set({ filters: [] });
    set({ filteredPointsPreview: [] });
    set({ isFiltering: false });
  },
  setShowFilterPopup: (showFilterPopup: boolean) => set({ showFilterPopup }),
}));

/**
 * Store para el detalle de un punto de interés seleccionado.
 */
const usePointDetailsStore = create<PointDetailsStore>((set, get) => ({
  info: pointInitilization,
  pointToShow: pointInitilization,
  imageToUpload: undefined as File | undefined,
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
  setPointImageFile: (imageToUpload: File) => set({ imageToUpload }),

  setIsUploading: (isUploading: boolean) => set({ isUploading }),

  setIsFinished: (isFinished: boolean) => set({ isFinished }),

  setPointToShow: (point: Point) => set({ pointToShow: point }),

  resetPointInfo: () => set({ info: pointInitilization }),

  resetPointImage: () => set({ imageToUpload: undefined }),

  getPointDetails: () => get().pointToShow,
}));

/**
 * Obtener todos los puntos guardados por el usuario
 */
const useAllSavedPointsStore = create<AllSavedPointsStore>((set) => ({
  savedPoints: [],
  setSavedPoints: (points: Point[]) => set({ savedPoints: points }),
}));

export { usePointDetailsStore, useAllPointsStore, useAllSavedPointsStore };
