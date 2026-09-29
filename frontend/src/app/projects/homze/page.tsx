"use client";

import ProjectDetailsClient, { TechStackCategory } from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/homze_logo.webp";

const aboutText = `Homze is an interior-trades home-improvement company that runs its entire sales pipeline through Salesforce: flooring, painting, roofing, siding. I joined as one of two developers and owned the interior-trades side of that pipeline. The biggest project was replacing a third-party project management tool with a Salesforce-native system I designed and built myself, covering everything from a signed estimate to the final contractor invoice. I also built a guest-facing Experience Cloud portal so clients can check on a job without calling in, and I contributed to an internal Python compiler that handles pricing across all 8 of the company's trade modules.`;

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
