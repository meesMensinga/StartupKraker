"use client"

import { useState, useEffect, useRef } from "react"
import { Clock, FileX, Globe, ChevronDown, CheckCircle, ChevronUp, Loader2 } from "lucide-react"

/* ================================================================
   REVEAL — fade-in op scroll
   ================================================================ */
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " in" : ""}${className ? " " + className : ""}`}
    >
      {children}
    </div>
  )
}

/* ================================================================
   NAVBAR
   ================================================================ */
function Navbar() {
  return (
    <header className="sk-nav tone-dark" data-role="nav">
      <div className="wrap nav-inner">
        {/* Logo + beta badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="#" className="logo">
            startupkraker<span className="star">✳</span>
          </a>
          <span
            style={{
              background: "#c8952a",
              color: "#1a1714",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: 999,
              lineHeight: 1,
            }}
          >
            Beta
          </span>
        </div>

        {/* Nav links */}
        <nav className="nav-links">
          <a href="#hoe-het-werkt">Hoe het werkt</a>
        </nav>

        {/* CTA */}
        <a href="#aanmelden" className="btn btn-primary btn-sm">
          Meld je aan <span className="arw">→</span>
        </a>
      </div>
    </header>
  )
}

/* ================================================================
   HERO
   ================================================================ */
function Hero() {
  return (
    <section className="sk-hero tone-light" data-role="hero">
      <div className="hero-orb" />
      <div className="wrap">
        <div className="hero-top">
          {/* Beta badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(200,149,42,0.15)",
              border: "1px solid rgba(200,149,42,0.4)",
              color: "#c8952a",
              fontSize: 13,
              fontWeight: 600,
              padding: "7px 16px",
              borderRadius: 999,
            }}
          >
            🚀&nbsp; Vroege toegang — Eerste 20 klanten krijgen maand 1 gratis
          </span>
          <div className="hero-tag">
            Één pakket · <b>€199 / mnd</b>
            <br />
            Maandelijks opzegbaar
          </div>
        </div>

        <h1 className="display">
          Stop met administreren.
          <br />
          <span className="am">Begin met</span> ondernemen.
        </h1>

        <p className="hero-sub">
          Startupkraker regelt je boekhouding, BTW-aangifte, juridische basis en
          website.{" "}
          <b>Jij focust op je product. Wij regelen de rest.</b>
        </p>

        <div className="hero-cta">
          <a href="#aanmelden" className="btn btn-primary">
            Meld je aan voor beta <span className="arw">→</span>
          </a>
          <a href="#hoe-het-werkt" className="btn btn-outline">
            Hoe werkt het?
          </a>
        </div>

        <div className="hero-badges">
          <span className="hero-badge">
            <span className="ck">✓</span> Geen verborgen kosten
          </span>
          <span className="hero-badge">
            <span className="ck">✓</span> Maandelijks opzegbaar
          </span>
          <span className="hero-badge">
            <span className="ck">✓</span> Persoonlijk aanspreekpunt
          </span>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   SOCIAAL BEWIJS BALK
   ================================================================ */
function SocialProof() {
  return (
    <div
      className="tone-light"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface-2)",
        padding: "14px 0",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#c8952a",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: 14, fontWeight: 500, color: "var(--sub)" }}>
          We zoeken <strong style={{ color: "var(--fg)" }}>20 startups</strong>{" "}
          om mee te testen — daarna gaan de deuren open
        </span>
      </div>
    </div>
  )
}

/* ================================================================
   HET PROBLEEM
   ================================================================ */
function Problem() {
  const cards = [
    {
      Icon: Clock,
      title: "Klok",
      heading: "Je avonden gaan op aan bonnetjes",
      body: "BTW-aangifte, facturen najagen, de KvK. Het kost je precies de uren die je in je bedrijf wilde steken.",
    },
    {
      Icon: FileX,
      title: "Contract",
      heading: "Eén foute clausule kost je duizenden",
      body: "Algemene voorwaarden, contracten, AVG. Zonder juridische basis loop je een risico dat je niet ziet aankomen.",
    },
    {
      Icon: Globe,
      title: "Website",
      heading: "Je site staat al een jaar stil",
      body: "Updates, hosting, dat ene formulier dat niet werkt. Onderhoud blijft liggen — tot het misgaat.",
    },
  ]

  return (
    <section
      className="sk-section tone-light"
      id="hoe-het-werkt"
      data-role="problem"
    >
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="idx">01</span> Herken je dit?
          </span>
          <h2 className="display">De administratie houdt je van je werk.</h2>
        </Reveal>

        <div className="prob-grid">
          {cards.map(({ Icon, title, heading, body }) => (
            <Reveal key={title}>
              <div className="prob-card">
                <div
                  className="pc-num"
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <Icon size={14} style={{ color: "var(--accent)" }} />
                  {title}
                </div>
                <h3>{heading}</h3>
                <p>{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "var(--sub)",
            fontSize: 14,
          }}
        >
          <ChevronDown size={22} style={{ color: "var(--accent)" }} />
          <span>Dat pakken wij van je over.</span>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   HOE HET WERKT
   ================================================================ */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Meld je aan",
      desc: "Vul je gegevens in. We nemen binnen 24 uur contact op.",
    },
    {
      num: "02",
      title: "Wij koppelen je team",
      desc: "Je krijgt een vaste boekhouder en juridisch aanspreekpunt toegewezen.",
    },
    {
      num: "03",
      title: "Jij bouwt",
      desc: "Wij sturen maandelijks een update. Jij hoeft niets te doen.",
    },
  ]

  return (
    <section className="sk-section tone-light" data-role="how">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="idx">02</span> Drie stappen
          </span>
          <h2 className="display">In drie stappen geregeld.</h2>
        </Reveal>

        <div className="steps">
          {steps.map((s) => (
            <Reveal key={s.num}>
              <div className="step">
                <div className="num">
                  <span>{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   HET PAKKET
   ================================================================ */
const FEATURES = [
  "Boekhouding bijhouden",
  "BTW-aangifte (per kwartaal)",
  "VPB-aangifte (jaarlijks)",
  "Jaarrekening + KvK deponering",
  "DGA-loon verwerking",
  "Juridische standaardcontracten",
  "Algemene voorwaarden",
  "Website onderhoud (1 uur per maand)",
  "Persoonlijk aanspreekpunt",
  "Maandelijks opzegbaar",
]

const MAILTO =
  "mailto:info@startupkraker.nl?subject=Beta%20aanmelding%20Startupkraker&body=Hallo%2C%20ik%20wil%20me%20aanmelden%20voor%20de%20beta%20van%20Startupkraker.%20Mijn%20bedrijfsnaam%20is%3A%20..."

function Pakket() {
  return (
    <section className="sk-section tone-dark" data-role="pakketten">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="idx">03</span> Beta pakket
          </span>
          <h2 className="display">Één pakket. Alles inbegrepen.</h2>
          <p className="lede">
            Tijdens de beta werken we met één standaardpakket. Na de beta komen
            er meer opties.
          </p>
        </Reveal>

        {/* Centered single card */}
        <Reveal>
          <div
            style={{
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            <div className="pak feat" style={{ position: "relative" }}>
              {/* Beta badge */}
              <div className="pak-badge">Beta prijs — tijdelijk beschikbaar</div>

              <div className="tier">Starter BV</div>
              <div className="tier-for">Voor startende BV&apos;s</div>

              <div className="price">
                €199<span className="per">/ mnd</span>
              </div>

              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--accent)",
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                Eerste maand gratis voor de eerste 20 aanmeldingen
              </p>

              <ul>
                {FEATURES.map((f) => (
                  <li key={f}>
                    <span className="ck">✓</span> {f}
                  </li>
                ))}
              </ul>

              <a
                href={MAILTO}
                className="btn btn-primary pak-btn"
                style={{ fontSize: 16, padding: "17px 28px", marginTop: "auto" }}
              >
                Neem contact op <span className="arw">→</span>
              </a>

              {/* Cal.com kennismakingsgesprek */}
              <a
                href={process.env.NEXT_PUBLIC_CAL_URL ?? "#aanmelden"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline pak-btn"
                style={{ fontSize: 15, padding: "15px 28px", marginTop: 10 }}
              >
                Plan een kennismakingsgesprek
              </a>
              <p
                style={{
                  textAlign: "center",
                  fontSize: 12.5,
                  color: "var(--sub)",
                  marginTop: 8,
                }}
              >
                15 minuten · Gratis · Vrijblijvend
              </p>

              <p
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  color: "var(--sub)",
                  marginTop: 14,
                }}
              >
                We nemen binnen 24 uur contact op via e-mail
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================
   AANMELDEN (wachtlijst)
   ================================================================ */
function Aanmelden() {
  const [email, setEmail] = useState("")
  const [bedrijfsnaam, setBedrijfsnaam] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [fieldError, setFieldError] = useState("")

  async function handleSubmit() {
    const trimmed = email.trim()
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setFieldError("Vul een geldig e-mailadres in.")
      return
    }
    setFieldError("")
    setStatus("loading")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, bedrijfsnaam: bedrijfsnaam.trim() }),
      })
      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error ?? "Serverfout")
      setStatus("success")
    } catch (err) {
      console.error("[waitlist submit]", err)
      setStatus("error")
    }
  }

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    background: "var(--surface)",
    border: `1px solid ${hasError ? "#c0392b" : "var(--border)"}`,
    borderRadius: 999,
    padding: "14px 22px",
    fontSize: 15,
    color: "var(--fg)",
    outline: "none",
    fontFamily: "var(--font-body)",
    boxSizing: "border-box",
  })

  return (
    <section
      className="sk-section tone-dark"
      id="aanmelden"
      data-role="cta"
      style={{ paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="cta-orb" />
      <div className="wrap" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
        <Reveal>
          <span className="eyebrow" style={{ marginBottom: 24, display: "inline-flex" }}>
            <span className="tick" /> Wachtlijst
          </span>
        </Reveal>

        <Reveal>
          <h2
            className="display"
            style={{ fontSize: "clamp(36px, 4.8vw, 64px)", margin: "0 auto 16px" }}
          >
            Zet je naam op de lijst
          </h2>
        </Reveal>

        <Reveal>
          <p style={{ fontSize: 18, color: "var(--sub)", maxWidth: "44ch", margin: "0 auto 40px" }}>
            We nemen contact op zodra jouw plek beschikbaar is.{" "}
            <strong style={{ color: "var(--fg)" }}>
              Geen spam, geen verplichtingen.
            </strong>
          </p>
        </Reveal>

        <Reveal>
          {status === "success" ? (
            /* ── Succesmelding ── */
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(200,149,42,0.15)",
                border: "1px solid rgba(200,149,42,0.4)",
                color: "#c8952a",
                fontSize: 16,
                fontWeight: 600,
                padding: "16px 32px",
                borderRadius: 999,
                animation: "fadeUp .4s ease both",
              }}
            >
              <CheckCircle size={20} />
              ✓ Gelukt! Check je inbox. We nemen binnen 24 uur contact op.
            </div>
          ) : (
            /* ── Formulier ── */
            <div style={{ maxWidth: 460, margin: "0 auto" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* E-mail input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setFieldError("") }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="jouw@bedrijf.nl"
                  disabled={status === "loading"}
                  style={inputStyle(!!fieldError)}
                  aria-label="E-mailadres"
                />

                {/* Bedrijfsnaam input */}
                <input
                  type="text"
                  value={bedrijfsnaam}
                  onChange={(e) => setBedrijfsnaam(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Bedrijfsnaam (optioneel)"
                  disabled={status === "loading"}
                  style={inputStyle(false)}
                  aria-label="Bedrijfsnaam"
                />

                {/* Submit knop */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="btn btn-primary"
                  style={{
                    justifyContent: "center",
                    opacity: status === "loading" ? 0.75 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                      Bezig…
                    </>
                  ) : (
                    <>
                      Aanmelden <span className="arw">→</span>
                    </>
                  )}
                </button>
              </div>

              {/* Validatiefout */}
              {fieldError && (
                <p style={{ marginTop: 10, fontSize: 13, color: "#c0392b" }}>
                  {fieldError}
                </p>
              )}

              {/* API-fout */}
              {status === "error" && (
                <p style={{ marginTop: 10, fontSize: 13, color: "#c0392b" }}>
                  Er ging iets mis. Probeer het opnieuw.
                </p>
              )}
            </div>
          )}
        </Reveal>

        {/* Trust-regels */}
        <Reveal>
          <div
            style={{
              display: "flex",
              gap: 32,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 28,
              fontSize: 13.5,
              color: "var(--sub)",
            }}
          >
            <span>🔒 Geen spam</span>
            <span>📩 Reactie binnen 24u</span>
            <span>❌ Altijd opzegbaar</span>
          </div>
        </Reveal>
      </div>

      {/* Keyframes voor succes fade + spinner */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

/* ================================================================
   FAQ
   ================================================================ */
const FAQ_ITEMS = [
  {
    q: "Wanneer start de beta?",
    a: "We starten zodra we 20 geschikte bedrijven hebben gevonden. Meld je aan en we houden je op de hoogte.",
  },
  {
    q: "Voor wie is dit geschikt?",
    a: "Voor Nederlandse BV's in de eerste 3 jaar. Geen personeel of maximaal 5 medewerkers. Hoofdzakelijk tech, creatief of dienstverlening.",
  },
  {
    q: "Wat kost het na de beta?",
    a: "Het beta-pakket blijft €199/mnd. Na de beta breiden we uit met meer pakketten. Beta-klanten behouden hun prijs.",
  },
  {
    q: "Wie doet mijn boekhouding?",
    a: "We werken met gecertificeerde boekhouders (NOAB/RB-geregistreerd). Je krijgt één vast aanspreekpunt, geen callcenter.",
  },
  {
    q: "Kan ik tussentijds stoppen?",
    a: "Ja, maandelijks opzegbaar. Geen boetes, geen minimale looptijd.",
  },
]

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="sk-section tone-light" data-role="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="idx">04</span> Vragen
          </span>
          <h2 className="display">Veelgestelde vragen.</h2>
        </Reveal>

        <Reveal>
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIdx === i
              return (
                <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
                  <button
                    className="faq-q"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className="faq-pm" aria-hidden="true" />
                  </button>
                  <div
                    className="faq-body"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.3s ease",
                    }}
                  >
                    <div className="faq-body-in">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================
   FOOTER
   ================================================================ */
function Footer() {
  return (
    <footer className="sk-footer tone-dark" data-role="footer">
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr",
            gap: 40,
            paddingBottom: 56,
          }}
        >
          {/* Brand */}
          <div className="foot-brand">
            <a href="#" className="logo">
              startupkraker<span className="star">✳</span>
            </a>
            <p>Één factuur. Alles geregeld.</p>
          </div>

          {/* Links */}
          <div className="foot-col">
            <h4>Pagina</h4>
            <a href="#hoe-het-werkt">Hoe het werkt</a>
            <a href="#aanmelden">Beta pakket</a>
            <a href="#aanmelden">Aanmelden</a>
          </div>

          {/* Contact */}
          <div className="foot-col">
            <h4>Contact</h4>
            <a href="mailto:info@startupkraker.nl">info@startupkraker.nl</a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Startupkraker · Nog in beta · Rotterdam, Nederland</span>
          <span
            style={{
              background: "rgba(200,149,42,0.15)",
              border: "1px solid rgba(200,149,42,0.3)",
              color: "#c8952a",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            Beta
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ================================================================
   PAGE
   ================================================================ */
export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <HowItWorks />
        <Pakket />
        <Aanmelden />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
