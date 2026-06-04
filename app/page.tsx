"use client"

import { useState } from "react"
import {
  Clock,
  FileX,
  Globe,
  ChevronDown,
  CheckCircle,
  XCircle,
  ChevronUp,
  Minus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// ─── Navbar ────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-white text-lg">Startupkraker</span>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#hoe-het-werkt" className="hover:text-white transition-colors">
            Hoe het werkt
          </a>
          <a href="#pakketten" className="hover:text-white transition-colors">
            Pakketten
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>
        <a href="#pakketten">
          <Button size="sm">Start nu →</Button>
        </a>
      </div>
    </header>
  )
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
      <div className="dot-grid absolute inset-0 opacity-30" />
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <Badge variant="green">Nieuw: Starter BV pakket nu beschikbaar</Badge>

        <h1 className="text-5xl font-bold text-white max-w-3xl leading-tight">
          Stop met administreren. Begin met ondernemen.
        </h1>

        <p className="text-xl text-zinc-400 max-w-2xl">
          Startupkraker regelt je boekhouding, BTW-aangifte, juridische basis en
          website. Voor één vast bedrag per maand.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <a href="#pakketten">
            <Button size="lg">Bekijk pakketten →</Button>
          </a>
          <a href="#hoe-het-werkt">
            <Button size="lg" variant="outline">
              Hoe werkt het?
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center text-sm text-zinc-400 mt-2">
          <span>✓ Geen verborgen kosten</span>
          <span className="text-zinc-700">|</span>
          <span>✓ Maandelijks opzegbaar</span>
          <span className="text-zinc-700">|</span>
          <span>✓ In 10 min. gestart</span>
        </div>
      </div>
    </section>
  )
}

// ─── Social proof bar ───────────────────────────────────────────────────────

function SocialProof() {
  return (
    <div className="border-y border-zinc-800 bg-zinc-900/50 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
        <span>Vergelijk met de concurrentie:</span>
        <span className="font-medium">3× goedkoper dan StartupBoost</span>
        <span className="hidden sm:block text-zinc-700">·</span>
        <span className="font-medium">Transparante prijzen — geen verrassingen</span>
        <span className="hidden sm:block text-zinc-700">·</span>
        <span className="font-medium">Eén aanspreekpunt voor alles</span>
      </div>
    </div>
  )
}

// ─── Problem ────────────────────────────────────────────────────────────────

function Problem() {
  const cards = [
    {
      Icon: Clock,
      text: "Je verliest uren aan BTW-aangiftes die je niet begrijpt",
    },
    {
      Icon: FileX,
      text: "Je weet niet welke contracten je nodig hebt",
    },
    {
      Icon: Globe,
      text: "Je website staat al maanden 'bijna klaar'",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-zinc-500 uppercase tracking-widest text-center mb-10">
          Herken je dit?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(({ Icon, text }) => (
            <div
              key={text}
              className="bg-zinc-900 border-l-2 border-red-500 border border-zinc-800 p-6 flex gap-4 items-start"
            >
              <Icon className="text-red-400 mt-0.5 shrink-0" size={20} />
              <p className="text-zinc-300 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 text-zinc-400 text-sm">
          <ChevronDown className="text-green-500" size={24} />
          <span>Dat pakken wij van je over.</span>
        </div>
      </div>
    </section>
  )
}

// ─── How it works ───────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Kies je pakket",
      desc: "Online, in 2 minuten. Geen telefoongesprek vereist.",
    },
    {
      num: "02",
      title: "Wij koppelen je team",
      desc: "Boekhouder en jurist worden direct aan je gekoppeld.",
    },
    {
      num: "03",
      title: "Jij bouwt",
      desc: "Wij sturen maandelijks een update. Jij hoeft niets te doen.",
    },
  ]

  return (
    <section id="hoe-het-werkt" className="py-20 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          In drie stappen geregeld
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center px-8">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+2rem)] right-0 border-t border-dashed border-zinc-700" />
              )}
              <span className="text-4xl font-bold text-green-500 mb-4 relative z-10 bg-zinc-950 px-2">
                {step.num}
              </span>
              <h3 className="font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ────────────────────────────────────────────────────────────────

type Feature = { label: string; included: boolean }

interface PlanCardProps {
  name: string
  price: string
  target: string
  features: Feature[]
  featured?: boolean
  ctaLabel: string
  ctaHref: string
}

function PlanCard({ name, price, target, features, featured, ctaLabel, ctaHref }: PlanCardProps) {
  return (
    <div
      className={`relative flex flex-col bg-zinc-900 border p-6 ${
        featured ? "border-green-500" : "border-zinc-800"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="green">Meest gekozen</Badge>
        </div>
      )}
      <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{target}</p>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-3xl font-bold text-white mb-6">
        {price}
        <span className="text-base font-normal text-zinc-400">/mnd</span>
      </p>
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((f) => (
          <li key={f.label} className="flex items-start gap-2 text-sm">
            {f.included ? (
              <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
            ) : (
              <XCircle size={16} className="text-zinc-600 mt-0.5 shrink-0" />
            )}
            <span className={f.included ? "text-zinc-300" : "text-zinc-600"}>{f.label}</span>
          </li>
        ))}
      </ul>
      <a href={ctaHref}>
        <Button variant={featured ? "default" : "outline"} className="w-full">
          {ctaLabel}
        </Button>
      </a>
    </div>
  )
}

function Pricing() {
  const plans: PlanCardProps[] = [
    {
      name: "Solo",
      price: "€99",
      target: "Voor ZZP / eenmanszaak",
      ctaLabel: "Start als Solo →",
      ctaHref: "/checkout?plan=solo",
      features: [
        { label: "Boekhouding bijhouden", included: true },
        { label: "BTW-aangifte (per kwartaal)", included: true },
        { label: "IB-aangifte (jaarlijks)", included: true },
        { label: "Juridische standaardtemplates", included: true },
        { label: "KvK-ondersteuning", included: true },
        { label: "Salarisadministratie", included: false },
        { label: "Website onderhoud", included: false },
      ],
    },
    {
      name: "Starter BV",
      price: "€199",
      target: "Voor BV zonder personeel",
      ctaLabel: "Start als Starter BV →",
      ctaHref: "/checkout?plan=starter-bv",
      featured: true,
      features: [
        { label: "Alles in Solo", included: true },
        { label: "VPB-aangifte", included: true },
        { label: "Jaarrekening + KvK deponering", included: true },
        { label: "DGA-loon verwerking", included: true },
        { label: "Algemene voorwaarden", included: true },
        { label: "Website onderhoud (1 uur/mnd)", included: true },
      ],
    },
    {
      name: "Groei",
      price: "€349",
      target: "Voor BV met medewerkers",
      ctaLabel: "Start als Groei →",
      ctaHref: "/checkout?plan=groei",
      features: [
        { label: "Alles in Starter BV", included: true },
        { label: "Salarisadmin (tot 5 personen)", included: true },
        { label: "Arbeidscontracten", included: true },
        { label: "HR-advies basis", included: true },
        { label: "Website onderhoud (3 uur/mnd)", included: true },
        { label: "Kwartaalrapportage", included: true },
      ],
    },
  ]

  return (
    <section id="pakketten" className="py-20 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Kies je pakket</h2>
        <p className="text-zinc-400 text-center mb-12">
          Alles inbegrepen. Geen verborgen kosten. Maandelijks opzegbaar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
        <p className="text-center text-zinc-400 text-sm mt-8">
          Niet zeker welk pakket past?{" "}
          <a href="#contact" className="underline hover:text-white transition-colors">
            → Stuur ons een bericht
          </a>
        </p>
      </div>
    </section>
  )
}

// ─── Comparison table ───────────────────────────────────────────────────────

function Check() {
  return <CheckCircle size={18} className="text-green-500 mx-auto" />
}
function Cross() {
  return <XCircle size={18} className="text-red-500 mx-auto" />
}
function Dash() {
  return <Minus size={18} className="text-zinc-600 mx-auto" />
}

function Comparison() {
  const rows: { label: string; sk: string; self: string; sb: string }[] = [
    { label: "Prijs", sk: "Vanaf €99/mnd", self: '"Gratis"', sb: "Vanaf €325/mnd" },
    { label: "Boekhouding", sk: "check", self: "Zelf regelen", sb: "check" },
    { label: "Juridisch", sk: "check", self: "cross", sb: "check" },
    { label: "Website", sk: "check", self: "cross", sb: "cross" },
    { label: "Self-service onboarding", sk: "check", self: "dash", sb: "cross" },
    { label: "Transparante prijs", sk: "check", self: "dash", sb: "cross" },
  ]

  function Cell({ val }: { val: string }) {
    if (val === "check") return <Check />
    if (val === "cross") return <Cross />
    if (val === "dash") return <Dash />
    return <span className="text-zinc-400 text-sm">{val}</span>
  }

  return (
    <section className="py-20 px-6 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Waarom Startupkraker?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 text-zinc-500 font-normal border-b border-zinc-800" />
                <th className="py-3 px-4 font-semibold bg-green-500/10 text-green-400 border-b border-green-500/30 text-center">
                  Startupkraker
                </th>
                <th className="py-3 px-4 text-zinc-400 font-normal border-b border-zinc-800 text-center">
                  Zelf doen
                </th>
                <th className="py-3 px-4 text-zinc-400 font-normal border-b border-zinc-800 text-center">
                  StartupBoost
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-zinc-900/50" : ""}>
                  <td className="py-3 px-4 text-zinc-300">{row.label}</td>
                  <td className="py-3 px-4 text-center bg-green-500/5">
                    <Cell val={row.sk} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Cell val={row.self} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Cell val={row.sb} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Wat als mijn bedrijf groeit?",
    a: "Als je meer dan 10 medewerkers hebt of boven €500K omzet komt, zetten we je warm over naar een gecertificeerde accountant. Geen gedoe, wij regelen de overdracht.",
  },
  {
    q: "Wie doet mijn boekhouding eigenlijk?",
    a: "Wij werken met gecertificeerde boekhouders (NOAB/RB-geregistreerd). Je krijgt één vast aanspreekpunt, geen callcenter.",
  },
  {
    q: "Kan ik tussentijds opzeggen?",
    a: "Ja, maandelijks opzegbaar. Geen boetes, geen minimale looptijd, geen verborgen kosten.",
  },
  {
    q: "Is dit juridisch advies?",
    a: "Wij bieden standaard juridische documenten en templates. Voor complexe juridische vraagstukken verwijzen wij door naar een gespecialiseerde advocaat.",
  },
  {
    q: "Hoe verschilt dit van een gewone boekhouder?",
    a: "Een losse boekhouder kost al gauw €150-250/mnd en regelt alleen de cijfers. Wij combineren boekhouding + juridisch + website in één pakket voor minder geld.",
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 border-t border-zinc-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Veelgestelde vragen
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-800 bg-zinc-900">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-medium hover:bg-zinc-800/50 transition-colors"
              >
                <span>{faq.q}</span>
                {open === i ? (
                  <ChevronUp size={16} className="text-zinc-500 shrink-0 ml-4" />
                ) : (
                  <ChevronDown size={16} className="text-zinc-500 shrink-0 ml-4" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-zinc-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Banner ─────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="py-20 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-10 py-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-3">
            Klaar om te focussen op je product?
          </h2>
          <p className="text-zinc-400 mb-8 text-lg">Start vandaag. In 10 minuten geregeld.</p>
          <a href="#pakketten">
            <Button size="lg" className="px-8 text-base">
              Kies je pakket →
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-800 pt-14 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <span className="font-bold text-white text-lg block mb-2">Startupkraker</span>
            <p className="text-zinc-500 text-sm">Één factuur. Alles geregeld.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Product</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li>
                <a href="#pakketten" className="hover:text-white transition-colors">
                  Pakketten
                </a>
              </li>
              <li>
                <a href="#hoe-het-werkt" className="hover:text-white transition-colors">
                  Hoe het werkt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Bedrijf</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Juridisch</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Algemene voorwaarden
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 text-center text-zinc-600 text-sm">
          © 2026 Startupkraker · info@startupkraker.nl
        </div>
      </div>
    </footer>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Pricing />
      <Comparison />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
