import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
// import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter } from "react-router-dom";
import MyApp from "./MyApp";
import reportWebVitals from "./reportWebVitals";
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
import LoginPage from "./pages/login/LoginPage";
//import {ses} from '@inrupt/solid-client-authn-browser';
import "./public/css/global.scss";

const DEFAULT_SKELETON_COLOR: string = "#f0f0f0";

// const restoreCallback = (session: any) => {
//   console.log("Session restored", session);
// }



const app = (  
  <React.StrictMode>
    <BrowserRouter>      
      <MyApp/>
    </BrowserRouter>
  </React.StrictMode>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
