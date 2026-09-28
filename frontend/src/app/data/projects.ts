const rawTechProjects = [
  {
    title: "Yelp Data Analysis",
    description:
      "A Yelp data analysis application using PySpark to detect review-rating mismatches, seasonal trends, user behavior, and top phrases.",
    highlights: [
      "PySpark pipeline processing millions of records",
      "NLP sentiment analysis with HuggingFace transformers",
      "React dashboard on a Flask API",
    ],
    image: "/images/yelp_analysis_logo.webp",
    link: "/projects/yelp_danalysis",
    fit: "contain" as const,
  },
  {
    title: "Talkify",
    description:
      "A real-time chat application built with TypeScript and React, replicating core Discord features.",
    highlights: [
      "Real-time messaging with Socket.io",
      "Full-stack TypeScript, React & Node.js",
      "JWT auth with bcrypt-hashed credentials",
    ],
    image: "/images/talkify.webp",
    link: "/projects/talkify",
    fit: "contain" as const,
  },
  {
    title: "Nathan's Portfolio Website",
    description:
      "A minimalist portfolio site built with Next.js, Tailwind, and Framer Motion — rebuilt twice, once to fix what was broken and once to redesign it.",
    highlights: [
      "Found & removed a leaked database credential",
      "Cut asset weight from ~300MB to under 40MB",
      "Rebuilt twice: fixed, then redesigned",
    ],
    image: "/images/portfolio_cover.webp",
    link: "/projects/website",
    fit: "cover" as const,
  },
  {
    title: "Reddit Data Search Engine",
    description:
      "A search engine for Reddit data using Python, Elasticsearch, and Flask, offering fast, ranked search with a simple user interface.",
    highlights: [
      "Elasticsearch-powered ranked search",
      "Parallelized Python crawler (PRAW + threads)",
      "BM25 relevance blended with recency decay",
    ],
    image: "/images/reddit_analysis_logo.webp",
    link: "/projects/reddit_analysis",
    fit: "contain" as const,
  },
];

const rawCreativeProjects = [
  {
    title: "Menacity Clothing",
    description:
      "Launched a streetwear brand overseeing everything from design to Shopify development.",
    highlights: [
      "$62,000 in sales within 5 months",
      "60,000+ person social community built",
      "Brand, storefront & manufacturing, solo",
    ],
    image: "/images/menacity_logo.webp",
    link: "/projects/menacity",
    fit: "contain" as const,
  },
  {
    title: "Real Estate Marketing",
    description:
      "Created branded marketing campaigns for a realtor using Adobe tools and digital strategy.",
    highlights: [
      "Ran targeted Facebook & Instagram ad campaigns",
      "Designed all brand and listing creative",
      "Data-driven creative optimization",
    ],
    image: "/images/dlr_logo.webp",
    link: "/projects/real_estate",
    fit: "contain" as const,
  },
  {
    title: "Photography Showcase",
    description:
      "Captured and edited lifestyle, product, and street visuals with a consistent, moody aesthetic.",
    highlights: [
      "Portrait, landscape & lifestyle work",
      "Full editing workflow in Lightroom",
      "Consistent visual tone across a set",
    ],
    image: "/images/harrypotter_castle.webp",
    link: "/projects/photo",
    fit: "cover" as const,
  },
  {
    title: "Videography Showcase",
    description:
      "Edited short-form videos with clean cuts, transitions, and music sync for brand and content projects.",
    highlights: [
      "Short-form social content & reels",
      "Shot on Insta360 Ace Pro 2 & iPhone",
      "Edited in Premiere Pro & CapCut",
    ],
    image: "/images/waterfall.webp",
    link: "/projects/video",
    fit: "cover" as const,
  },
];

export const techProjects = rawTechProjects.map((p) => ({ ...p, category: "Technical" as const }));
export const creativeProjects = rawCreativeProjects.map((p) => ({ ...p, category: "Creative" as const }));
