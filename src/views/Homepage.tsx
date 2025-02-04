import React, { useState } from "react";
import hero from "@assets/hero.png";
import "@/App.css";
import "@/index.css";
import Image from "@components/image";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <main data-testid="main-body" className="bg-gray-200 relative">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 bg-white lg:px-8 h-screen shadow-lg pt-10 divide-y-10">
          <div className="pt-10 placeholder">
            <a href="/darkages">
              <Image src={hero} height="400px" />
            </a>
          </div>
          <div className="py-1 border-b-black-500"> </div>
          <section className="py-4">
            <h1 className="text-2xl font-bold">Who are we?</h1>
            <div className="grid grid-cols-2">
              <h2 className="text-2xl font-semibold py-2">Torucon is a festival that since 2011 has been held annually in Trondheim for people with leisure pursuits within the fantastic genre. They are mostly based on interests such as science fiction, fantasy, cosplay, many, anime, games, TV series, film.</h2>
            </div>
            <div></div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
