import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import file bahasa
import en from "./locales/en.json";
import id from "./locales/id";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    lng: "en", // Bahasa default
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // React sudah melindungi dari XSS
    },
  });

export default i18n;