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
const aboutText = `Video adds a time dimension to the same instincts I use in photography — pacing, sound, and motion on top of composition and light. This reel is a mix of short-form social content, event highlights, and small creative experiments, shot on an Insta360 Ace Pro 2 and iPhone and cut in Premiere Pro and CapCut. The throughline across all of it is trying to make a clip feel intentional in the first two seconds, since that's realistically all the attention a short-form video gets before someone decides whether to keep watching.`;

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
