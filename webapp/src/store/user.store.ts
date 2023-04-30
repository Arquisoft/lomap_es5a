import { create } from "zustand";
import { Friend } from "../shared/shareddtypes";

interface UserStore {
    webId: string;
    name: string;
    imageUrl: string;
    friends?: Friend[];
    setWebId: (webId: string) => void;
    setName: (name: string) => void;
    setImageUrl: (imageUrl: string) => void;
    setFriends: (friends: Friend[]) => void;
}

const useUserStore = create<UserStore>((set) => ({
    webId: "",
    name: "",
    imageUrl: "",
    friends: [],
    setWebId: (webId: string) => set({ webId }),
    setName: (name: string) => set({ name }),
    setImageUrl: (imageUrl: string) => set({ imageUrl }),
    setFriends: (friends: Friend[]) => set({ friends:friends })
}));

export {
    useUserStore
}