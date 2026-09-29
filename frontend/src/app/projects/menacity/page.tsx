"use client";

import ProjectDetailsClient, { GalleryItem } from "../../components/ProjectDetailsClient";

// Main project image
const projectMainImage = "/images/menacity_logo.webp";

// About text
const aboutText = `I founded Menacity Clothing in 2023 as an independent streetwear brand and ran every part of it myself: brand identity, the Shopify storefront, manufacturing, marketing, fulfillment. In its first five months it did $62,000 in sales. Over its first two years it grew a community of more than 60,000 followers and drew over 150,000 site sessions. It's the clearest example I have of taking something from an idea to an actual, running business.`;

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
