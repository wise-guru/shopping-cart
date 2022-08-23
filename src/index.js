import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import RouteSwitch from "./components/RouteSwitch";
import Navigation from "./components/Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <RouteSwitch />
  </React.StrictMode>
);
