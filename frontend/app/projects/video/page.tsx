"use client";

import ProjectDetailsClient, {
  GalleryItem,
  TechStackCategory,
  Contribution,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/waterfall.webp";

// Gallery items
const galleryItems: GalleryItem[] = [
  { type: "video", src: "/videos/video4.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video2.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video5.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video1.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video3.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video6.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video7.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video8.webm", aspect: "9-16", fit: "contain" },
  { type: "video", src: "/videos/video9.webm", aspect: "9-16", fit: "contain" },
];

// Image fit configuration
const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: ["contain", "contain", "contain", "contain", "contain", "contain", "contain", "contain", "contain"] as ("contain" | "cover" | "fill")[],
};

// About section
const aboutText = `Videography allows me to combine storytelling, visuals, and sound into immersive experiences. My work includes short-form social media content, cinematic reels, event highlights, and creative projects. I aim to capture not just motion, but mood and emotion, blending technical precision with creative direction to produce engaging, polished videos.`;

// Tech Stack / Tools
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

// Contributions
const contributions: Contribution[] = [
  {
    heading: "1. Creative Direction",
    items: [
      "Conceptualize video ideas tailored to mood, story, or platform.",
      "Plan shoots with attention to composition, lighting, and motion.",
    ],
  },
  {
    heading: "2. Filming & Editing",
    items: [
      "Capture cinematic footage using handheld, drone, and stabilized gear.",
      "Edit videos with transitions, motion graphics, and sound design.",
    ],
  },
  {
    heading: "3. Storytelling & Presentation",
    items: [
      "Craft narrative-driven edits that guide viewers through a story.",
      "Adapt content for diverse formats — from Instagram reels to full-length showcases.",
    ],
  },
  {
    heading: "4. Collaboration & Experimentation",
    items: [
      "Work with clients, models, and brands to bring video projects to life.",
      "Experiment with slow motion, time-lapse, and creative editing techniques.",
    ],
  },
];

export default function VideographyPage() {
  return (
    <ProjectDetailsClient
      title="Videography Showcase"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      contributions={contributions}
      techStack={techStack}
      galleryCols={2} // You can adjust this, e.g., 2 columns for videos
    />
  );
}
