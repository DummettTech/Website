import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import NavBar from "./components/navbar";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="pt-20">
      <NavBar />
    </div>
    <div>
      <App />
    </div>
  </React.StrictMode>
);
