import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import { text } from "../content";
import doveLogo from "../assets/doveLogo.png";

const LANGS = [
  { key: "en", label: "English" },
  { key: "kr", label: "\ud55c\uad6d\uc5b4" },
  { key: "es", label: "Espa\u00f1ol" },
];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const t = text[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const currentLang = LANGS.find((l) => l.key === lang) || LANGS[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: t.navTeach, id: "teach" },
    { label: t.navMap, id: "map" },
    { label: t.navContact, id: "contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,93,200,0.1)" : "none",
        transition: "all 0.35s ease",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("hero");
        }}
        style={{
          color: scrolled ? "var(--navy)" : "#fff",
          textDecoration: "none",
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "color 0.3s",
        }}
      >
        <img
          src={doveLogo}
          alt="JBCH Logo"
          style={{ height: "36px", width: "auto" }}
        />
        JESUS BAPTIST CHICAGO CHURCH
      </a>

      {/* Desktop links */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "32px" }}
        className="nav-desktop"
      >
        {navLinks.map((l) => (
          <a
            key={l.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(l.id);
            }}
            style={{
              color: scrolled ? "var(--text-soft)" : "rgba(255,255,255,0.85)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              letterSpacing: "0.06em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = scrolled ? "var(--blue)" : "#fff")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = scrolled
                ? "var(--text-soft)"
                : "rgba(255,255,255,0.85)")
            }
          >
            {l.label}
          </a>
        ))}

        {/* Language dropdown */}
        <div ref={langRef} style={{ position: "relative" }}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            style={{
              background: scrolled ? "var(--chip-bg)" : "rgba(255,255,255,0.15)",
              border: scrolled
                ? "1px solid var(--chip-border)"
                : "1px solid rgba(255,255,255,0.3)",
              borderRadius: "20px",
              color: scrolled ? "var(--blue)" : "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: "600",
              padding: "6px 18px",
              cursor: "pointer",
              transition: "all 0.25s",
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {currentLang.label}
            <span style={{ fontSize: "0.6rem" }}>{langOpen ? "\u25b2" : "\u25bc"}</span>
          </button>
          {langOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(16px)",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                overflow: "hidden",
                minWidth: "140px",
                zIndex: 200,
              }}
            >
              {LANGS.map((l) => (
                <button
                  key={l.key}
                  onClick={() => {
                    setLang(l.key);
                    setLangOpen(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: lang === l.key ? "var(--blue-light, #e8f0fe)" : "transparent",
                    border: "none",
                    padding: "10px 18px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: lang === l.key ? "700" : "500",
                    color: lang === l.key ? "var(--blue)" : "var(--text-soft)",
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (lang !== l.key) e.target.style.background = "#f5f7fa";
                  }}
                  onMouseLeave={(e) => {
                    if (lang !== l.key) e.target.style.background = "transparent";
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: scrolled ? "var(--navy)" : "#fff",
          fontSize: "1.4rem",
          cursor: "pointer",
        }}
      >
        {menuOpen ? "\u2715" : "\u2630"}
      </button>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.98)",
            padding: "16px 40px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderBottom: "1px solid var(--border)",
            backdropFilter: "blur(16px)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.id);
              }}
              style={{
                color: "var(--text-soft)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {l.label}
            </a>
          ))}
          <select
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              setMenuOpen(false);
            }}
            style={{
              background: "var(--chip-bg)",
              border: "1px solid var(--chip-border)",
              borderRadius: "20px",
              color: "var(--blue)",
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "0.85rem",
              fontWeight: "600",
              padding: "8px 18px",
              cursor: "pointer",
              alignSelf: "flex-start",
              outline: "none",
            }}
          >
            {LANGS.map((l) => (
              <option key={l.key} value={l.key}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
