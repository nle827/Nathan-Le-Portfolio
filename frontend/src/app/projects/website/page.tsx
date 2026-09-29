"use client";

import ProjectDetailsClient, { TechStackCategory } from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/portfolio_cover.webp";

// About text
const aboutText = `This site is itself a case study — I've rebuilt it several times now, and each pass says as much about how I work as any other project here. The first pass fixed what was actually broken: a live database credential committed to git history, roughly 300MB of uncompressed images and video, and no SEO metadata because the root layout was a client component. The passes after that were design resets once the plumbing was sound — moving from a neon "cyberpunk" theme to a flat monochrome look, then to the glass-panel, olive-accent design you're looking at now, removing sound effects and merging separate About/Projects/Contact pages into one continuous scroll. The most recent pass merged personal projects and real work experience into a single "Work" section, since a hiring manager cares more about what I've actually done than which bucket it falls into.`;

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
