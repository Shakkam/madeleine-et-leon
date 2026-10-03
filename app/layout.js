import { Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";

/**
 * Fraunces — variable font with SOFT and WONK axes.
 * SOFT 0-100 (how round letterforms are) · WONK 0-1 (stylistic quirks).
 * Note: axes config requires --webpack in dev (Turbopack limitation).
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

/** Space Mono — for labels, tags, badges, and small UI text. */
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Madeleine & Léon — Madeleines artisanales à Bordeaux",
  description:
    "Madeleines artisanales & ultra moelleuses. Gamme sucrée Madeleine et gamme salée Léon. Retrouvez-nous sur les marchés bordelais.",
  openGraph: {
    title: "Madeleine & Léon — Madeleines artisanales à Bordeaux",
    description:
      "Madeleines artisanales & ultra moelleuses. Gamme sucrée Madeleine et gamme salée Léon. Retrouvez-nous sur les marchés bordelais.",
    locale: "fr_FR",
    type: "website",
    siteName: "Madeleine & Léon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madeleine & Léon — Madeleines artisanales à Bordeaux",
    description: "Artisanales & ultra moelleuses. Marchés bordelais.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${spaceMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
