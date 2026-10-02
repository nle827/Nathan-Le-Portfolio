"use client";

import ProjectDetailsClient, {
  GalleryItem,
  TechStackCategory,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/waterfall.webp";

// Gallery items
const galleryItems: GalleryItem[] = [
  { type: "video", src: "/videos/videography/motion.webm", aspect: "9-16", fit: "cover" },
  { type: "video", src: "/videos/videography/showroom.webm", aspect: "9-16", fit: "cover" },
  { type: "video", src: "/videos/videography/video5.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/videography/Review.webm", aspect: "9-16", fit: "cover" },
  { type: "video", src: "/videos/videography/Topanga.webm", aspect: "9-16", fit: "cover" },
];

const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: galleryItems.map(() => "cover" as const),
};

const aboutText = `Video builds on the same instincts as photography, just with pacing, sound, and motion added on top of composition and light. This reel mixes a fashion and motion studio shoot, a cinematic product reveal, and short-form brand and travel clips, shot on a DJI Osmo Pocket 3 and iPhone and cut in Premiere Pro and CapCut. My rule of thumb: a clip needs to feel intentional in the first two seconds, because that's about how long you get before someone decides whether to keep watching.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Cameras & Gear",
    items: ["DJI Osmo Pocket 3", "iPhone 15 Pro Max"],
  },
  {
    heading: "Editing Software",
    items: ["Adobe Premiere Pro", "CapCut"],
  },
];

const highlights = [
  "Fashion and motion studio shoot",
  "Cinematic product reveal",
  "Short-form brand and travel clips",
  "Shot on a DJI Osmo Pocket 3 and iPhone, edited in Premiere Pro and CapCut",
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
