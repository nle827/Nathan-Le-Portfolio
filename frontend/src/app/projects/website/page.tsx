"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/portfolio_cover.webp";

// About text
const aboutText = `This site is itself a case study — I've rebuilt it twice now, and each pass says as much about how I work as any other project here. The first pass fixed what was actually broken: a live database credential committed to git history, roughly 300MB of uncompressed images and video, no SEO metadata because the root layout was a client component, and a mandatory video/sound splash screen gating every visitor. The second pass was a full design reset once the plumbing was sound — I stripped out every sound effect, dropped the custom display fonts for a single clean sans-serif, cut the color palette down to near-monochrome with no leftover "cyberpunk" accent, and rebuilt the page as a single continuous scroll (About, Skills, and Education right after the hero, then Projects, then Contact) instead of four separate routes. Technically it's a small Next.js App Router site — the more interesting part was learning to tell "still needs work" apart from "actually done," and being willing to redo a whole visual pass once I was tired of the first one.`;

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
      "Near-monochrome palette (white, slate, near-black) with no accent color competing for attention.",
      "Single sans-serif type family (Inter) for both headings and body text, replacing two custom display fonts.",
      "Framer Motion animations for smooth section transitions and interactive hover states.",
      "Responsive Tailwind CSS utility classes to ensure consistent design across breakpoints.",
    ],
  },
  {
    heading: "3. Interactive Features",
    items: [
      "One continuous scrolling page (About/Skills/Education, then Projects, then Contact) with anchor-link navigation instead of four separate routes.",
      "No sound effects anywhere on the site — removed entirely as part of the redesign.",
      "Gallery component with custom aspect ratio handling for consistent image framing.",
      "Reveal animations run on mount rather than on scroll-into-view, so content is never left invisible if a browser's intersection observer never fires.",
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
      "Deployed on Vercel with automatic production builds triggered on every push to main.",
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
