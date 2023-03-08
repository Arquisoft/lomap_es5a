import {createContext} from "react";

let isAuthenticated: boolean = true;

export const AuthContext = createContext(
    isAuthenticated
)