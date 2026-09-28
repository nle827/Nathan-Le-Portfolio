import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nathan-le-portfolio.vercel.app"),
  title: {
    default: "Nathan Le — Software Developer",
    template: "%s | Nathan Le",
  },
  description:
    "Nathan Le is a software developer who builds and ships full products — engineering, brand, and visuals. Explore technical and creative projects.",
  openGraph: {
    title: "Nathan Le — Software Developer",
    description:
      "Software developer who builds and ships full products — engineering, brand, and visuals.",
    url: "https://nathan-le-portfolio.vercel.app",
    siteName: "Nathan Le",
    images: [{ url: "/images/headshot.webp", width: 1200, height: 1200 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Le — Software Developer",
    description:
      "Software developer who builds and ships full products — engineering, brand, and visuals.",
    images: ["/images/headshot.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="bg-blobs" aria-hidden="true" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
