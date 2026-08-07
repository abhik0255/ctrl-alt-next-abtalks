import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "ABTalks — 60-Day Build Challenge",
  description:
    "ABTalks 60-day public building challenge — redesign prototype (PS1). Build your portfolio, one day at a time.",
  keywords: ["abtalks", "60-day challenge", "build portfolio", "student developer"],
  authors: [{ name: "Ctrl Alt Next", url: "https://github.com/ctrl-alt-next" }],
  creator: "Ctrl Alt Next",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abtalks-demo.vercel.app",
    title: "ABTalks — 60-Day Build Challenge",
    description:
      "Build your portfolio, one day at a time. 60 days, 60 builds, one impressive public portfolio.",
    siteName: "ABTalks PS1",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABTalks — 60-Day Build Challenge",
    description:
      "Build your portfolio, one day at a time. Join the 60-day public building challenge.",
    creator: "@abtalks",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
