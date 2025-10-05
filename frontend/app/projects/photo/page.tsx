"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
  GalleryItem,
} from "../../components/ProjectDetailsClient";

// Main project image
const projectMainImage = "/images/harrypotter_castle.webp";

// About text
const aboutText = `Photography has always been a way for me to capture stories, memories, and perspectives 
that words can’t fully express. My work spans portraits, landscapes, and lifestyle photography, with an emphasis on creating
visually striking images that balance mood, composition, and color. I enjoy blending technical precision with creative 
freedom, whether I’m shooting in natural light or crafting a look in post-production.`;

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
      "Developed unique concepts for shoots, from urban exploration to stylized portraits.",
      "Planned and stage compositions that highlight subject matter and environment.",
    ],
  },
  {
    heading: "2. Photography & Editing",
    items: [
      "Captured high-resolution images with attention to lighting, framing, and detail.",
      "Enhanced and refine photos using Lightroom presets and custom edits.",
    ],
  },
  {
    heading: "3. Storytelling & Presentation",
    items: [
      "Curated collections that emphasize narrative flow, mood, and style consistency.",
      "Optimized photography for diverse formats, including Instagram content and high-quality website displays.",
    ],
  },
  {
    heading: "4. Collaboration & Experimentation",
    items: [
      "Worked with models and creatives to bring shared visions to life.",
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
  mainImageFit: "cover" as const,
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
