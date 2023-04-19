import { SessionProvider } from "@inrupt/solid-ui-react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./public/css/global.scss";

import React from "react";

const app = (
  <SessionProvider sessionId="lomap-solid-ssid">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SessionProvider>
);

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(app);
}

//reportWebVitals();
