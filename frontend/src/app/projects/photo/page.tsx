"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
  GalleryItem,
} from "../../components/ProjectDetailsClient";

// Main project image
const projectMainImage = "/images/harrypotter_castle.webp";

// About text
const aboutText = `Photography is where I work purely on the creative side — no client brief, no deadline, just building an eye for light, composition, and mood. This collection spans portraits, landscapes, and street and lifestyle shots, shot mostly on a Fuji X100T and edited in Lightroom to keep a consistent, moody color tone across a set rather than editing each photo in isolation. It's the same instinct I bring to brand and marketing work — thinking in terms of a cohesive visual identity — just applied without a business objective attached.`;

// Tools / Tech Stack
const techStack: TechStackCategory[] = [
  {
    heading: "Cameras",
    items: ["Fuji Film X100T", "Insta360 Ace Pro 2", "Iphone 15 Pro Max"],
  },
  {
    heading: "Editing Software",
    items: ["Lightroom", "Adobe Photoshop", "Canva"],
  },
];

// Contributions
const contributions: Contribution[] = [
  {
    heading: "1. Creative Direction",
    items: [
      "Develop unique concepts for shoots, from urban exploration to stylized portraits.",
      "Plan and stage compositions that highlight subject matter and environment.",
    ],
  },
  {
    heading: "2. Photography & Editing",
    items: [
      "Capture high-resolution images with attention to lighting, framing, and detail.",
      "Enhance and refine photos using Lightroom presets and custom edits.",
    ],
  },
  {
    heading: "3. Storytelling & Presentation",
    items: [
      "Curate collections that emphasize narrative flow, mood, and style consistency.",
      "Optimize photography for diverse formats, including Instagram content and high-quality website displays.",
    ],
  },
  {
    heading: "4. Collaboration & Experimentation",
    items: [
      "Work with models and creatives to bring shared visions to life.",
    ],
  },
];

// Gallery items
const galleryItems: GalleryItem[] = [
  { type: "image", src: "/images/photo1.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo2.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo3.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo4.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo5.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo6.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo7.webp", aspect: "9-16", fit: "contain" },
  { type: "image", src: "/images/photo8.webp", aspect: "9-16", fit: "contain" },
  { type: "image", src: "/images/photo9.webp", aspect: "9-16", fit: "contain" },
  { type: "image", src: "/images/photo10.webp", aspect: "9-16", fit: "contain" },
  { type: "image", src: "/images/photo11.webp", aspect: "9-16", fit: "contain" },
  { type: "image", src: "/images/photo12.webp", aspect: "9-16", fit: "contain" },
  { type: "image", src: "/images/photo13.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo14.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo15.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo16.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo17.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/photo18.webp", aspect: "9-16", fit: "cover" },
];

// Image fit configuration
const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: ["contain","cover","fill"] as ("contain" | "cover" | "fill")[],
};

export default function PhotographyShowcasePage() {
  return (
    <ProjectDetailsClient
      title="Photography Showcase"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      contributions={contributions}
      techStack={techStack}
      galleryCols={3}
    />
  );
}
