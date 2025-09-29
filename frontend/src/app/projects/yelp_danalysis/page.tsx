'use client';
import { motion } from "framer-motion"; 
import Link from "next/link";
import { useButtonClickSound } from "../../utils/buttonClickSound";
import { useButtonHoverSound } from "../../utils/buttonHoverSound";
import ContactForm from "../../components/ContactForm";

const projectMainImage = "/images/yelp_analysis_logo.webp";
const yelp1 = "/images/yelp_danalysis_home.webp";
const yelp2 = "/images/yelp_danalysis_elite.webp";
const yelp3= "/images/yelp_danalysis_sentiment.webp";
const yelp4 = "/images/yelp_danalysis_phrases.webp";
const yelp5 = "/images/yelp_danalysis_areapop.webp";
const yelp6= "/images/yelp_danalysis_seasonal.webp";

const imageFitConfig = {
  mainImageFit: "contain",
  galleryFits: ["cover", "fill", "fill", "fill", "fill", "fill"],
};

const galleryAspectRatios = ["16-9", "16-9", "16-9", "16-9", "16-9", "9-16"]; 

export default function ProjectDetailsPage({
  params,
}: {
  params: { project: string };
}) {
  const projectSlug = params?.project || "Yelp Data Analysis";
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
          <p className="text-cyan-200 mt-2">Yelp Data Analysis is a large-scale data analytics project built to uncover trends 
            and patterns from the Yelp Academic Dataset using distributed computing. The goal was to analyze user behavior,
             business popularity, seasonal trends, and sentiment-based anomalies through both raw data and machine learning insights.

            The project pipeline includes collecting raw JSON files, processing them with PySpark, storing results in MongoDB, 
            and presenting findings via a web dashboard. The frontend interface allows users to explore trends by business type, 
            geography, sentiment scores, and more, giving a deep look into consumer patterns across various U.S. regions.
          </p>

          <p className="text-cyan-200 mt-4">Key Functionalities:</p>
           <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Distributed processing of millions of reviews, check-ins, and business records</li>
            <li>NLP-based sentiment scoring to detect mismatches with user ratings</li>
            <li>Interactive, filterable web dashboards built with React and Flask</li>
            <li>Visual breakdown of geographic, seasonal, and demographic insights</li>
            <li>Modular architecture for easy expansion and isolated analytics</li>
          </ul>
          
          <p className="text-cyan-200 mt-4">Yelp Data Analysis is a full-stack project combining Python-based data pipelines,
             NoSQL storage, machine learning, and modern frontend development.</p>
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
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Flask (API Layer)</span>
          </div>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Backend</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">PySpark</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">PyMongo</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">HuggingFace Transformerrs</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Docker</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Tailscale VPN</span>
          </div>
        </section>


        {/* Technical Overview*/}
          <h2 className="text-2xl font-neuestance-bold text-cyberpunk-wave font-bold border-l-4 border-cyan-400 pl-3 mt-6">Technical Overview</h2>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">1. Architecture Highlights</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Distributed Processing: Leveraged PySpark to efficiently handle large-scale Yelp datasets across multiple nodes.</li>
  <li>ETL Pipeline: Designed an end-to-end pipeline to extract, transform, and load business, review, and check-in data.</li>
  <li>Modular Backend Design: Structured Python modules and Spark jobs for independent tasks like cleaning, aggregation, and analysis.</li>
  <li>Microservice-Friendly API: Flask backend supports modular API routes to serve frontend visualizations.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">2. Data Ingestion & Preprocessing</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Yelp Academic Dataset: Parsed and loaded multi-gigabyte JSON files using Spark SQL and PySpark DataFrames.</li>
  <li>Cleaning: Handled missing fields, standardized data types, and normalized timestamps using PySpark functions.</li>
  <li>Filtering: Filtered reviews and business entries by location and category to focus on meaningful regional analysis.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">3. Sentiment Analysis & NLP</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Transformer Models: Used HuggingFace's pre-trained sentiment classifiers to analyze user review text.</li>
  <li>Score Aggregation: Mapped sentiment outputs to polarity scores and calculated region-based sentiment averages.</li>
  <li>Text Preprocessing: Tokenized and cleaned review text to improve inference speed and reduce noise.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">4. Geo-Spatial & Category Aggregation</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>City-Level Grouping: Grouped businesses by city and state for geographic comparison.</li>
  <li>Category Analysis: Aggregated popularity and engagement stats (rating, check-ins) by business type.</li>
  <li>Top Region Extraction: Identified highest-rated and most-reviewed categories in key urban areas.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">5. Visualization & Frontend</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Next.js Dashboard: Designed a React-based dashboard for presenting insights and charts.</li>
  <li>Streamlit Prototyping: Used Streamlit to quickly prototype Python-based visualizations for internal review.</li>
  <li>Charting: Integrated Chart.js and interactive components to display check-ins, ratings, and trends over time.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">6. API & Backend Integration</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Flask Server: Exposed REST API endpoints to serve processed data to the frontend.</li>
  <li>MongoDB Storage: Cached key results in MongoDB collections for fast retrieval and reuse.</li>
  <li>Data Access Layers: Developed modular routes for querying by location, category, or rating thresholds.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">7. Performance Optimization</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Spark Partitioning: Tuned partition sizes and join strategies to reduce computation time.</li>
  <li>Memory Management: Reduced shuffles and reused cached DataFrames to optimize RAM usage.</li>
  <li>Lazy Execution: Utilized Spark’s lazy evaluation to chain transformations efficiently.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">8. Insights & Deliverables</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Popularity Rankings: Ranked cities by check-ins, sentiment, and business density.</li>
  <li>Sentiment Trends: Found divergence between review star ratings and sentiment scores.</li>
  <li>Client Demo: Final dashboard allowed non-technical users to explore results interactively.</li>
</ul>
        </motion.section>

        {/* Gallery */}
<section>
  <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
    Gallery
  </h2>
  <div className="grid grid-cols-1 gap-4 mt-2">
    {[yelp1, yelp2, yelp3, yelp4, yelp5, yelp6].map((img, index) => {
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
