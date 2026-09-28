import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanle.dev"),
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
    url: "https://nathanle.dev",
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
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
