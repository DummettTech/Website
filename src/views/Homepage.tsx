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
            <div className="py-2 pz-40">
              <h2 className="text-2xl py-2 p-40">{t("blerb")}</h2>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
