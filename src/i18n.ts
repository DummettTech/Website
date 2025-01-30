import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "./Translations/English/translation.json";
import norsk from "./Translations/Norsk/translation.json";
const resources = {
  en: {
    translation: english,
  },
  no: {
    translation: norsk,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "no",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
