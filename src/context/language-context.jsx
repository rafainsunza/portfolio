import { createContext, useContext, useEffect, useState } from "react";
import en from "../data/translations/en.json";
import nl from "../data/translations/nl.json";

const translations = { en, nl };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const translation = (key) => {
    const keys = key.split(".");
    return keys.reduce((object, key) => object[key], translations[language]);
  };

  return <LanguageContext.Provider value={{ language, setLanguage, translation }}>{children}</LanguageContext.Provider>;
};

export const useTranslations = () => useContext(LanguageContext);
