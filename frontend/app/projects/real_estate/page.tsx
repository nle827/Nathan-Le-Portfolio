"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
  GalleryItem,
} from "../../components/ProjectDetailsClient";
// Main project image
const projectMainImage = "/images/dlr_logo.webp";

// About text
const aboutText = `During my time as a Marketing Specialist for Danny Le Realty, I developed and executed targeted digital marketing campaigns
to boost brand visibility and client engagement in a competitive real estate market. My work included designing promotional 
materials, managing social media presence, and optimizing online content to highlight property listings and client success 
stories. By combining strategic marketing insights with polished visual design, I contributed to increased lead generation
and stronger brand recognition.`;

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
  mainImageFit: "contain" as const,
  galleryFits: ["contain"] as ("contain" | "cover" | "fill")[],
};

export default function DannyLeRealtyPage() {
  return (
    <ProjectDetailsClient
      title="Danny Le Realty"
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
