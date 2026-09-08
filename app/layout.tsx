import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://angeloboattaimpianti.it"),
  title: {
    default: "A.B Impianti di Boatta Angelo",
    template: "%s | A.B Impianti di Boatta Angelo",
  },
  description:
    "Impianti elettrici civili e industriali, pronto intervento, ricerca guasti, manutenzione, domotica KNX e videosorveglianza a Mori, Rovereto e zone limitrofe.",
  keywords: [
    "elettricista Mori",
    "elettricista Rovereto",
    "pronto intervento elettrico",
    "ricerca guasti elettrici",
    "impianti elettrici civili",
    "impianti elettrici industriali",
    "manutenzione elettrica condomini",
    "domotica KNX",
    "videosorveglianza",
    "A.B Impianti di Boatta Angelo",
  ],
  authors: [{ name: "A.B Impianti di Boatta Angelo" }],
  creator: "A.B Impianti di Boatta Angelo",
  publisher: "A.B Impianti di Boatta Angelo",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "A.B Impianti di Boatta Angelo",
    title: "A.B Impianti di Boatta Angelo",
    description:
      "Impianti elettrici civili e industriali, pronto intervento, ricerca guasti, manutenzione, domotica KNX e videosorveglianza.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}