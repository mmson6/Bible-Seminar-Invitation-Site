import { useLang } from "../context/LangContext";
import { text } from "../content";

export default function Contact() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <section
      id="contact"
      style={{
        background: "var(--white)",
        padding: "110px 40px 72px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "52px" }}>
          <p style={labelSt}>{t.getInTouch}</p>
          <h2 style={headSt}>
            <em style={{ color: "var(--blue-mid)" }}>{t.contactHeadingEm}</em>{" "}
            {t.contactHeadingRest}
          </h2>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--blue-mid)",
              marginTop: "16px",
              opacity: 0.4,
            }}
          />
        </div>

        <div>
          <div>
            <p
              style={{
                fontFamily: "'DNFForgedBlade', 'Hahmlet', Georgia,serif",
                fontSize: "1.3rem",
                color: "var(--navy)",
                margin: "0 0 28px",
                lineHeight: 1.3,
              }}
            >
              {t.contactIntro}
            </p>

            {[
              {
                icon: "\ud83d\udd4a",
                label: t.churchLabel,
                value: t.churchName,
              },
              {
                icon: "\ud83d\udcde",
                label: t.phoneLabel,
                value: t.phone,
                href: t.phoneHref,
              },
              {
                icon: "\u2709",
                label: t.emailLabel,
                value: t.email,
                href: "mailto:jbchsva@gmail.com",
              },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "14px",
                  marginBottom: "18px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "var(--white)",
                    border: "1px solid var(--chip-border)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                    color: "var(--blue)",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      margin: "0 0 2px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
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
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            marginTop: "64px",
            paddingTop: "28px",
            textAlign: "center",
            color: "var(--text-muted)",
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
          }}
        >
          {"\ud83d\udd4a"} &nbsp;{t.footerText}
        </div>
      </div>

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
