import { createRoot } from "react-dom/client";
// import { SkeletonTheme } from "react-loading-skeleton";
import { SessionProvider } from "@inrupt/solid-ui-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./public/css/global.scss";
import reportWebVitals from "./reportWebVitals";

const DEFAULT_SKELETON_COLOR: string = "#f0f0f0";

const app = (
  // <React.StrictMode>
  <BrowserRouter>
    <SessionProvider sessionId="lomap-solid-ssid">
      {/* <SkeletonTheme baseColor={DEFAULT_SKELETON_COLOR}> */}
      <App />
      {/* </SkeletonTheme> */}
    </SessionProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
