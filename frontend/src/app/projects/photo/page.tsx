"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  GalleryItem,
} from "../../components/ProjectDetailsClient";

// Main project image
const projectMainImage = "/images/photography/IMG_0285.webp";

// About text
const aboutText = `Photography is the side project where I don't have a client brief or a deadline, just time to work on composition, light, and color. This set spans architecture and street photography from Thailand and Vietnam, plus a studio portrait session shot entirely in silhouette. Shot on a Fujifilm XM5 and iPhone, edited in Lightroom.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Cameras",
    items: ["Fujifilm XM5", "iPhone 15 Pro Max"],
  },
  {
    heading: "Editing Software",
    items: ["Lightroom", "Adobe Photoshop"],
  },
];

const highlights = [
  "Architecture and street photography from Thailand and Vietnam",
  "Studio portrait session shot entirely in silhouette",
  "Full shoot-to-edit workflow: composition and lighting on-site, color grading in Lightroom",
  "Shot on a Fujifilm XM5",
];

// Gallery items (the studio portrait is the main image, these are the rest)
const galleryItems: GalleryItem[] = [
  { type: "image", src: "/images/photography/DSCF4165.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photography/DSCF4219.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photography/DSCF5101.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photography/DSCF5196.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photography/DSCF6187.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photography/DSCF7031.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photography/DSCF7567.webp", aspect: "9-16", fit: "cover" },
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
