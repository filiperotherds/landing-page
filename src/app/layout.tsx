import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-outfit",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Grupo AF - Clínicas de Reabilitação",
  description: "Clínicas de Reabilitação para Adictos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${dmSerifDisplay.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
