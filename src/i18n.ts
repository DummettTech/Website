import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "@translations/English/translation.json";
import norsk from "@translations/Norsk/translation.json";

const resources = {
  en: {
    translation: english,
  },
  no: {
    translation: norsk,
  },
};

const detection = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "no",
    interpolation: {
      escapeValue: false,
    },
    detection
  });

export default i18n;
