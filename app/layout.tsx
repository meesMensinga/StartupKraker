import type { Metadata } from "next"
import { Space_Grotesk, Hanken_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
})

export const metadata: Metadata = {
  title: "Startupkraker — Startup ontzorging vanaf €99/mnd",
  description:
    "Boekhouding, juridisch, salarisadmin en website in één pakket. Voor ZZP'ers en kleine BV's. Transparante prijs, maandelijks opzegbaar.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${spaceGrotesk.variable} ${hankenGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
