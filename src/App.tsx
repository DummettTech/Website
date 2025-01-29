import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <main data-testid="main-body" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-900 h-screen shadow-lg">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-white">{t("Welcome to React")}</p>
        </div>
      </main>
    </div>
  );
};

export default App;
