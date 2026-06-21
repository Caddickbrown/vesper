import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Vesper — Web tools, built in 48 hours",
  description: "Custom web tools and applications built and shipped in 48 hours. No agencies, no sprints, no drag. Flat pricing: £299 page, £999 tool, £249/mo retainer.",
  metadataBase: new URL("https://buildwithvesper.com"),
  openGraph: {
    title: "Vesper — Web tools, built in 48 hours",
    description: "Custom web tools and applications built and shipped in 48 hours. Flat pricing, no agencies.",
    url: "https://buildwithvesper.com",
    siteName: "Vesper",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesper — Web tools, built in 48 hours",
    description: "Custom web tools and applications built and shipped in 48 hours. Flat pricing, no agencies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://buildwithvesper.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-[#090909] text-white antialiased">{children}</body>
    </html>
  );
}
