"use client"

import { useState, useEffect, useRef } from "react"

/* ================================================================
   REVEAL COMPONENT
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
    <div ref={ref} className={`reveal${visible ? " in" : ""}${className ? " " + className : ""}`}>
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
        <a href="#" className="logo">
          startupkraker<span className="star">✳</span>
        </a>
        <nav className="nav-links">
          <a href="#hoe">Hoe het werkt</a>
          <a href="#pakketten">Pakketten</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <a href="#pakketten" className="btn btn-primary btn-sm">
            Start nu <span className="arw">→</span>
          </a>
        </div>
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
          <span className="eyebrow">
            <span className="tick" />
            Administratie-abonnement voor ZZP &amp; BV
          </span>
          <div className="hero-tag">
            Vanaf <b>€99 / mnd</b>
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
          <b>Boekhouding, juridisch, salarisadmin en website.</b> Eén factuur
          per maand. Wij regelen de rompslomp — jij bouwt je bedrijf.
        </p>

        <div className="hero-cta">
          <a href="#pakketten" className="btn btn-primary">
            Start nu <span className="arw">→</span>
          </a>
          <a href="#pakketten" className="btn btn-outline">
            Bekijk pakketten
          </a>
        </div>

        <div className="hero-badges">
          <span className="hero-badge">
            <span className="ck">✓</span> Geen verborgen kosten
          </span>
          <span className="hero-badge">
            <span className="ck">✓</span> In 10 minuten gestart
          </span>
          <span className="hero-badge">
            <span className="ck">✓</span> Maandelijks opzegbaar
          </span>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   PROBLEEM
   ================================================================ */
function Problem() {
  return (
    <section className="sk-section tone-light" data-role="problem">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="idx">01</span> Het probleem
          </span>
          <h2 className="display">De administratie houdt je van je werk.</h2>
        </Reveal>

        <div className="prob-grid">
          <Reveal>
            <div className="prob-card">
              <div className="pc-num">— Klok</div>
              <h3>Je avonden gaan op aan bonnetjes</h3>
              <p>
                BTW-aangifte, facturen najagen, de KvK. Het kost je precies de
                uren die je in je bedrijf wilde steken.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="prob-card">
              <div className="pc-num">— Contract</div>
              <h3>Eén foute clausule kost je duizenden</h3>
              <p>
                Algemene voorwaarden, contracten, AVG. Zonder juridische basis
                loop je een risico dat je niet ziet aankomen.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="prob-card">
              <div className="pc-num">— Website</div>
              <h3>Je site staat al een jaar stil</h3>
              <p>
                Updates, hosting, dat ene formulier dat niet werkt. Onderhoud
                blijft liggen — tot het misgaat.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   HOE HET WERKT
   ================================================================ */
function HowItWorks() {
  return (
    <section className="sk-section tone-light" id="hoe" data-role="how">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="idx">02</span> Hoe het werkt
          </span>
          <h2 className="display">
            Drie stappen. Daarna heb je er geen omkijken meer naar.
          </h2>
        </Reveal>

        <div className="steps">
          <Reveal>
            <div className="step">
              <div className="num">
                <span>01</span>
              </div>
              <h3>Kies je pakket</h3>
              <p>
                Solo, Starter BV of Groei. In tien minuten geregeld — geen
                verkooppraatje.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="step">
              <div className="num">
                <span>02</span>
              </div>
              <h3>Wij koppelen je team</h3>
              <p>
                Boekhouder, jurist en webbeheerder. Eén vast aanspreekpunt, geen
                wisselende krachten.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="step">
              <div className="num">
                <span>03</span>
              </div>
              <h3>Jij bouwt je bedrijf</h3>
              <p>
                Wij draaien de rompslomp op de achtergrond. Eén factuur per
                maand, verder geen gedoe.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   PAKKETTEN
   ================================================================ */
function Pakketten() {
  return (
    <section className="sk-section tone-dark" id="pakketten" data-role="pakketten">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="idx">03</span> Pakketten
          </span>
          <h2 className="display">Eén vast bedrag. Alles erin.</h2>
          <p className="lede">
            Geen uurtje-factuurtje, geen verrassingen. Kies wat bij je bedrijf
            past en stap maandelijks weer uit als het moet.
          </p>
        </Reveal>

        <div className="pak-grid">
          {/* Solo */}
          <Reveal>
            <div className="pak">
              <div className="tier">Solo</div>
              <div className="tier-for">Voor ZZP&apos;ers</div>
              <div className="price">
                €99<span className="per">/ mnd</span>
              </div>
              <ul>
                <li><span className="ck">✓</span> Boekhouding &amp; BTW-aangifte</li>
                <li><span className="ck">✓</span> Jaarrekening &amp; IB-aangifte</li>
                <li><span className="ck">✓</span> Standaard contracten &amp; AVG</li>
                <li><span className="ck">✓</span> E-mail support binnen 24 uur</li>
              </ul>
              <a href="/checkout?plan=solo" className="btn btn-outline pak-btn">
                Kies Solo
              </a>
            </div>
          </Reveal>

          {/* Starter BV — featured */}
          <Reveal>
            <div className="pak feat">
              <div className="pak-badge">Meest gekozen</div>
              <div className="tier">Starter BV</div>
              <div className="tier-for">Voor startende BV&apos;s</div>
              <div className="price">
                €199<span className="per">/ mnd</span>
              </div>
              <ul>
                <li><span className="ck">✓</span> Alles uit Solo</li>
                <li><span className="ck">✓</span> Salarisadministratie (tot 3 mensen)</li>
                <li><span className="ck">✓</span> Juridisch op maat</li>
                <li><span className="ck">✓</span> Website-onderhoud</li>
                <li><span className="ck">✓</span> Eén vast aanspreekpunt</li>
              </ul>
              <a href="/checkout?plan=starter-bv" className="btn btn-primary pak-btn">
                Kies Starter BV <span className="arw">→</span>
              </a>
            </div>
          </Reveal>

          {/* Groei */}
          <Reveal>
            <div className="pak">
              <div className="tier">Groei</div>
              <div className="tier-for">Voor groeiende teams</div>
              <div className="price">
                €349<span className="per">/ mnd</span>
              </div>
              <ul>
                <li><span className="ck">✓</span> Alles uit Starter BV</li>
                <li><span className="ck">✓</span> Salaris tot 10 mensen</li>
                <li><span className="ck">✓</span> Kwartaalstrategie &amp; advies</li>
                <li><span className="ck">✓</span> Prioriteit support binnen 4 uur</li>
                <li><span className="ck">✓</span> Onbeperkt contracten</li>
              </ul>
              <a href="/checkout?plan=groei" className="btn btn-outline pak-btn">
                Kies Groei
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   VERGELIJKING
   ================================================================ */
function Vergelijking() {
  return (
    <section className="sk-section tone-light" data-role="compare">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="idx">04</span> Vergelijking
          </span>
          <h2 className="display">Reken het zelf na.</h2>
        </Reveal>

        <Reveal>
          <div className="cmp">
            {/* Header row */}
            <div className="cmp-row cmp-head">
              <div className="rowlabel">&nbsp;</div>
              <div className="feat-col">Startupkraker</div>
              <div>Zelf doen</div>
              <div>StartupBoost</div>
            </div>

            <div className="cmp-row">
              <div className="rowlabel">Maandprijs</div>
              <div className="feat-col"><b>vanaf €99</b></div>
              <div className="muted">je eigen tijd</div>
              <div className="muted">€325 – €975</div>
            </div>

            <div className="cmp-row">
              <div className="rowlabel">Boekhouding &amp; BTW</div>
              <div className="feat-col"><span className="ck">✓</span> inbegrepen</div>
              <div className="muted">zelf of los inhuren</div>
              <div><span className="ck">✓</span> inbegrepen</div>
            </div>

            <div className="cmp-row">
              <div className="rowlabel">Juridisch &amp; contracten</div>
              <div className="feat-col"><span className="ck">✓</span> inbegrepen</div>
              <div className="muted">los, €150+/uur</div>
              <div className="muted">beperkt</div>
            </div>

            <div className="cmp-row">
              <div className="rowlabel">Salarisadministratie</div>
              <div className="feat-col"><span className="ck">✓</span> vanaf Starter BV</div>
              <div className="muted">apart pakket</div>
              <div><span className="ck">✓</span> inbegrepen</div>
            </div>

            <div className="cmp-row">
              <div className="rowlabel">Website-onderhoud</div>
              <div className="feat-col"><span className="ck">✓</span> inbegrepen</div>
              <div className="muted">zelf of bureau</div>
              <div className="no">✕ niet beschikbaar</div>
            </div>

            <div className="cmp-row">
              <div className="rowlabel">Eén vast aanspreekpunt</div>
              <div className="feat-col"><span className="ck">✓</span> altijd</div>
              <div className="no">—</div>
              <div className="muted">wisselend</div>
            </div>

            <div className="cmp-row">
              <div className="rowlabel">Opzegtermijn</div>
              <div className="feat-col"><b>maandelijks</b></div>
              <div className="no">—</div>
              <div className="muted">jaarcontract</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================
   FAQ
   ================================================================ */
const FAQ_ITEMS = [
  {
    q: "Kan ik echt maandelijks opzeggen?",
    a: "Ja. Geen jaarcontract, geen opzegboete. Zeg je op, dan loopt je maand gewoon af en krijg je je hele administratie netjes overgedragen.",
  },
  {
    q: "Wat als ik al een boekhouder heb?",
    a: "Dan nemen we het soepel over, of we werken samen tot de overdracht rond is. Jij merkt er onderweg niets van.",
  },
  {
    q: "Zijn er verborgen kosten?",
    a: "Nee. De maandprijs is precies wat je betaalt. Werk dat buiten je pakket valt stemmen we vooraf met je af — nooit achteraf op de factuur.",
  },
  {
    q: "Voor wie is dit bedoeld?",
    a: "ZZP'ers en kleine BV's tot ongeveer tien medewerkers. Net gestart of al een paar jaar bezig: zolang administratie je tijd opslokt, passen wij.",
  },
  {
    q: "Hoe snel ben ik gestart?",
    a: "Binnen tien minuten aangemeld. De koppelingen en machtigingen regelen wij meestal binnen twee werkdagen.",
  },
]

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="sk-section tone-light" data-role="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="idx">05</span> Veelgestelde vragen
          </span>
          <h2 className="display">Eerlijk antwoord, geen kleine lettertjes.</h2>
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
   CTA BAND
   ================================================================ */
function CTABand() {
  return (
    <section className="sk-cta tone-dark" id="contact" data-role="cta">
      <div className="cta-orb" />
      <div className="wrap">
        <Reveal>
          <span className="eyebrow" style={{ marginBottom: 28, display: "inline-flex" }}>
            <span className="tick" /> Klaar voor de start
          </span>
        </Reveal>
        <Reveal>
          <h2 className="display">Klaar om te stoppen met administreren?</h2>
        </Reveal>
        <Reveal>
          <p>
            Start vandaag. In tien minuten geregeld, maandelijks opzegbaar — wij
            doen de rest.
          </p>
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 8 }}>
            <a href="#pakketten" className="btn btn-primary">
              Start nu <span className="arw">→</span>
            </a>
            <a href="#pakketten" className="btn btn-outline">
              Bekijk pakketten
            </a>
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
        <div className="foot-top">
          <div className="foot-brand">
            <a href="#" className="logo">
              startupkraker<span className="star">✳</span>
            </a>
            <p>Stop met administreren. Begin met ondernemen.</p>
          </div>

          <div className="foot-col">
            <h4>Product</h4>
            <a href="#hoe">Hoe het werkt</a>
            <a href="#pakketten">Pakketten</a>
            <a href="#vergelijking">Vergelijking</a>
          </div>

          <div className="foot-col">
            <h4>Bedrijf</h4>
            <a href="#">Over ons</a>
            <a href="#contact">Contact</a>
            <a href="#">Vacatures</a>
          </div>

          <div className="foot-col">
            <h4>Juridisch</h4>
            <a href="#">Voorwaarden</a>
            <a href="#">Privacy</a>
            <a href="#">KvK 87654321</a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Startupkraker B.V.</span>
          <span>Gemaakt in Amsterdam</span>
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
        <Problem />
        <HowItWorks />
        <Pakketten />
        <Vergelijking />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
