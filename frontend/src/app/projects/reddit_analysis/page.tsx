"use client";

import ProjectDetailsClient, { TechStackCategory } from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/reddit_analysis_logo.webp";

const aboutText = `I built this as a search engine over live sports discussion on Reddit — the goal was to let someone query a topic and get back ranked, relevant posts instead of scrolling manually through dozens of subreddits. The pipeline has three parts: a Python crawler (PRAW + BeautifulSoup) that pulls hot posts and their linked pages in parallel with a thread pool, an Elasticsearch index tuned for text relevance and recency, and a Flask app serving both a search UI and a JSON API. The interesting tradeoff is in the crawler: keyword filtering only runs against post titles, not comments or linked text, which keeps queries fast but misses some relevant discussion buried further in a thread.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Front-End",
    items: ["Bootstrap CSS", "Flask"],
  },
  {
    heading: "Backend",
    items: ["Python", "PRAW", "BeautifulSoup", "Elasticsearch"],
  },
];

const highlights = [
  "Elasticsearch-backed ranked search over live sports subreddit data",
  "Parallelized Python crawler (PRAW + BeautifulSoup) fetching linked pages concurrently",
  "Ranking blends BM25 relevance with a recency-decay function",
  "Title-only keyword filtering keeps queries fast but misses some comment-thread context",
  "Coverage capped at ~1,000 hot posts per subreddit due to Reddit API limits",
];

const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: [] as ("contain" | "cover" | "fill")[],
};

export default function RedditAnalysisPage() {
  return (
    <ProjectDetailsClient
      title="Reddit Data Search Engine"
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
