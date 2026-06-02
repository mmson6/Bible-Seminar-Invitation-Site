import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LangContext";
import { text } from "../content";

export default function Hero() {
  const { lang } = useLang();
  const formRef = useRef();
  const [signupStatus, setSignupStatus] = useState(null);
  const [vals, setVals] = useState({ name: "", email: "", phone: "" });
  const t = text[lang];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #071840, #0d2e6e, #1a5dc8, #0d3b8e, #071840)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 12s ease infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Decorative grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(168,200,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168,200,248,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Animated orbs */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-8%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(74,144,217,0.25) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "orbFloat 9s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(26,93,200,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "orbFloat2 11s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "20%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(100,160,240,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "orbFloat 13s ease-in-out infinite 2s",
        }}
      />

      {/* Floating chips — hidden on mobile */}
      <div
        className="hero-chip"
        style={chip("#e8f0fe", "#1a5dc8", "top:18%", "left:5%")}
      >
        {t.chip1}
      </div>
      <div
        className="hero-chip"
        style={chip("#fff", "#4a90d9", "top:30%", "right:5%")}
      >
        {t.chip2}
      </div>
      <div
        className="hero-chip"
        style={chip(
          "rgba(255,255,255,0.1)",
          "rgba(255,255,255,0.8)",
          "bottom:28%",
          "left:4%",
          true,
        )}
      >
        {t.chip3}
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding:
            "clamp(80px,12vw,120px) clamp(16px,5vw,32px) clamp(40px,8vw,80px)",
          maxWidth: "860px",
          width: "100%",
          animation: "fadeUp 0.9s ease both",
        }}
      >
        {/* Date — no box, plain text */}
        <div style={{ marginBottom: "28px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(200,220,255,0.7)",
              margin: "0 0 6px",
            }}
          >
            {t.bibleSeminarLabel}
          </p>
          <p
            style={{
              fontFamily: "'DIN Pro', 'Barlow', 'Arial Narrow', sans-serif",
              fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
              fontWeight: 500,
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            06.15 – 06.19.2026,
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.2rem",
              fontWeight: 500,
              color: "rgba(168,200,248,0.8)",
              margin: "6px 0 0",
              letterSpacing: "-0.04em",
            }}
          >
            {t.eventTime}
          </p>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'DNFForgedBlade', 'Hahmlet', Georgia, serif",
            fontSize: "clamp(2rem, 6vw, 4.2rem)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.1,
            margin: "0 0 20px",
            letterSpacing: "-0.01em",
          }}
        >
          {t.heroHeadlinePre}
          <br />
          <em style={{ color: "#a8c8f8" }}>{t.heroHeadlineEm}</em>
          {lang === "kr" ? <><br />{t.heroHeadlinePost}</> : <><br />{t.heroHeadlinePost}</>}
        </h1>

        {/* Thin rule */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "rgba(168,200,248,0.5)",
            margin: "24px auto",
          }}
        />

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: "rgba(200,220,255,0.8)",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          {t.heroIntro}
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("teach")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#fff",
              color: "var(--blue)",
              textDecoration: "none",
              padding: "13px 32px",
              borderRadius: "40px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.88rem",
              letterSpacing: "0.06em",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
            }}
          >
            {t.heroBtn1}
            <span style={{ fontSize: "0.9rem" }}>{"\u2197"}</span>
          </a>
        </div>

        {/* Sign-up form */}
        <div
          style={{
            maxWidth: "480px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "32px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
          }}
        >
          <h3
            style={{
              fontFamily: "'DNFForgedBlade', 'Hahmlet', Georgia, serif",
              fontSize: "1.3rem",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 8px",
              textAlign: "center",
            }}
          >
            {t.signupTitle}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              color: "rgba(200,220,255,0.6)",
              margin: "0 0 24px",
              textAlign: "center",
            }}
          >
            {t.signupSubtitle}
          </p>

          {signupStatus === "success" ? (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{"\ud83d\udd4a"}</div>
              <p
                style={{
                  fontFamily: "'DNFForgedBlade', 'Hahmlet', Georgia, serif",
                  fontSize: "1.1rem",
                  color: "#fff",
                }}
              >
                {t.signupSuccess}
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault();
                if (!vals.name || !vals.email || !vals.phone) return;
                setSignupStatus("sending");
                emailjs
                  .send(
                    import.meta.env.VITE_EMAILJS_SERVICE,
                    import.meta.env.VITE_EMAILJS_TEMPLATE,
                    {
                      user_name: vals.name,
                      user_email: vals.email,
                      message: `[Bible Seminar Sign-up] ${vals.name} / Phone: ${vals.phone}`,
                    },
                    import.meta.env.VITE_EMAILJS_KEY,
                  )
                  .then(() => setSignupStatus("success"))
                  .catch(() => setSignupStatus("error"));
              }}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div>
                <label style={signupLabelSt}>{t.signupName}</label>
                <input
                  type="text"
                  placeholder={t.signupNamePlaceholder}
                  required
                  value={vals.name}
                  onChange={(e) => setVals({ ...vals, name: e.target.value })}
                  style={signupInputSt}
                />
              </div>
              <div>
                <label style={signupLabelSt}>{t.signupEmail}</label>
                <input
                  type="email"
                  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                  placeholder="your@email.com"
                  required
                  value={vals.email}
                  onChange={(e) => setVals({ ...vals, email: e.target.value })}
                  style={signupInputSt}
                />
              </div>
              <div>
                <label style={signupLabelSt}>{t.signupPhone}</label>
                <input
                  type="tel"
                  pattern="[\d\s\-\(\)\+]+"
                  placeholder="(000) 000-0000"
                  required
                  value={vals.phone}
                  onChange={(e) => setVals({ ...vals, phone: e.target.value })}
                  style={signupInputSt}
                />
              </div>
              {signupStatus === "error" && (
                <p
                  style={{
                    color: "#ff8a8a",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    margin: 0,
                  }}
                >
                  {t.contactError}
                </p>
              )}
              <button
                type="submit"
                disabled={signupStatus === "sending"}
                style={{
                  background:
                    signupStatus === "sending"
                      ? "rgba(255,255,255,0.3)"
                      : "#fff",
                  color:
                    signupStatus === "sending"
                      ? "rgba(255,255,255,0.6)"
                      : "var(--blue)",
                  border: "none",
                  borderRadius: "40px",
                  padding: "13px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.08em",
                  cursor:
                    signupStatus === "sending" ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                }}
              >
                {signupStatus === "sending" ? t.signupSending : t.signupBtn}
              </button>
            </form>
          )}
        </div>

        {/* Scroll cue */}
        <div
          style={{
            marginTop: "48px",
            color: "rgba(168,200,248,0.5)",
            fontSize: "1.2rem",
            animation: "bounce 2s ease infinite",
          }}
        >
          {"\u2193"}
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-24px) scale(1.04); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(18px) scale(0.97); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(7px); opacity: 0.9; }
        }
        #hero input::placeholder, #hero textarea::placeholder {
          color: rgba(200,220,255,0.5);
        }
        @media (max-width: 768px) {
          .hero-chip { display: none !important; }
        }
        @media (max-width: 480px) {
          #hero .cta-row { flex-direction: column; align-items: stretch; }
        }
      `}</style>
    </section>
  );
}

const signupLabelSt = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.72rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(220,235,255,0.75)",
  display: "block",
  marginBottom: "5px",
  textAlign: "left",
};

const signupInputSt = {
  width: "100%",
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "12px",
  color: "#fff",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  padding: "12px 16px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

function chip(bg, color, top_or_bottom, side, dark = false) {
  const pos = top_or_bottom.startsWith("top")
    ? { top: top_or_bottom.split(":")[1] }
    : { bottom: top_or_bottom.split(":")[1] };
  const sideKey = side.startsWith("left") ? "left" : "right";
  return {
    position: "absolute",
    ...pos,
    [sideKey]: side.split(":")[1],
    background: bg,
    color: color,
    border: dark
      ? "1px solid rgba(255,255,255,0.15)"
      : "1px solid rgba(26,93,200,0.12)",
    borderRadius: "30px",
    padding: "7px 18px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.78rem",
    fontWeight: 500,
    letterSpacing: "0.06em",
    backdropFilter: "blur(8px)",
    animation: "fadeUp 1.2s ease both",
    animationDelay: "0.4s",
    zIndex: 3,
  };
}
