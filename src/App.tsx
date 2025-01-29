import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("Welcome to React")}</p>
      </header>
    </div>
  );
};

export default App;
