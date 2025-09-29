'use client';

import { motion } from "framer-motion"; 
import Link from "next/link";
import { useButtonClickSound } from "../../utils/buttonClickSound";
import { useButtonHoverSound } from "../../utils/buttonHoverSound";
import ContactForm from "../../components/ContactForm";

// Public images
const projectMainImage = "/images/menacity_logo.webp";
const galleryImages = [
  "/images/menacity1n.webp",
  "/images/menacity2n.webp",
  "/images/menacity3n.webp",
  "/images/menacity7n.webp",
  "/images/menacity4n.webp",
  "/images/menacity6n.webp",
  "/images/menacity5n.webp",
  "/images/menacity8n.webp",
  "/images/menacity9n.webp",
];

// Image fit config
const imageFitConfig = {
  mainImageFit: "contain" as "cover" | "contain",
  galleryFits: Array(9).fill("cover" as "cover" | "contain"),
};

const galleryAspectRatios = Array(9).fill("9-16");

interface ProjectPageProps {
  params: { project: string };
}

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const projectSlug = params.project || "Menacity Clothing";
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

        {/* Back Button */}
        <Link href="/portfolio">
          <button
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="font-mono inline-block mb-4 px-4 py-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition rounded"
          >
            ← Back to Projects
          </button>
        </Link>

        {/* Title + View Website */}
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
            href="https://www.menacityclothing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            className={
              imageFitConfig.mainImageFit === "cover"
                ? "w-full h-full object-cover"
                : "max-w-full max-h-full object-contain"
            }
          />
        </div>

        {/* About Section */}
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">
            About
          </h2>
          <p className="text-cyan-200 mt-2">
            I founded Menacity Clothing, an independent streetwear brand that blends anime culture with minimalist and modern design. 
            As the sole creative and operational lead, I oversaw every aspect of the brand’s creation. This includes creating concepts
            and visual identity, product development, e-commerce, and marketing. This project reflects my ability to merge design,
            branding, and technology to execute a cohesive business vision. 
          </p>
        </motion.section>

        {/* Contributions */}
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.05 }}
        >
          <h2 className="text-2xl font-neuestance-bold text-cyberpunk-wave font-bold border-l-4 border-cyan-400 pl-3 mt-6">
            Contributions
          </h2>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">1. Entrepreneurial Impact</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Founded and scaled a fashion brand, leveraging social media marketing to grow a community of over 60,000 people.</li>
            <li>Designed and developed a user friendly website, attracting 150,000+ user sessions within 2 years.</li>
            <li>Generated $62,000 in sales within 5 months using audience segmentation, ensuring personalized outreach and increased conversions.</li>
          </ul>

          {/* Other Contributions omitted for brevity — copy your original list here */}

        </motion.section>

        {/* Gallery */}
        <section>
          <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {galleryImages.map((img, index) => {
              const aspectClass = galleryAspectRatios[index] === "9-16" ? "aspect-[9/16]" : "aspect-[16/9]";
              return (
                <div
                  key={index}
                  className={`bg-cyan-900 bg-opacity-30 border border-cyan-700 overflow-hidden rounded-lg flex items-center justify-center ${aspectClass}`}
                >
                  <img
                    src={img}
                    width={600}
                    height={1066}
                    alt={`${projectTitle} gallery image ${index + 1}`}
                    className={
                      imageFitConfig.galleryFits[index] === "cover"
                        ? "w-full h-full object-cover"
                        : "max-w-full max-h-full object-contain"
                    }
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm topMargin="mt-8" transparent />
      </div>
    </motion.div>
  );
}
