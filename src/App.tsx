import React from "react";
import hero from "./assets/hero.png";
import "./App.css";
import "./index.css";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <main data-testid="main-body" className="bg-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 bg-white lg:px-8 h-screen shadow-lg pt-10 divide-y-10">
          <div className="pt-10 text-2xl text-center">
            <a className="font-semibold">Apply now: </a>
            <a>We are looking for new organizers! </a>{" "}
            <a
              className="text-blue-800 underline"
              href="https://en.torucon.no/frivillig"
            >
              Read more about the positions and how to apply here!
            </a>
          </div>
          <div className="pt-10 placeholder">
            <img data-testid="heroImage" src={hero}></img>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
