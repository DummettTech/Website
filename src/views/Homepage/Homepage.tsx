import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import hero from "@assets/homepage/hero.png";
import en from "@translations/homepage/en.json";
import no from "@translations/homepage/no.json";

import { getTranslationMap } from "@/lib/lang";

import Image from "@components/image";
import { WhatWeDo } from "./components/WhatWeDo";
import { WhoAreWe } from "./components/WhoAreWe";

const Homepage: React.FC = () => {
  const { t, i18n } = useTranslation();
  getTranslationMap(i18n, { en, no });

  return (
    <div>
      <Link to="/darkages">
        <Image src={hero} height="400px" alt={t("darkAgesHero")} />
      </Link>
      <WhoAreWe />
      <WhatWeDo />
    </div>
  );
};

export default Homepage;
