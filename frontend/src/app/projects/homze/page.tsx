"use client";

import ProjectDetailsClient, { TechStackCategory } from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/homze_logo.webp";

const aboutText = `Homze is an interior-trades home-improvement company (flooring, painting, roofing, siding) that runs its entire sales-to-completion pipeline through Salesforce. I joined as one of two developers and owned the interior-trades half of that pipeline end to end — from the estimate a customer sees first, through the paperwork that gets a crew scheduled, to the invoice that closes out a job. The most substantial piece of that work was replacing a third-party project management tool with a Salesforce-native system I designed and built myself. I also built a guest-accessible Experience Cloud portal so clients can watch a job move from estimate to invoice to receipt without calling in, and contributed core features to an internal Python compiler that powers pricing logic across all 8 of the company's trade modules.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Salesforce",
    items: [
      "Apex",
      "Lightning Web Components (LWC)",
      "SOQL",
      "Salesforce Flow",
      "Experience Cloud",
      "Salesforce DX",
    ],
  },
  {
    heading: "Other",
    items: ["Python"],
  },
];

const highlights = [
  "Designed 3 custom Salesforce objects and Apex services used company-wide",
  "Replaced a 3rd-party PM tool with a Salesforce-native system, estimate to invoicing",
  "Built a guest-accessible Experience Cloud portal with automated branded PDF receipts",
  "Rebuilt project-margin analytics as a role-based widget, replacing a manual spreadsheet",
  "Contributed to an internal Python pricing compiler; authored the Flooring module end to end",
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
      highlights={highlights}
      techStack={techStack}
      galleryCols={0}
    />
  );
}
