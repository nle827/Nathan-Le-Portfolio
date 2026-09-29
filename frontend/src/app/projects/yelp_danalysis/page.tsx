"use client";

import ProjectDetailsClient, { TechStackCategory } from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/yelp_analysis_logo.webp";

const aboutText = `This project uses the Yelp Academic Dataset to check whether star ratings actually match what people say in their reviews. I built a PySpark pipeline to process millions of reviews, check-ins, and business records, then ran HuggingFace sentiment models over the review text and compared the results against each business's star rating to find the biggest mismatches. Results are cached in MongoDB and served through a Flask API to a React dashboard, filterable by city, category, and rating. Most of the actual engineering time went into making Spark fast at that scale: tuning partition sizes, cutting unnecessary shuffles, and reusing cached DataFrames instead of recomputing the same thing on every query.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Front-End",
    items: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    heading: "Backend",
    items: ["Python", "PySpark", "Flask", "MongoDB", "HuggingFace Transformers"],
  },
];

const highlights = [
  "PySpark pipeline processing millions of reviews, check-ins, and business records",
  "HuggingFace sentiment models compared against star ratings to surface mismatches",
  "Tuned Spark partitioning and caching to keep the pipeline fast at scale",
  "React dashboard filterable by city, category, and rating, backed by a Flask API",
  "Found a measurable divergence between star ratings and review sentiment in several markets",
];

const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: [] as ("contain" | "cover" | "fill")[],
};

export default function YelpAnalysisPage() {
  return (
    <ProjectDetailsClient
      title="Yelp Data Analysis"
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
