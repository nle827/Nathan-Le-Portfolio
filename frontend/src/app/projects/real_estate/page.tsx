'use client';
import { motion } from "framer-motion"; 
import Link from "next/link";
import { useButtonClickSound } from "../../utils/buttonClickSound";
import { useButtonHoverSound } from "../../utils/buttonHoverSound";
import ContactForm from "../../components/ContactForm";
// Public images should be referenced directly via URL path, not imported
const projectMainImage = "/images/dlr_logo.webp";
const dlrvideo1 = "/videos/Topanga.webm";
const dlrvideo2 = "/videos/Update.webm";
const dlrvideo3= "/videos/Review.webm";
const dlr1 = "/images/dlr_page1.webp";
const dlr2= "/images/dlr_page2.webp";
const dlr3= "/images/dlr_page3.webp";

// Define gallery items (images + videos)
const galleryItems = [
  { type: "video", src: dlrvideo1, aspect: "9-16", fit: "cover" },
  { type: "video", src: dlrvideo2, aspect: "9-16", fit: "cover" },
  { type: "video", src: dlrvideo3, aspect: "9-16", fit: "cover" },
  { type: "image", src: dlr1, aspect: "9-16", fit: "contain" },
  { type: "image", src: dlr2, aspect: "9-16", fit: "contain" },
  { type: "image", src: dlr3, aspect: "9-16", fit: "contain" },
];

// Image fit configuration
const imageFitConfig = {
  mainImageFit: "cover", // "cover" or "contain"
  galleryFits: "contain",  // can be "cover" or "contain" for all gallery items
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
  const projectSlug = params?.project || "Danny Le Realty";
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
          </motion.h1>

          <a
            href="https://www.dannylerealty.com/"
            target="_blank"
            rel="noopener noreferrer">
            <button
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="font-mono inline-block px-4 py-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition rounded"
              >
              View Website
            </button>
          </a>
        </div>

{/* Main Image */}
<div className="w-full h-64 bg-black border border-cyan-700 rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
  <img
    src={projectMainImage}
    alt={`${projectTitle} main image`}
    className={`${
      imageFitConfig.mainImageFit === "contain"
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
          <p className="text-cyan-200 mt-2">
            During my time as a Marketing Specialist for Danny Le Realty, I developed and executed targeted digital marketing campaigns
             to boost brand visibility and client engagement in a competitive real estate market. My work included designing promotional 
             materials, managing social media presence, and optimizing online content to highlight property listings and client success 
             stories. By combining strategic marketing insights with polished visual design, I contributed to increased lead generation
              and stronger brand recognition. 
          </p>
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
          <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">Platforms</h2>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Design & Creative:</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Adobe Illustrator</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Adobe Photoshop</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Canva</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Capcut</span>
          </div>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Marketing Tools:</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Facebook Business Suite</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Meta Ads</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Instagram Insights</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Google Analytics</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Mailchimp</span>
          </div>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Project Management</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Google Docs Editor Suite</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Notion</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Slack</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Google Workspace</span>
          </div>
        </section>    

        {/* Contributions*/}
<h2 className="text-2xl font-neuestance-bold text-cyberpunk-wave font-bold border-l-4 border-cyan-400 pl-3 mt-6">Contributions</h2>
<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">1. Brand Identity & Design</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Created cohesive visual assets for property listings, brochures, and promotional campaigns.</li>
  <li>Maintained consistent color palettes, typography, and brand tone across all media.</li>
  <li>Developed custom marketing materials, including flyers, social media posts, and listing graphics, using Canva and Adobe Photoshop.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">2. Digital Marketing Campaigns</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Designed and executed targeted Facebook and Instagram ad campaigns to reach potential buyers and sellers.</li>
  <li>Optimized ad creatives based on engagement metrics and audience insights.</li>
  <li>Optimized social media campaigns across Facebook, Instagram, and LinkedIn to increase listing visibility and audience engagement.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">3. Web & Content Optimization</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Updated and maintained property listings on the company’s WordPress site for accuracy and visual appeal.</li>
  <li>Applied basic HTML/CSS tweaks for better image alignment and responsive design.</li>
  <li>Implemented consistent brand styling across digital and print channels to enhance client trust and recognition.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">4. Social Media Growth</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Scheduled regular content to maintain consistent engagement with followers.</li>
  <li>Tracked analytics to identify high-performing content and adjust posting strategy.</li>
  <li>Contributed to lead generation strategies by combining visually compelling content with targeted online distribution.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">5. Data-Driven Insights</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Monitored ad performance and website traffic to inform future campaign strategies.</li>
  <li>Used Google Analytics and platform-specific metrics to refine targeting approaches.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">6. Cross-Team Collaboration</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Worked closely with real estate agents to ensure marketing materials aligned with client needs.</li>
  <li>Coordinated photography, videography, and marketing for property showcases.</li>
  <li>Streamlined internal workflow using Google Workspace tools for faster updates and improved collaboration.</li>
  <li>Led the onboarding and training process for new hires to ensure smooth integration and alignment with goals</li>
</ul>
        </motion.section>   

{/* Gallery */}
<section>
  <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
    Gallery
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
    {galleryItems.map((item, index) => {
  const isContain = item.fit === "contain";

  // Only apply fixed aspect class if fit is cover
  const aspectClass =
    !isContain && item.aspect === "9-16"
      ? "aspect-[9/16]"
      : !isContain
      ? "aspect-[16/9]"
      : ""; // empty class for contain -> shrink to image size

  const fitClass = item.fit === "cover" ? "object-cover" : "object-contain";

  return (
    <div
      key={index}
      className={`bg-cyan-900 bg-opacity-30 border border-cyan-700 overflow-hidden rounded-lg flex items-center justify-center ${aspectClass}`}
    >
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={`Gallery item ${index + 1}`}
          className={`w-full h-full ${fitClass}`}
        />
      ) : (
        <video
          src={item.src}
          controls
          className={`w-full h-full ${fitClass}`}
        />
      )}
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
