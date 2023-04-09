import { create } from "zustand";

interface NavigationStore {
    currentPath: string;
    saveCurrentPath: (currentPath: string) => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
    currentPath: "",
    saveCurrentPath: (currentPath: string) => set({ currentPath })
}));

export {
    useNavigationStore
}
