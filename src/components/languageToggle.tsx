import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Image from "@components/image";
import gb from "@assets/gb.svg";
import no from "@assets/no.svg";
import { detectLanguage } from "@lib/lang";

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOn, setIsOn] = useState(localStorage.getItem("language") === "no");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setIsOn(savedLanguage === "en");
    } else {
      const detectedLanguage = detectLanguage(i18n.language);
      i18n.changeLanguage(detectedLanguage);
      localStorage.setItem("language", detectedLanguage);
      setIsOn(detectedLanguage === "en");
    }
  }, [i18n]);

  const toggleSwitch = () => {
    const newLanguage = isOn ? "no" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
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
