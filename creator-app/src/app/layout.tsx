import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CREATOR — Plataforma de Criadores",
  description: "Descubra e apoie criadores de conteúdo exclusivo. Lives interativas, mídia premium e uma comunidade vibrante.",
  keywords: ["creator", "conteúdo", "live", "streaming", "criadores", "marketplace"],
  manifest: "/manifest.json",
  openGraph: {
    title: "CREATOR — Plataforma de Criadores",
    description: "Descubra e apoie criadores de conteúdo exclusivo. Lives interativas, mídia premium e uma comunidade vibrante.",
    type: "website",
    locale: "pt_BR",
    siteName: "CREATOR",
  },
  twitter: {
    card: "summary_large_image",
    title: "CREATOR — Plataforma de Criadores",
    description: "Descubra e apoie criadores de conteúdo exclusivo.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased bg-dark-900 text-white flex flex-col items-center`}>
        <div className="w-full min-h-screen relative" style={{ maxWidth: '1024px' }}>
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
