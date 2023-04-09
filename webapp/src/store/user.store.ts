import { create } from "zustand";

interface UserStore {
    webId: string;
    name: string;
    imageUrl: string;
    friends?: string[];
    setWebId: (webId: string) => void;
    setName: (name: string) => void;
    setImageUrl: (imageUrl: string) => void;
    setFriends: (friends: string[]) => void;
}


const useUserStore = create<UserStore>((set) => ({
    webId: "",
    name: "",
    imageUrl: "",
    friends: [],
    setWebId: (webId: string) => set({ webId }),
    setName: (name: string) => set({ name }),
    setImageUrl: (imageUrl: string) => set({ imageUrl }),
    setFriends: (friends: string[]) => set({ friends })
}));

export {
    useUserStore
}