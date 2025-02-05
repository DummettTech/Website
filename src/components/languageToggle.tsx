import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Image from "@components/image";
import gbFlag from "@assets/gb.svg";
import noFlag from "@assets/no.svg";

import { detectLanguage, getTranslationMap } from "@lib/lang";

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const detectedLanguage = detectLanguage(i18n.language);
    const savedLanguage = localStorage.getItem("language");

    if (!detectedLanguage && savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      console.log(savedLanguage);
      setIsOn(savedLanguage === "en");
    } else {
      const detectedLanguage = detectLanguage(i18n.language);
      i18n.changeLanguage(detectedLanguage);
      localStorage.setItem("language", detectedLanguage);
      console.log(detectedLanguage);
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
    <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleSwitch}>
      <div>
        <Image src={noFlag} width="25px" height="20px" alt="Norsk" />
      </div>

      <div
        className="w-14 h-8 flex items-center bg-gray-300 rounded-full p-1"
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isOn ? "translate-x-6" : ""
          }`}
        ></div>
      </div>

      <div>
        <Image src={gbFlag} width="25px" height="20px" alt="English" />
      </div>
    </div>
  );
};

export default LanguageToggle;
