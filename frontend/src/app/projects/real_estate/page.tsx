"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
  GalleryItem,
} from "../../components/ProjectDetailsClient";
// Main project image
const projectMainImage = "/images/dlr_logo.webp";

// About text
const aboutText = `Danny Le Realty needed marketing that looked as sharp as the properties it was selling, in a market where most competing agents run nearly identical ad campaigns. I took on brand and digital marketing end-to-end — designing listing graphics and brochures, shooting and editing property video content, and running targeted Facebook and Instagram ad campaigns aimed at active buyers and sellers. Alongside the creative work, I handled the less visible operational side: CRM data entry and campaign workflow maintenance to keep lead management running smoothly, and cross-functional support for event planning, digital asset creation, and client follow-up. I also cleaned up the WordPress listing pages and tightened visual consistency across the site, social channels, and print materials, then used Google Analytics and platform-level insights to see which content and ad creative were actually driving engagement so I could redirect effort toward what worked instead of spreading it evenly across everything.`;

// Tech stack
const techStack: TechStackCategory[] = [
  {
    heading: "Design & Creative",
    items: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Capcut"],
  },
  {
    heading: "Marketing Tools",
    items: ["Facebook Business Suite", "Meta Ads", "Instagram Insights", "Google Analytics", "Mailchimp"],
  },
  {
    heading: "Project Management",
    items: ["Google Docs Editor Suite", "Notion", "Slack", "Google Workspace"],
  },
];

// Contributions / Technical Overview
const contributions: Contribution[] = [
  {
    heading: "1. Brand Identity & Design",
    items: [
      "Created cohesive visual assets for property listings, brochures, and promotional campaigns.",
      "Maintained consistent color palettes, typography, and brand tone across all media.",
      "Developed custom marketing materials, including flyers, social media posts, and listing graphics, using Canva and Adobe Photoshop.",
    ],
  },
  {
    heading: "2. Digital Marketing Campaigns",
    items: [
      "Designed and executed targeted Facebook and Instagram ad campaigns to reach potential buyers and sellers.",
      "Optimized ad creatives based on engagement metrics and audience insights.",
      "Optimized social media campaigns across Facebook, Instagram, and LinkedIn to increase listing visibility and audience engagement.",
    ],
  },
  {
    heading: "3. Web & Content Optimization",
    items: [
      "Updated and maintained property listings on the company’s WordPress site for accuracy and visual appeal.",
      "Applied basic HTML/CSS tweaks for better image alignment and responsive design.",
      "Implemented consistent brand styling across digital and print channels to enhance client trust and recognition.",
    ],
  },
  {
    heading: "4. Social Media Growth",
    items: [
      "Scheduled regular content to maintain consistent engagement with followers.",
      "Tracked analytics to identify high-performing content and adjust posting strategy.",
      "Contributed to lead generation strategies by combining visually compelling content with targeted online distribution.",
    ],
  },
  {
    heading: "5. Data-Driven Insights",
    items: [
      "Monitored ad performance and website traffic to inform future campaign strategies.",
      "Used Google Analytics and platform-specific metrics to refine targeting approaches.",
    ],
  },
  {
    heading: "6. Cross-Team Collaboration",
    items: [
      "Worked closely with real estate agents to ensure marketing materials aligned with client needs.",
      "Coordinated photography, videography, and marketing for property showcases.",
      "Streamlined internal workflow using Google Workspace tools for faster updates and improved collaboration.",
      "Led the onboarding and training process for new hires to ensure smooth integration and alignment with goals.",
    ],
  },
  {
    heading: "7. Administrative & CRM Support",
    items: [
      "Supported CRM data entry and campaign workflow maintenance to ensure lead management efficiency.",
      "Provided cross-functional administrative support for event planning, digital asset creation, and client follow-up.",
    ],
  },
];

// Gallery items
const galleryItems: GalleryItem[] = [
  { type: "video", src: "/videos/Topanga.webm", aspect: "9-16", fit: "cover" },
  { type: "video", src: "/videos/Update.webm", aspect: "9-16", fit: "cover" },
  { type: "video", src: "/videos/Review.webm", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/dlr_page1.webp", aspect: "9-16", fit: "contain" },
  { type: "image", src: "/images/dlr_page2.webp", aspect: "9-16", fit: "contain" },
  { type: "image", src: "/images/dlr_page3.webp", aspect: "9-16", fit: "contain" },
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
      contributions={contributions}
      techStack={techStack}
      galleryCols={3}
      url="https://www.dannylerealty.com/"
    />
  );
}
