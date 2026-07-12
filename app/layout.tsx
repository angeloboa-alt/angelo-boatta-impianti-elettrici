import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Angelo Boatta Impianti Elettrici",
    template: "%s | Angelo Boatta Impianti Elettrici",
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
    "Angelo Boatta Impianti Elettrici",
  ],
  authors: [{ name: "Angelo Boatta Impianti Elettrici" }],
  creator: "Angelo Boatta Impianti Elettrici",
  publisher: "Angelo Boatta Impianti Elettrici",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Angelo Boatta Impianti Elettrici",
    title: "Angelo Boatta Impianti Elettrici",
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