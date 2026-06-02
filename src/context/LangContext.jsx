import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const LangContext = createContext();

const URL_TO_KEY = { en: "en", ko: "kr", es: "es" };
const KEY_TO_URL = { en: "en", kr: "ko", es: "es" };

export function LangProvider({ urlLang, children }) {
  const navigate = useNavigate();
  const lang = URL_TO_KEY[urlLang] || "en";

  const setLang = (key) => {
    const url = KEY_TO_URL[key] || "en";
    navigate(`/${url}`);
  };

  return (
    <LangContext.Provider value={{ lang, urlLang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
