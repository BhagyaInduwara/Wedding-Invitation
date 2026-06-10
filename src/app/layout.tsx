import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Cinzel,
  Dancing_Script,
} from "next/font/google";
import "./globals.css";

// Use distinct CSS variable names so they don't clash with @theme definitions
const playfair = Playfair_Display({
  variable: "--nf-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--nf-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--nf-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--nf-dancing",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thisal & Vishmi — Wedding Invitation",
  description:
    "Together with our families, we joyfully invite you to join us as we celebrate our union on 29th October 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${dancingScript.variable}`}
    >
      <body className="antialiased min-h-screen overflow-x-hidden bg-[#1a0800]">
        {children}
      </body>
    </html>
  );
}
