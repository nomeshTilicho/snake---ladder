import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import StateContextProvider from "./store/context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>
);
