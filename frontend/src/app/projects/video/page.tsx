"use client";

import ProjectDetailsClient, {
  GalleryItem,
  TechStackCategory,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/waterfall.webp";

// Gallery items (curated to the strongest 5 of 9)
const galleryItems: GalleryItem[] = [
  { type: "video", src: "/videos/video1.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video5.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video6.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video7.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video9.webm", aspect: "9-16", fit: "contain" },
];

const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: galleryItems.map(() => "contain" as const),
};

const aboutText = `Video adds a time dimension to the same instincts I use in photography — pacing, sound, and motion on top of composition and light. This reel is a mix of brand video for Menacity Clothing and short-form cinematic b-roll, shot on an Insta360 Ace Pro 2 and iPhone and cut in Premiere Pro and CapCut. The throughline is trying to make a clip feel intentional in the first two seconds, since that's realistically all the attention a short-form video gets before someone decides whether to keep watching.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Cameras & Gear",
    items: ["Insta360 Ace Pro 2", "iPhone 15 Pro Max"],
  },
  {
    heading: "Editing Software",
    items: ["Adobe Premiere Pro", "CapCut"],
  },
];

const highlights = [
  "Brand video production for Menacity Clothing",
  "Short-form cinematic b-roll and social content",
  "Shot on Insta360 Ace Pro 2 and iPhone 15 Pro Max",
  "Edited in Premiere Pro and CapCut with an eye for pacing and sound",
];

export default function VideographyPage() {
  return (
    <ProjectDetailsClient
      title="Videography Showcase"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      highlights={highlights}
      techStack={techStack}
      galleryCols={2}
    />
  );
}
