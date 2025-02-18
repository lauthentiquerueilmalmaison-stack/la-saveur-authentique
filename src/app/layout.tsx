import type { Metadata } from "next";
import { Forum, Arizonia } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ReactLenis } from "../utils/lenis";
const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-forum",
});
const arizonia = Arizonia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-arizonia",
});

export const metadata: Metadata = {
  title: "L'Authentique - Restaurant Gastronomique à Rueil-Malmaison",
  description:
    "Découvrez une cuisine française raffinée au restaurant L'Authentique à Rueil-Malmaison. Réservez votre table dès maintenant !",
  openGraph: {
    title: "L'Authentique - Gastronomie Française à Rueil-Malmaison",
    description: "Cuisine française authentique et raffinée en Île-de-France.",
    url: "https://www.lauthentique.com",
    siteName: "L'Authentique",
    // images: [
    //   {
    //     url: "https://www.lauthentique.com/images/restaurant.jpg",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Authentique - Restaurant Gastronomique",
    description: "Dégustez une cuisine française raffinée à Rueil-Malmaison.",
    // images: ["https://www.lauthentique.com/images/restaurant.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <ReactLenis root options={{ lerp: 0.1, anchors: true }}>
        <body
          className={`${forum.variable} ${arizonia.variable} overflow-x-hidden`}
        >
          <Header />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
