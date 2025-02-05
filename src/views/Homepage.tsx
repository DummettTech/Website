import React, { useState } from "react";
import hero from "@assets/hero.png";
import "@/App.css";
import "@/index.css";
import Image from "@components/image";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getTranslationMap } from "@/lib/lang";
import en from "@translations/homepage/en.json";
import no from "@translations/homepage/no.json";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  getTranslationMap(i18n, { en, no });

  return (
    <div>
      <main data-testid="main-body" className="bg-gray-200 relative">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 bg-white lg:px-8 h-screen shadow-lg pt-10 divide-y-10">
          <div className="pt-10 placeholder">
            <Link to="/darkages">
              <Image src={hero} height="400px" alt={t("darkAgesHero")} />
            </Link>
          </div>
          <div className="py-10">
            <h1 className="text-2xl font-bold text-center">{t("whoAreWe")}</h1>
            <div className="py-2 px-4 sm:px-6 lg:px-40">
              <h2 className="text-2xl py-2">{t("blerb")}</h2>
            </div>
            <div className="py-10 content-center">
              <div className="grid grid-cols-2 gap-4">
                <div>01</div> <div>02</div>
                <div>03</div> <div>04</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
