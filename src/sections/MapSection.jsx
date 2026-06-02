import { useLang } from "../context/LangContext";
import { text } from "../content";
import { useReveal } from "../hooks/useReveal";

export default function MapSection() {
  const { lang } = useLang();
  const t = text[lang];
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section
      id="map"
      style={{
        background: "var(--cream)",
        padding: "110px 40px",
      }}
    >
      <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="map-grid"
        >
          {/* Left: heading + info */}
          <div ref={leftRef} className="reveal-left">
            <p style={labelSt}>{t.locationLabel}</p>
            <h2 style={headSt}>
              <em style={{ color: "var(--blue-mid)" }}>{t.findHeadingEm}</em>{" "}
              {t.findHeadingRest}
            </h2>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "var(--blue-mid)",
                margin: "16px 0",
                opacity: 0.4,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginBottom: "32px",
              }}
            >
              {[
                {
                  icon: "\ud83d\udd4a",
                  label: t.churchLabel,
                  value: t.churchName,
                },
                {
                  icon: "\ud83d\udccd",
                  label: t.addressLabel,
                  value: t.mapAddress,
                },
              ].map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      background: "var(--blue-light)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      flexShrink: 0,
                      border: "1px solid var(--chip-border)",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        margin: "0 0 1px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontFamily: "'DM Sans',sans-serif",
                          fontSize: "0.9rem",
                          color: "var(--text-soft)",
                          textDecoration: "none",
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontFamily: "'DM Sans',sans-serif",
                          fontSize: "0.9rem",
                          color: "var(--text-soft)",
                          margin: 0,
                        }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=575+Rush+St,+Roselle,+IL+60172"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--blue)",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: "40px",
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 600,
                fontSize: "0.88rem",
                letterSpacing: "0.06em",
                boxShadow: "0 4px 16px rgba(26,93,200,0.3)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(26,93,200,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(26,93,200,0.3)";
              }}
            >
              {"\ud83d\uddfa"} {t.mapBtn} {"\u2197"}
            </a>
          </div>

          {/* Right: map image */}
          <div
            ref={rightRef}
            className="reveal-right"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "0 16px 48px rgba(26,93,200,0.1)",
              aspectRatio: "4/3",
              background: "linear-gradient(135deg,#e8f0fe,#c8d8f8)",
              position: "relative",
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}chi-church-map.jpg`}
              alt="Church location map"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                color: "var(--blue-mid)",
              }}
            >
              <span style={{ fontSize: "3rem" }}>{"\ud83d\udccd"}</span>
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  margin: 0,
                  letterSpacing: "0.08em",
                }}
              >
                {t.mapFallback}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:700px){
          .map-grid{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}

const labelSt = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: "0.72rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--blue-mid)",
  margin: "0 0 10px",
  fontWeight: 600,
};
const headSt = {
  fontFamily: "'DNFForgedBlade', 'Hahmlet', Georgia,serif",
  fontSize: "clamp(2rem,4vw,3rem)",
  fontWeight: 400,
  color: "var(--navy)",
  margin: 0,
  lineHeight: 1.1,
};
