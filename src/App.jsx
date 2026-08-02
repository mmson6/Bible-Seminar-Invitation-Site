import { HashRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LangProvider } from "./context/LangContext";
import Home from "./pages/Home";

const VALID_LANGS = ["en", "ko", "es"];

function LangRoute() {
  const { lang } = useParams();
  if (!VALID_LANGS.includes(lang)) {
    return <Navigate to="/en" replace />;
  }
  return (
    <LangProvider urlLang={lang}>
      <Home />
    </LangProvider>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:lang" element={<LangRoute />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </HashRouter>
  );
}
