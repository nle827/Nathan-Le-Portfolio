"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
  GalleryItem,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/reddit_analysis_logo.webp";

// About text
const aboutText = `Reddit Data Analysis is a comprehensive project focused on collecting and analyzing posts and comments from sports-related subreddits. The goal is to capture the latest, most relevant discussions to analyze public opinion and reveal diverse perspectives on current sports events. The project involves a modular Reddit crawler built with Python tools like PRAW and BeautifulSoup, a scalable Elasticsearch-backed search engine, and a Flask-based web frontend. Together, these components allow users to efficiently query and explore real-time Reddit content with rich metadata and relevance ranking.

Key Functionalities:
- Keyword-filterable subreddit crawler gathering hot posts and comments with external link parsing
- Parallelized crawling with ThreadPoolExecutor to optimize data fetching speed
- JSONL output with automatic file rotation to manage large datasets efficiently
- Modular indexing and search engine using Elasticsearch with tailored mappings for relevance and recency
- Flask backend providing API endpoints and HTML templates for search and result presentation
- Frontend built with Bootstrap and custom CSS offering user-friendly search and ranked results display

Reddit Data Analysis is a full-stack, data-intensive project combining Python, Elasticsearch, Flask, and asynchronous data collection techniques.`;

// Tech stack
const techStack: TechStackCategory[] = [
  {
    heading: "Front-End",
    items: ["Bootstrap CSS", "Flask"],
  },
  {
    heading: "Backend",
    items: [
      "Python",
      "PRAW (Python Reddit API Wrapper)",
      "BeautifulSoup",
      "Elasticsearch",
      "ThreadPoolExecutor (For Concurrency)",
      "JSONL",
      "Bash Scripting (For Automation)",
    ],
  },
];

// Technical Overview / Contributions
const contributions: Contribution[] = [
  {
    heading: "1. Architecture Highlights",
    items: [
      "Modular Design: Separated components for crawling, indexing, and search to maintain scalability and maintainability.",
      "Data Crawler: Uses PRAW to collect Reddit hot posts, with BeautifulSoup scraping linked pages to enrich data.",
      "Virtual Environment: Python virtual environment (venv) ensures isolated dependencies and environment consistency.",
      "Elasticsearch Integration: Custom mappings and indexing scripts enable high-performance querying and ranking.",
    ],
  },
  {
    heading: "2. Data Collection Strategy",
    items: [
      "Seed-Driven Crawling: Reads subreddit names from seed files, crawling hot posts up to a configurable count.",
      "Keyword Filtering: Filters posts by keywords only in post titles, optimizing relevance but limiting some context.",
      "Parallel Fetching: Fetches external linked pages concurrently (up to 10 threads) to improve efficiency.",
      "Data Storage: Stores results in JSONL files, rotating after 10 MB to manage file sizes.",
    ],
  },
  {
    heading: "3. Employed Data Structures",
    items: [
      "Lists for subreddits and comments tracking.",
      "Dictionaries to hold post metadata including id, author, title, url, comments, timestamps.",
      "ThreadPoolExecutor for parallel link fetching.",
    ],
  },
  {
    heading: "4. System Limitations",
    items: [
      "Data Coverage: Limited to top ~1000 hot posts per subreddit due to Reddit API constraints.",
      "Filtering Limitations: Keyword filter only applies to titles, excluding some relevant content in comments/selftext.",
      "Performance Bottlenecks: Synchronous calls and single-threaded file writing can slow large data runs.",
      "Fixed Metadata Schema: Omits some Reddit metadata like flair, awards, or upvote ratio.",
      "No Dynamic Discovery: Cannot auto-discover new sports subreddits beyond the seed list.",
    ],
  },
  {
    heading: "5. Search Engine & Web Application",
    items: [
      "Indexing: Processes Reddit data into Elasticsearch indices with field mappings optimized for text search and recency.",
      "Scoring Algorithm: Combines BM25 relevance with score boosting and recency decay using Elasticsearch function score queries.",
      "Flask Backend: Exposes /search route for UI and /api/search endpoint for JSON results.",
      "Frontend: Simple search interface with Bootstrap-styled results showing ranked posts with metadata and score transparency.",
    ],
  },
  {
    heading: "6. System Deployment",
    items: [
      "Includes bash scripts and detailed instructions to install Elasticsearch, run indexing, and start the Flask app locally.",
      "ElasticSearch runs on port 9200; Flask backend on 127.0.0.1:5000.",
      "Provides tooling for data ingestion, indexing, and query interface in a replicable environment.",
    ],
  },
];

// Gallery items
const galleryItems: GalleryItem[] = [
  { type: "image", src: "/images/reddit_analysis_example2.webp", aspect: "16-9", fit: "fill" },
];

const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: ["fill", "fill", "fill"] as ("contain" | "cover" | "fill")[],
};

export default function RedditAnalysisPage() {
  return (
    <ProjectDetailsClient
      title="Reddit Data Analysis"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      contributions={contributions}
      techStack={techStack}
      galleryCols={1}
      url="https://github.com/Derrick-Mao/yelp-data-analysis"
    />
  );
}
