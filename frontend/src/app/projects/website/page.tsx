'use client';
import { motion } from "framer-motion"; 
import Link from "next/link";
import { useButtonClickSound } from "../../utils/buttonClickSound";
import { useButtonHoverSound } from "../../utils/buttonHoverSound";
import ContactForm from "../../components/ContactForm";

const projectMainImage = "/images/portfolio_cover.webp";

const imageFitConfig = {
  mainImageFit: "cover",
};


export default async function ProjectDetailsPage({
  params,
}: any){
  const projectSlug = params?.project || "Portfolio Website";
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
            This cyberpunk-themed personal portfolio website was designed and developed to showcase my technical projects, design work,
             and creative background. Built with a focus on high visual impact and user-friendly navigation, it blends modern frontend 
             technologies with animated interactions for a memorable browsing experience. The design embraces neon-inspired colors, 
             special text effects, and smooth transitions while maintaining fast load times and a responsive layout. Beyond 
             its visual style, the site is structured for scalability, allowing new projects and content to be added without redesigning
            the core architecture.
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
          <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">Tech Stack</h2>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Front-End</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Taildwind CSS</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Framer Motion</span>
          </div>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Backend</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
          </div>
        </section>


        {/* Technical Overview*/}
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
1. Architecture Highlights
</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Built with Next.js for hybrid static and server-side rendering, ensuring optimal performance and SEO.</li>
  <li>Component-based architecture in React for modular, reusable UI elements.</li>
  <li>Dynamic routing for project detail pages using Next.js App Router.</li>
  <li>Structured content management via a centralized project data configuration file.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
2. UI/UX & Styling
</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Cyberpunk-inspired color palette with neon cyan and magenta highlights.</li>
  <li>Custom typography and iconography for a distinct brand identity.</li>
  <li>Framer Motion animations for smooth section transitions and interactive hover states.</li>
  <li>Responsive Tailwind CSS utility classes to ensure consistent design across breakpoints.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
3. Interactive Features
</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Global sound effects on button clicks using custom React hooks.</li>
  <li>Animated project cards with hover scaling and detail reveal effects.</li>
  <li>Gallery component with custom aspect ratio handling for consistent image framing.</li>
  <li>Smooth scroll navigation between sections with Framer Motion scroll animations.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
4. Performance Optimizations
</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Leveraged Next.js image optimization to serve correctly sized images for each viewport.</li>
  <li>Lazy-loaded gallery sections to reduce initial page load time.</li>
  <li>Code splitting and route-level prefetching for snappy navigation.</li>
  <li>Minimal use of external scripts to keep JavaScript bundle sizes small.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
5. Scalability & Maintainability
</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Project content stored in a structured data file for easy updates without code changes.</li>
  <li>Reusable UI components for cards, modals, and section layouts.</li>
  <li>Consistent design tokens for colors, spacing, and typography.</li>
  <li>Clear folder structure separating assets, components, pages, and utilities.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
6. Deployment & Hosting
</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Deployed to Vercel with automated builds on GitHub commits.</li>
  <li>Custom domain integration with HTTPS by default.</li>
  <li>Preview deployments for testing design changes before production release.</li>
  <li>Optimized build process using Next.js static exports for faster hosting response times.</li>
</ul>
</motion.section>
<ContactForm topMargin="mt-8" transparent />
      </div>
    </motion.div>
  );
}
