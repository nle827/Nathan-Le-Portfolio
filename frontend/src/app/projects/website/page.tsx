"use client";

import ProjectDetailsClient, { TechStackCategory } from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/portfolio_cover.webp";

// About text
const aboutText = `This site is its own case study. I've rebuilt it several times, and each version fixed something different. The first pass fixed what was actually broken: a database credential committed to git history, around 300MB of uncompressed images and video, and missing SEO metadata because the root layout was a client component. After that came a couple of design resets, first from a neon "cyberpunk" theme to a flat monochrome look, then to the glass-panel, olive-accent design you're looking at now. I also removed all the sound effects and merged what used to be separate About, Projects, and Contact pages into one scrolling page. The most recent change merged my personal projects and my actual work experience into a single Work section, since what matters to a hiring manager is what I've done, not which category it falls into.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Front-End",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
];

const highlights = [
  "Found & removed a leaked database credential from git history",
  "Cut asset weight from ~300MB to under 40MB with no visible quality loss",
  "Restored proper Next.js metadata after the root layout was blocking it",
  "One continuous scrolling page with anchor-link navigation, not four routes",
  "Deployed on Vercel with automatic builds on every push to main",
];

const imageFitConfig = {
  mainImageFit: "cover" as const,
  galleryFits: [] as ("contain" | "cover" | "fill")[],
};

export default function PortfolioPage() {
  return (
    <ProjectDetailsClient
      title="Portfolio Website"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={[]}
      highlights={highlights}
      techStack={techStack}
      galleryCols={0}
    />
  );
}
