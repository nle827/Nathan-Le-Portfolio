"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/portfolio_cover.webp";

// About text
const aboutText = `This site is itself a case study — I recently rebuilt it end to end, and the process says as much about how I work as any other project here. It started as a Next.js/Tailwind/Framer Motion site with a heavy neon cyberpunk theme, but auditing it surfaced real problems: a live database credential committed to git history, roughly 300MB of uncompressed images and video, no SEO metadata because the root layout was a client component, and a mandatory video/sound splash screen gating every visitor. I rewrote the git history to remove the exposed credential and years of accidentally-committed build tooling, re-encoded every image and video (cutting total asset weight to under 40MB with no visible quality loss), restored proper Next.js metadata for real link previews, removed the splash gate, and redesigned the visual language from neon-on-black to the white, minimal palette with cyan accents you're looking at now. Technically it's a small Next.js App Router site — the more interesting part was the audit-and-fix process: telling apart what was actually broken from what just looked unfinished, and fixing each differently.`;

// Tech stack
const techStack: TechStackCategory[] = [
  {
    heading: "Front-End",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    heading: "Backend",
    items: [],
  },
];

// Technical Overview
const contributions: Contribution[] = [
  {
    heading: "1. Architecture Highlights",
    items: [
      "Built with Next.js for hybrid static and server-side rendering, ensuring optimal performance and SEO.",
      "Component-based architecture in React for modular, reusable UI elements.",
      "Dynamic routing for project detail pages using Next.js App Router.",
      "Structured content management via a centralized project data configuration file.",
    ],
  },
  {
    heading: "2. UI/UX & Styling",
    items: [
      "White, minimal palette with cyan reserved for accents, buttons, and a dark header/footer as the signature cyberpunk touch.",
      "Custom typography and iconography for a distinct brand identity.",
      "Framer Motion animations for smooth section transitions and interactive hover states.",
      "Responsive Tailwind CSS utility classes to ensure consistent design across breakpoints.",
    ],
  },
  {
    heading: "3. Interactive Features",
    items: [
      "Global sound effects on button clicks using custom React hooks.",
      "Animated project cards with hover scaling and detail reveal effects.",
      "Gallery component with custom aspect ratio handling for consistent image framing.",
      "Smooth scroll navigation between sections with Framer Motion scroll animations.",
    ],
  },
  {
    heading: "4. Performance Optimizations",
    items: [
      "Leveraged Next.js image optimization to serve correctly sized images for each viewport.",
      "Lazy-loaded gallery sections to reduce initial page load time.",
      "Code splitting and route-level prefetching for snappy navigation.",
      "Minimal use of external scripts to keep JavaScript bundle sizes small.",
    ],
  },
  {
    heading: "5. Scalability & Maintainability",
    items: [
      "Project content stored in a structured data file for easy updates without code changes.",
      "Reusable UI components for cards, modals, and section layouts.",
      "Consistent design tokens for colors, spacing, and typography.",
      "Clear folder structure separating assets, components, pages, and utilities.",
    ],
  },
  {
    heading: "6. Deployment & Hosting",
    items: [
      "Source hosted on GitHub with a clean commit history after removing an accidentally-committed database credential.",
      "Built to deploy on Vercel with automatic builds from GitHub commits.",
      "Root layout runs as a server component so Vercel can prerender pages with real metadata instead of shipping an empty shell.",
    ],
  },
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
      contributions={contributions}
      techStack={techStack}
      galleryCols={0} // no gallery columns for this page
    />
  );
}
