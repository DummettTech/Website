import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Image from "./image";

import gb from "../assets/gb.svg";
import no from "../assets/no.svg";
import { detectLanguage } from "../lib/lang";

// rework to use local translation files instead of flat english or pulling from
//     the translations folder

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (detectLanguage(i18n.language) === 'en') {
      setIsOn(true);
    }
  }, [i18n.language]);

  const toggleSwitch = () => {
    if (isOn) {
      i18n.changeLanguage("no");
    } else {
      i18n.changeLanguage("en");
    }
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center space-x-2">
      <div>
        <Image src={no} width="25px" height="20px" />
      </div>

      <div
        className="w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
        onClick={toggleSwitch}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isOn ? "translate-x-6" : ""
          }`}
        ></div>
      </div>

      <div>
        <Image src={gb} width="25px" height="20px" />
      </div>
    </div>
  );
};

export default LanguageToggle;
