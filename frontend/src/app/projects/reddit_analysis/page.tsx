"use client";

import ProjectDetailsClient, { TechStackCategory } from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/reddit_analysis_logo.webp";

const aboutText = `This is a search engine over sports discussion on Reddit, built so someone can search a topic and get ranked, relevant posts back instead of scrolling through dozens of subreddits by hand. It has three parts: a Python crawler using PRAW and BeautifulSoup that pulls hot posts and their linked pages in parallel, an Elasticsearch index tuned for relevance and recency, and a Flask app serving a search UI and a JSON API. One tradeoff worth knowing about: keyword filtering only checks post titles, not comments, so it stays fast but can miss relevant discussion buried in a thread.`;

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
