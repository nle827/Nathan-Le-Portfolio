
import { motion } from "framer-motion"; 
import Link from "next/link";
import { useButtonClickSound } from "../../utils/buttonClickSound";
import { useButtonHoverSound } from "../../utils/buttonHoverSound";
import ContactForm from "../../components/ContactForm";
const projectMainImage = "/images/reddit_analysis_logo.webp";
const reddit1 = "/images/reddit_analysis_home.webp";
const reddit2 = "/images/reddit_analysis_example1.webp";
const reddit3= "/images/reddit_analysis_example2.webp";

const imageFitConfig = {
  mainImageFit: "contain",
  galleryFits: ["fill", "fill", "fill"],
};
// Pre-render all possible project pages
export async function generateStaticParams() {
  const projects = [
    "menacity",
    "photo",
    "real_estate",
    "reddit_analysis",
    "talkify",
    "video",
    "website",
    "yelp_danalysis",
  ];

  return projects.map((project) => ({
    project,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: any){
  const projectSlug = params?.project || "Reddit Data Analysis (FIX IMAGES AND GITHUB LINK)";
  const projectTitle = decodeURIComponent(projectSlug.replace(/-/g, " "));
  const playClickSound = useButtonClickSound();
  const playHoverSound = useButtonHoverSound();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-black via-[#001f2f] to-black text-cyan-400 p-6"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <Link
          href="/portfolio">
          <button
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="font-mono inline-block mb-4 px-4 py-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition rounded"
          >
          ← Back to Projects
          </button>
        </Link>

        {/* Title + View Website button */}
        <div className="flex justify-between items-center border-b border-cyan-700 pb-2">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyberpunk-wave text-4xl font-neuestance-bold font-extrabold text-cyan-300"
          >
            {projectTitle}
          </motion.h1><a
            href="https://github.com/Derrick-Mao/yelp-data-analysis"
            target="_blank"
            rel="noopener noreferrer">
            <button
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="font-mono inline-block px-4 py-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition rounded"
              >
              View GitHub
            </button>
          </a>
        </div>

        {/* Main Image */}
        <div className="w-full h-64 bg-black border border-cyan-700 rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
          <img
            src={projectMainImage}
            alt={`${projectTitle} main image`}
            className={`${
              imageFitConfig.mainImageFit === "cover"
                ? "w-full h-full object-cover"
                : "max-w-full max-h-full object-contain"
            }`}
          />
        </div>
            
        {/* About */}
        <motion.section
          initial={{ x: -100, opacity: 0 }}  // start off-screen to the left
          animate={{ x: 0, opacity: 1 }}     // slide in to normal position
          transition={{ duration: 0.8, ease: "easeOut" }} // smooth animation
          viewport={{ once: true, amount: 0.5 }}
          >
          <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">About</h2>
          <p className="text-cyan-200 mt-2">Reddit Data Analysis is a comprehensive project focused on collecting and analyzing posts
             and comments from sports-related subreddits. The goal is to capture the latest, most relevant discussions to analyze public 
             opinion and reveal diverse perspectives on current sports events. The project involves a modular Reddit crawler built with 
             Python tools like PRAW and BeautifulSoup, a scalable Elasticsearch-backed search engine, and a Flask-based web frontend. 
             Together, these components allow users to efficiently query and explore real-time Reddit content with rich metadata and
              relevance ranking.
          </p>

          <p className="text-cyan-200 mt-4">Key Functionalities:</p>
           <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Keyword-filterable subreddit crawler gathering hot posts and comments with external link parsing</li>
            <li>Parallelized crawling with ThreadPoolExecutor to optimize data fetching speed</li>
            <li>JSONL output with automatic file rotation to manage large datasets efficiently</li>
            <li>Modular indexing and search engine using Elasticsearch with tailored mappings for relevance and recency</li>
            <li>Flask backend providing API endpoints and HTML templates for search and result presentation</li>
            <li>Frontend built with Bootstrap and custom CSS offering user-friendly search and ranked results display</li>
          </ul>
          
          <p className="text-cyan-200 mt-4">Reddit Data Analysis is a full-stack, data-intensive project combining Python, Elasticsearch, 
            Flask, and asynchronous data collection techniques.</p>
        </motion.section>

        <motion.section
        style={{ willChange: "transform, opacity" }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.05 }}
        >

        
        {/* Tech Stack */}
        <section>
          <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">Tech Stack</h2>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Front-End</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Bootstrap CSS</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Flask</span>
          </div>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Backend</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">PRAW (Python Reddit Api Wrapper)</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">BeautifulSoup</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Elasticsearch</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">ThreadPoolExecutor (For Concurrency)</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">JSONL</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Bash Scripting (For Automation)</span>
          </div>
        </section>


        {/* Technical Overview*/}
          <h2 className="text-2xl font-neuestance-bold text-cyberpunk-wave font-bold border-l-4 border-cyan-400 pl-3 mt-6">Technical Overview</h2>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">1. Architecture Highlights</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Modular Design: Separated components for crawling, indexing, and search to maintain scalability and maintainability.</li>
  <li>Data Crawler: Uses PRAW to collect Reddit hot posts, with BeautifulSoup scraping linked pages to enrich data.</li>
  <li>Virtual Environment: Python virtual environment (<code>venv</code>) ensures isolated dependencies and environment consistency.</li>
  <li>Elasticsearch Integration: Custom mappings and indexing scripts enable high-performance querying and ranking.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">2. Data Collection Strategy</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Seed-Driven Crawling: Reads subreddit names from seed files, crawling hot posts up to a configurable count.</li>
  <li>Keyword Filtering: Filters posts by keywords only in post titles, optimizing relevance but limiting some context.</li>
  <li>Parallel Fetching: Fetches external linked pages concurrently (up to 10 threads) to improve efficiency.</li>
  <li>Data Storage: Stores results in JSONL files, rotating after 10 MB to manage file sizes.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">3. Employed Data Structures</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Lists for subreddits and comments tracking.</li>
  <li>Dictionaries to hold post metadata including id, author, title, url, comments, timestamps.</li>
  <li>ThreadPoolExecutor for parallel link fetching.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">4. System Limitations</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Data Coverage: Limited to top ~1000 hot posts per subreddit due to Reddit API constraints.</li>
  <li>Filtering Limitations: Keyword filter only applies to titles, excluding some relevant content in comments/selftext.</li>
  <li>Performance Bottlenecks: Synchronous calls and single-threaded file writing can slow large data runs.</li>
  <li>Fixed Metadata Schema: Omits some Reddit metadata like flair, awards, or upvote ratio.</li>
  <li>No Dynamic Discovery: Cannot auto-discover new sports subreddits beyond the seed list.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">5. Search Engine & Web Application</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Indexing: Processes Reddit data into Elasticsearch indices with field mappings optimized for text search and recency.</li>
  <li>Scoring Algorithm: Combines BM25 relevance with score boosting and recency decay using Elasticsearch function score queries.</li>
  <li>Flask Backend: Exposes <code>/search</code> route for UI and <code>/api/search</code> endpoint for JSON results.</li>
  <li>Frontend: Simple search interface with Bootstrap-styled results showing ranked posts with metadata and score transparency.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">6. System Deployment</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Includes bash scripts and detailed instructions to install Elasticsearch, run indexing, and start the Flask app locally.</li>
  <li>ElasticSearch runs on port 9200; Flask backend on 127.0.0.1:5000.</li>
  <li>Provides tooling for data ingestion, indexing, and query interface in a replicable environment.</li>
</ul>
</motion.section>

        {/* Gallery */}
<section>
  <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
    Gallery
  </h2>
  <div className="grid grid-cols-1 gap-4 mt-2">
    {[reddit1, reddit2, reddit3].map((img, index) => {
      const fitMode = imageFitConfig.galleryFits[index] || "contain";

      return (
      <div
        key={index}
        className="bg-cyan-900 bg-opacity-30 border border-cyan-700 overflow-hidden rounded-lg flex items-center justify-center"
      >
        <img
          src={img}
          alt={`${projectTitle} gallery image ${index + 1}`}
          className={`
            ${fitMode === "cover" ? "w-full h-full object-cover"
            : fitMode === "fill" ? "object-contain w-full h-full"
            : "max-w-full max-h-full object-contain"}
          `}
        />
      </div>
      );
    })}
  </div>
</section>
<ContactForm topMargin="mt-8" transparent />
      </div>
    </motion.div>
  );
}
