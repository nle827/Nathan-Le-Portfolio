"use client";

import ProjectDetailsClient, {
  TechStackCategory,
  Contribution,
  GalleryItem,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/reddit_analysis_logo.webp";

// About text
const aboutText = `I built this as a search engine over live sports discussion on Reddit — the goal was to let someone query a topic and get back ranked, relevant posts instead of scrolling manually through dozens of subreddits. The pipeline has three parts: a Python crawler (PRAW + BeautifulSoup) that pulls hot posts and their linked pages in parallel with a thread pool, an Elasticsearch index tuned for text relevance and recency, and a Flask app serving both a search UI and a JSON API. The interesting tradeoffs were in the crawler: keyword filtering only runs against post titles, not comments or linked text, which keeps queries fast but misses some relevant discussion buried further in a thread, and coverage tops out around the top ~1,000 hot posts per subreddit since that's what Reddit's API exposes without deeper pagination. Ranking blends Elasticsearch's BM25 relevance score with a recency-decay function, so a highly relevant older post doesn't permanently outrank a very fresh one.`;

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
