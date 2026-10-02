import { ProjectProps } from "../components/ProjectCard";

export const workItems: ProjectProps[] = [
  // Experience, reverse-chronological
  {
    title: "Homze",
    role: "Salesforce Developer",
    dates: "Aug 2025 – Aug 2026",
    category: "Experience",
    highlights: [
      "Built a Salesforce-native PM system replacing a 3rd-party tool",
      "Designed 3 custom objects & Apex services used company-wide",
      "Built a client-facing Experience Cloud portal, estimate to receipt",
    ],
    image: "/images/homze_logo.webp",
    link: "/projects/homze",
    fit: "contain",
  },
  {
    title: "Los Angeles Clippers",
    role: "IT Team Member",
    dates: "Aug 2025 – Current",
    category: "Experience",
    highlights: [
      "Support venue tech across NBA games & events, near-zero downtime",
      "Network switch & Ethernet setup for scorer's table and arena systems",
      "Real-time troubleshooting during live broadcasts",
    ],
    image: "/images/clippers_logo.webp",
    fit: "contain",
  },
  {
    title: "Menacity Clothing",
    role: "Founder",
    dates: "Aug 2023 – Dec 2025",
    category: "Experience",
    highlights: [
      "$62,000 in sales within 5 months",
      "60,000+ person social community built",
      "Brand, storefront & manufacturing, solo",
    ],
    image: "/images/menacity_logo.webp",
    link: "/projects/menacity",
    fit: "contain",
  },
  {
    title: "Danny Le Realty",
    role: "Marketing Specialist",
    dates: "Sept 2022 – Aug 2023",
    category: "Experience",
    highlights: [
      "Ran targeted Facebook & Instagram ad campaigns",
      "Designed all brand and listing creative",
      "Supported CRM data entry & event planning",
    ],
    image: "/images/dlr_logo.webp",
    link: "/projects/real_estate",
    fit: "contain",
  },

  // Technical projects
  {
    title: "Talkify",
    category: "Technical",
    highlights: [
      "Real-time messaging with Socket.io",
      "Full-stack TypeScript, React & Node.js",
      "JWT auth with bcrypt-hashed credentials",
    ],
    image: "/images/talkify.webp",
    link: "/projects/talkify",
    fit: "contain",
  },
  {
    title: "Yelp Data Analysis",
    category: "Technical",
    highlights: [
      "PySpark pipeline processing millions of records",
      "NLP sentiment analysis with HuggingFace transformers",
      "React dashboard on a Flask API",
    ],
    image: "/images/yelp_analysis_logo.webp",
    link: "/projects/yelp_danalysis",
    fit: "contain",
  },
  {
    title: "Reddit Data Search Engine",
    category: "Technical",
    highlights: [
      "Elasticsearch-powered ranked search",
      "Parallelized Python crawler (PRAW + threads)",
      "BM25 relevance blended with recency decay",
    ],
    image: "/images/reddit_analysis_logo.webp",
    link: "/projects/reddit_analysis",
    fit: "contain",
  },

  // Creative projects
  // Photography Showcase and Videography Showcase temporarily removed
  // (2026-10-01) pending a content refresh. Pages still exist at
  // /projects/photo and /projects/video - re-add entries here when ready.
];
