"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
} from "../../components/ProjectDetailsClient";
import ContactFormWrapper from "../../components/ContactFormWrapper";

const projectMainImage = "/images/portfolio_cover.webp";

// About text
const aboutText = `This cyberpunk-themed personal portfolio website was designed and developed to showcase my technical projects, design work, and creative background. Built with a focus on high visual impact and user-friendly navigation, it blends modern frontend technologies with animated interactions for a memorable browsing experience. The design embraces neon-inspired colors, special text effects, and smooth transitions while maintaining fast load times and a responsive layout. Beyond its visual style, the site is structured for scalability, allowing new projects and content to be added without redesigning the core architecture.`;

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
      "Cyberpunk-inspired color palette with neon cyan and magenta highlights.",
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
      "Deployed to Vercel with automated builds on GitHub commits.",
      "Custom domain integration with HTTPS by default.",
      "Preview deployments for testing design changes before production release.",
      "Optimized build process using Next.js static exports for faster hosting response times.",
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
