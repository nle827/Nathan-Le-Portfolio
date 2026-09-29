"use client";

import ProjectDetailsClient, { GalleryItem } from "../../components/ProjectDetailsClient";

// Main project image
const projectMainImage = "/images/menacity_logo.webp";

// About text
const aboutText = `Menacity Clothing started as a question: could I take a streetwear brand from a blank page to real revenue entirely on my own — design, storefront, marketing, and fulfillment, all of it? As the sole creative and operational lead, I designed the brand identity, built the Shopify storefront, sourced manufacturing overseas, and ran the marketing across social and email. In its first five months it generated $62,000 in sales, and over its first two years grew a community of 60,000+ followers and drew 150,000+ site sessions. Menacity is the clearest proof I have that I can take an idea from concept to a real, revenue-generating product, not just the software behind one.`;

const highlights = [
  "$62,000 in sales within the first 5 months",
  "Grew a 60,000+ person community and 150,000+ site sessions over 2 years",
  "Designed the full brand identity: logo, garment graphics, and visual tone",
  "Built and optimized the Shopify storefront end to end",
  "Sourced and managed overseas manufacturing, from samples to bulk orders",
  "Ran email/social marketing and owned fulfillment, from packaging to customer support",
];

// Gallery images (curated to the strongest 6)
const galleryItems: GalleryItem[] = [
  { type: "image", src: "/images/menacity1n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity2n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity4n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity6n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity8n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity9n.webp", aspect: "9-16", fit: "cover" },
];

// Image fit configuration
const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: galleryItems.map(() => "cover" as const),
};

export default function MenacityPage() {
  return (
    <ProjectDetailsClient
      title="Menacity Clothing"
      role="Founder"
      dates="Aug 2023 – Dec 2025"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      highlights={highlights}
      galleryCols={3}
    />
  );
}
