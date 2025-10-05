"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
  GalleryItem,
} from "../../components/ProjectDetailsClient";
import ContactFormWrapper from "../../components/ContactFormWrapper";

const projectMainImage = "/images/yelp_analysis_logo.webp";

// About text
const aboutText = `Yelp Data Analysis is a large-scale data analytics project built to uncover trends 
and patterns from the Yelp Academic Dataset using distributed computing. The goal was to analyze user behavior,
business popularity, seasonal trends, and sentiment-based anomalies through both raw data and machine learning insights.

The project pipeline includes collecting raw JSON files, processing them with PySpark, storing results in MongoDB, 
and presenting findings via a web dashboard. The frontend interface allows users to explore trends by business type, 
geography, sentiment scores, and more, giving a deep look into consumer patterns across various U.S. regions.

Key Functionalities:
- Distributed processing of millions of reviews, check-ins, and business records
- NLP-based sentiment scoring to detect mismatches with user ratings
- Interactive, filterable web dashboards built with React and Flask
- Visual breakdown of geographic, seasonal, and demographic insights
- Modular architecture for easy expansion and isolated analytics

Yelp Data Analysis is a full-stack project combining Python-based data pipelines,
NoSQL storage, machine learning, and modern frontend development.`;

// Tech stack
const techStack: TechStackCategory[] = [
  {
    heading: "Front-End",
    items: ["React", "Tailwind CSS", "TypeScript", "Flask (API Layer)"],
  },
  {
    heading: "Backend",
    items: [
      "Python",
      "PySpark",
      "PyMongo",
      "MongoDB",
      "HuggingFace Transformers",
      "Docker",
      "Tailscale VPN",
    ],
  },
];

// Technical Overview
const contributions: Contribution[] = [
  {
    heading: "1. Architecture Highlights",
    items: [
      "Distributed Processing: Leveraged PySpark to efficiently handle large-scale Yelp datasets across multiple nodes.",
      "ETL Pipeline: Designed an end-to-end pipeline to extract, transform, and load business, review, and check-in data.",
      "Modular Backend Design: Structured Python modules and Spark jobs for independent tasks like cleaning, aggregation, and analysis.",
      "Microservice-Friendly API: Flask backend supports modular API routes to serve frontend visualizations.",
    ],
  },
  {
    heading: "2. Data Ingestion & Preprocessing",
    items: [
      "Yelp Academic Dataset: Parsed and loaded multi-gigabyte JSON files using Spark SQL and PySpark DataFrames.",
      "Cleaning: Handled missing fields, standardized data types, and normalized timestamps using PySpark functions.",
      "Filtering: Filtered reviews and business entries by location and category to focus on meaningful regional analysis.",
    ],
  },
  {
    heading: "3. Sentiment Analysis & NLP",
    items: [
      "Transformer Models: Used HuggingFace pre-trained sentiment classifiers to analyze user review text.",
      "Score Aggregation: Mapped sentiment outputs to polarity scores and calculated region-based sentiment averages.",
      "Text Preprocessing: Tokenized and cleaned review text to improve inference speed and reduce noise.",
    ],
  },
  {
    heading: "4. Geo-Spatial & Category Aggregation",
    items: [
      "City-Level Grouping: Grouped businesses by city and state for geographic comparison.",
      "Category Analysis: Aggregated popularity and engagement stats (rating, check-ins) by business type.",
      "Top Region Extraction: Identified highest-rated and most-reviewed categories in key urban areas.",
    ],
  },
  {
    heading: "5. Visualization & Frontend",
    items: [
      "Next.js Dashboard: Designed a React-based dashboard for presenting insights and charts.",
      "Streamlit Prototyping: Used Streamlit to quickly prototype Python-based visualizations for internal review.",
      "Charting: Integrated Chart.js and interactive components to display check-ins, ratings, and trends over time.",
    ],
  },
  {
    heading: "6. API & Backend Integration",
    items: [
      "Flask Server: Exposed REST API endpoints to serve processed data to the frontend.",
      "MongoDB Storage: Cached key results in MongoDB collections for fast retrieval and reuse.",
      "Data Access Layers: Developed modular routes for querying by location, category, or rating thresholds.",
    ],
  },
  {
    heading: "7. Performance Optimization",
    items: [
      "Spark Partitioning: Tuned partition sizes and join strategies to reduce computation time.",
      "Memory Management: Reduced shuffles and reused cached DataFrames to optimize RAM usage.",
      "Lazy Execution: Utilized Spark’s lazy evaluation to chain transformations efficiently.",
    ],
  },
  {
    heading: "8. Insights & Deliverables",
    items: [
      "Popularity Rankings: Ranked cities by check-ins, sentiment, and business density.",
      "Sentiment Trends: Found divergence between review star ratings and sentiment scores.",
      "Client Demo: Final dashboard allowed non-technical users to explore results interactively.",
    ],
  },
];

// Gallery
const galleryItems: GalleryItem[] = [
  { type: "image", src: "/images/yelp_danalysis_home.webp", fit: "cover", aspect: "16-9" },
  { type: "image", src: "/images/yelp_danalysis_elite.webp", fit: "fill", aspect: "16-9" },
  { type: "image", src: "/images/yelp_danalysis_sentiment.webp", fit: "fill", aspect: "16-9" },
  { type: "image", src: "/images/yelp_danalysis_phrases.webp", fit: "fill", aspect: "16-9" },
  { type: "image", src: "/images/yelp_danalysis_areapop.webp", fit: "fill", aspect: "16-9" },
  { type: "image", src: "/images/yelp_danalysis_seasonal.webp", fit: "fill", aspect: "16-9" },
];

const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: ["cover", "fill", "fill", "fill", "fill", "fill"] as ("contain" | "cover" | "fill")[],
};

export default function YelpAnalysisPage() {
  return (
    <ProjectDetailsClient
      title="Yelp Data Analysis"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      contributions={contributions}
      techStack={techStack}
      galleryCols={1}
      url= "https://github.com/Derrick-Mao/yelp-data-analysis"
    />
  );
}
