"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  GalleryItem,
} from "../../components/ProjectDetailsClient";

// Main project image
const projectMainImage = "/images/harrypotter_castle.webp";

// About text
const aboutText = `Photography is the side project where I don't have a client brief or a deadline, just time to work on composition, light, and color. This set covers travel and architecture shots from trips through Japan, a product shoot for my own brand, and a live event. I edited each set to keep consistent color and exposure even though the subjects are pretty different. Shot mostly on a Fuji X100T and iPhone, edited in Lightroom.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Cameras",
    items: ["Fuji Film X100T", "Insta360 Ace Pro 2", "iPhone 15 Pro Max"],
  },
  {
    heading: "Editing Software",
    items: ["Lightroom", "Adobe Photoshop"],
  },
];

const highlights = [
  "Travel, architecture, and macro photography from trips through Japan",
  "Product photography for my own brand, Menacity Clothing",
  "Full shoot-to-edit workflow: composition and lighting on-site, color grading in Lightroom",
  "Curated collections for narrative flow and consistent tone within each set",
];

// Gallery items (curated to the strongest 7 of 18)
const galleryItems: GalleryItem[] = [
  { type: "image", src: "/images/photo1.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo7.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo9.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo11.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo14.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo16.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo18.webp", aspect: "9-16", fit: "cover" },
];

// Image fit configuration
const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: galleryItems.map(() => "cover" as const),
};

export default function PhotographyShowcasePage() {
  return (
    <ProjectDetailsClient
      title="Photography Showcase"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      highlights={highlights}
      techStack={techStack}
      galleryCols={3}
    />
  );
}
