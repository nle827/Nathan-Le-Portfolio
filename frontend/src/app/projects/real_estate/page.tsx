"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  GalleryItem,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/dlr_logo.webp";

const aboutText = `Danny Le Realty needed marketing that looked as sharp as the properties it was selling, in a market where most competing agents run nearly identical ad campaigns. I took on brand and digital marketing end-to-end — designing listing graphics and brochures, shooting and editing property video content, and running targeted Facebook and Instagram ad campaigns aimed at active buyers and sellers. Alongside the creative work, I handled the less visible operational side: CRM data entry, campaign workflow maintenance, and cross-functional support for event planning and client follow-up.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Design & Creative",
    items: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "CapCut"],
  },
  {
    heading: "Marketing Tools",
    items: ["Meta Ads", "Google Analytics", "Mailchimp"],
  },
];

const highlights = [
  "Designed all brand and listing creative: flyers, brochures, and social graphics",
  "Ran targeted Facebook/Instagram ad campaigns for active buyers and sellers",
  "Used Google Analytics and platform insights to redirect budget toward what worked",
  "Maintained WordPress listings and visual consistency across web, social, and print",
  "Supported CRM data entry, event planning, and client follow-up",
];

// Gallery items
const galleryItems: GalleryItem[] = [
  { type: "video", src: "/videos/Topanga.webm", aspect: "9-16", fit: "cover" },
  { type: "video", src: "/videos/Update.webm", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/dlr_page1.webp", aspect: "9-16", fit: "contain" },
];

const imageFitConfig = {
  mainImageFit: "cover" as const,
  galleryFits: ["contain"] as ("contain" | "cover" | "fill")[],
};

export default function DannyLeRealtyPage() {
  return (
    <ProjectDetailsClient
      title="Danny Le Realty"
      role="Marketing Specialist"
      dates="Sept 2022 – Aug 2023"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      highlights={highlights}
      techStack={techStack}
      galleryCols={3}
      url="https://www.dannylerealty.com/"
    />
  );
}
