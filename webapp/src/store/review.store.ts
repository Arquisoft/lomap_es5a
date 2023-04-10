import { create } from "zustand";
import { Review } from "../shared/shareddtypes";

const reviewInitilization: Review = {
  _id: "",
  title: "",
  comment: "",
  rating: 0,
  reviewer: {
    webId: "",
    imageUrl: "",
  },
  createdAt: new Date(),
} as Review;

interface PointReviewStore {
  review: Review;
  isSendingReview: boolean;
  isReviewPublished: boolean;
  showAddReviewPopup: boolean;
  setReview: (review: Review) => void;
  setReviewProperty: (property: string, value: any) => void;
  getReview: () => Review;
  resetReview: () => void;
  setShowAddReviewPopup: (show: boolean) => void;
  setIsSendingReview: (isSending: boolean) => void;
  setIsReviewPublished: (isPublished: boolean) => void;
}

/**
 * Gestión de la valoración de un punto de interés.
 */
const usePointReviewStore = create<PointReviewStore>((set, get) => ({
  review: reviewInitilization,
  showAddReviewPopup: false,
  isSendingReview: false,
  isReviewPublished: false,
  setReview: (review: Review) => set({ review }),
  setReviewProperty: (property: string, value: any) =>
    set((state: any) => ({
      review: {
        ...state.review,
        [property]: value,
      },
    })),
  getReview: (): Review => get().review,
  resetReview: (): void => set({ review: reviewInitilization }),
  setShowAddReviewPopup: (show: boolean) => set({ showAddReviewPopup: show }),
  setIsSendingReview: (isSending: boolean) =>
    set({ isSendingReview: isSending }),

  setIsReviewPublished: (isPublished: boolean) =>
    set({ isReviewPublished: isPublished }),
}));

export { usePointReviewStore };
