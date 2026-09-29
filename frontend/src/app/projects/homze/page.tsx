"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/homze_logo.webp";

const aboutText = `Homze is an interior-trades home-improvement company (flooring, painting, roofing, siding) that runs its entire sales-to-completion pipeline through Salesforce. I joined as one of two developers and owned the interior-trades half of that pipeline end to end — from the estimate a customer sees first, through the paperwork that gets a crew scheduled, to the invoice that closes out a job. The most substantial piece of that work was replacing a third-party project management tool with a Salesforce-native system I designed and built myself, covering signed estimates through contractor invoicing for every job the company sells. I also built a guest-accessible Experience Cloud portal so clients can watch a job move from estimate to invoice to receipt without calling in, complete with a branded PDF receipt generator, and a role-based margin-analytics widget that replaced a manual spreadsheet process split across Accounting and PM visibility. Beyond the trade-specific work, I contributed core features to an internal Python compiler that powers pricing logic across all 8 of the company's trade modules, and authored the Flooring module for it end to end.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Salesforce",
    items: [
      "Apex",
      "Lightning Web Components (LWC)",
      "SOQL",
      "Salesforce Flow",
      "Experience Cloud",
      "Permission Sets",
      "Custom Metadata Types",
      "Salesforce DX",
    ],
  },
  {
    heading: "Other",
    items: ["Python"],
  },
];

const contributions: Contribution[] = [
  {
    heading: "1. Salesforce Architecture",
    items: [
      "Designed 3 custom Salesforce objects and Apex services now used for every interior-trade sale company-wide.",
      "Used Permission Sets and Custom Metadata Types to keep configuration data-driven instead of hardcoded.",
      "Built and deployed changes with Salesforce DX for a repeatable, source-controlled release process.",
    ],
  },
  {
    heading: "2. Project Management System",
    items: [
      "Replaced a third-party PM tool with a Salesforce-native system covering signed estimates through contractor invoicing.",
      "Designed the object model and Salesforce Flow automation driving job status through the full lifecycle.",
    ],
  },
  {
    heading: "3. Client Experience Cloud Portal",
    items: [
      "Built a guest-accessible portal so clients can track a job from estimate to invoice to receipt without calling in.",
      "Built a branded PDF receipt generator triggered automatically at job close-out.",
      "Designed the front-end UI/UX for both the client portal and internal PM interfaces to match the company's brand system.",
    ],
  },
  {
    heading: "4. Analytics & Reporting",
    items: [
      "Rebuilt the company's project-margin analytics tool as a role-based Salesforce widget (Accounting vs. PM visibility), replacing a manual spreadsheet process.",
    ],
  },
  {
    heading: "5. Pricing Engine (Python)",
    items: [
      "Contributed core features to an internal Python compiler powering pricing logic across all 8 of the company's trade modules.",
      "Authored the Flooring pricing module end to end.",
    ],
  },
];

const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: [] as ("contain" | "cover" | "fill")[],
};

export default function HomzePage() {
  return (
    <ProjectDetailsClient
      title="Homze"
      role="Salesforce Developer"
      dates="Aug 2025 – Aug 2026"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={[]}
      contributions={contributions}
      techStack={techStack}
      galleryCols={0}
    />
  );
}
