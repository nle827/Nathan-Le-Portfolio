
import { motion } from "framer-motion"; 
import Link from "next/link";
import { useButtonClickSound } from "../../utils/buttonClickSound";
import { useButtonHoverSound } from "../../utils/buttonHoverSound";
import ContactForm from "../../components/ContactForm";

const projectMainImage = "/images/talkify.webp";
const talkify1 = "/images/talkify_login.webp";
const talkify2 = "/images/talkify_space.webp";
const talkify3= "/images/talkify_menu.webp";

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
  const projectSlug = params?.project || "Talkify";
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
            href="https://github.com/wikkiboi/talkify-app"
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
          <p className="text-cyan-200 mt-2">
            Talkify is a real-time social chatting web application that allows users to connect, make friends, and communicate 
            through both private messages and group chat channels. Inspired by modern messaging platforms like Discord, Talkify 
            combines social media features, secure account management, and real-time communication to create a complete, 
            user-focused experience.
          </p>

          <p className="text-cyan-200 mt-4">Users can:</p>
           <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Create a secure account with authentication and encrypted credentials</li>
            <li>Add and manage friends with real-time friend request handling</li>
            <li>Chat via private DMs or dedicated group channels in chat spaces</li>
            <li>Create and join server-like spaces with invite codes</li>
            <li>Send, edit, and delete messages that update live via Socket.io</li>
          </ul>
          
          <p className="text-cyan-200 mt-4">Talkify is a full-stack web application built with TypeScript, React, and Node.js. 
          The app is powered by Socket.io for real-time communication and a MongoDB + Express backend for secure data handling
          and modular architecture.</p>
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
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">CSS</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">HTML</span>
          </div>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Animation</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Framer Motion</span>
          </div>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Backend</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">CSS</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">HTML</span>
          </div>
        </section>


        {/* Technical Overview*/}
          <h2 className="text-2xl font-neuestance-bold text-cyberpunk-wave font-bold border-l-4 border-cyan-400 pl-3 mt-6">Technical Overview</h2>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">1. Architecture Highlights</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>User-Centric Design: Account management and friend features are kept modular from core messaging functions.</li>
            <li>RESTful API & Modular Components: Supports CRUD operations for users, messages, and server spaces.</li>
            <li>Real-Time Messaging: Implemented with Socket.io for live updates across channels and direct messages.</li>
            <li>Secure Authentication: Encrypted credentials with JWT + BCrypt for safe account creation and login.</li>
          </ul>

          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">2. Testing & Reliability</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Unit Testing: Verified individual API routes and message handling.</li>
            <li>Integration Testing: Confirmed smooth interaction between frontend and backend.</li>
            <li>Authentication Testing: Ensured users can securely register, log in, and maintain session integrity.</li>
            <li>Error Handling: Axios and backend error responses provide clear, differentiated error messages.</li>
          </ul>

          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">3. Key Features Implemented</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>User Registration & Login (JWT authentication)</li>
            <li>Friend Request System & Auto-Created DM Channels</li>
            <li>Real-Time Messaging with Edit/Delete Capabilities</li>
            <li>Online Status Indicators (work in progress)</li>
          </ul>
        </motion.section>

        {/* Gallery */}
<section>
  <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
    Gallery
  </h2>
  <div className="grid grid-cols-1 gap-4 mt-2">
    {[talkify1, talkify2, talkify3].map((img, index) => {
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
