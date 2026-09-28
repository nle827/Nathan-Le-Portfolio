"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ClickButton from "../components/ClickButton";
import ContactFormWrapper from "../components/ContactFormWrapper";

export type Contribution = {
  heading: string;
  items: string[];
};

export type TechStackCategory = {
  heading: string;
  items: string[];
};

export type GalleryItem = {
  type: "image" | "video";
  src: string;
  aspect: "9-16" | "16-9";
  fit: "cover" | "contain" | "fill";
};

type ProjectDetailsProps = {
  title: string;
  url?: string;
  about: string;
  mainImage: string;
  imageFitConfig: {
    mainImageFit: "cover" | "contain" | "fill";
    galleryFits: ("cover" | "contain" | "fill")[];
  };
  galleryItems?: GalleryItem[];
  contributions?: Contribution[];
  techStack?: TechStackCategory[];
  galleryCols?: number;
};

export default function ProjectDetailsClient({
  title,
  url,
  about,
  mainImage,
  imageFitConfig,
  galleryItems = [],
  contributions = [],
  techStack = [],
  galleryCols,
}: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-black via-[#001f2f] to-black text-cyan-400 p-6"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back Button */}
        <Link href="/portfolio">
          <ClickButton className="font-mono inline-block mb-4 px-4 py-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition rounded">
            ← Back to Projects
          </ClickButton>
        </Link>

        {/* Title + View Website */}
        <div className="flex justify-between items-center border-b border-cyan-700 pb-2">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyberpunk-wave text-4xl font-neuestance-bold font-extrabold text-cyan-300"
          >
            {title}
          </motion.h1>

          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ClickButton className="font-mono inline-block px-4 py-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition rounded">
                View Website
              </ClickButton>
            </a>
          )}
        </div>

        {/* Main Image */}
        <div className="w-full h-64 bg-black border border-cyan-700 rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
          <img
            src={mainImage}
            alt={`${title} main image`}
            className={`${
              imageFitConfig.mainImageFit === "cover"
                ? "w-full h-full object-cover"
                : "max-w-full max-h-full object-contain"
            }`}
          />
        </div>

        {/* About */}
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">
            About
          </h2>
          <p className="text-cyan-200 mt-2">{about}</p>
        </motion.section>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
              Tech Stack
            </h2>
            {techStack.map((category, idx) => (
              <div key={idx} className="mt-2">
                <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6">
                  {category.heading}
                </h3>
                <ul className="list-disc list-inside text-cyan-200 pl-12 mt-1">
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Contributions */}
        {contributions.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
              Contributions
            </h2>
            {contributions.map((contribution, idx) => (
              <div key={idx} className="mt-2">
                <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
                  {contribution.heading}
                </h3>
                <ul className="list-disc list-inside text-cyan-200 pl-12 mt-1">
                  {contribution.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Gallery */}
        {galleryItems.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
              Gallery
            </h2>
            {/* Gallery */}
<section className="mt-8">
  <div
    className={`grid gap-4 mt-4 ${
      galleryCols === 1
        ? "grid-cols-1"
        : galleryCols === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-3"
    }`}
  >
    {galleryItems.map((item, index) => (
      <div
        key={index}
        className={`relative w-full ${
          item.aspect === "9-16"
            ? "aspect-[9/16]"
            : item.aspect === "16-9"
            ? "aspect-[16/9]"
            : "aspect-square"
        }`}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={`Gallery item ${index + 1}`}
            className={`w-full h-full object-${item.fit} rounded-lg shadow-lg`}
          />
        ) : (
          <video
            src={item.src}
            controls
            className={`w-full h-full object-${item.fit} rounded-lg shadow-lg`}
          />
        )}
      </div>
    ))}
  </div>
</section>

          </section>
        )}

        {/* Contact */}
        <ContactFormWrapper topMargin="mt-8" transparent />
      </div>
    </motion.div>
  );
}
