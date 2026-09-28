"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      className="min-h-screen bg-white text-slate-900 p-6 pt-24"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back Button */}
        <Link href="/#projects">
          <ClickButton className="inline-block mb-4 px-4 py-2 border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900 transition rounded-md text-sm font-medium">
            ← Back to Projects
          </ClickButton>
        </Link>

        {/* Title + View Website */}
        <div className="flex justify-between items-center border-b border-slate-200 pb-4">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            {title}
          </motion.h1>

          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ClickButton className="inline-block px-4 py-2 border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900 transition rounded-md text-sm font-medium">
                View Website
              </ClickButton>
            </a>
          )}
        </div>

        {/* Main Image */}
        <div className="relative w-full h-64 bg-slate-900 border border-slate-200 rounded-lg shadow-inner overflow-hidden">
          <Image
            src={mainImage}
            alt={`${title} main image`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className={imageFitConfig.mainImageFit === "cover" ? "object-cover" : "object-contain"}
          />
        </div>

        {/* About */}
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-slate-900 border-l-4 border-slate-900 pl-3">
            About
          </h2>
          <p className="text-slate-600 mt-2">{about}</p>
        </motion.section>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-l-4 border-slate-900 pl-3 mt-6">
              Tech Stack
            </h2>
            {techStack.map((category, idx) => (
              <div key={idx} className="mt-2">
                <h3 className="text-base font-semibold text-slate-700 pl-6">
                  {category.heading}
                </h3>
                <ul className="list-disc list-inside text-slate-600 pl-12 mt-1">
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
            <h2 className="text-xl font-semibold text-slate-900 border-l-4 border-slate-900 pl-3 mt-6">
              Contributions
            </h2>
            {contributions.map((contribution, idx) => (
              <div key={idx} className="mt-2">
                <h3 className="text-base font-semibold text-slate-700 pl-6 mt-3">
                  {contribution.heading}
                </h3>
                <ul className="list-disc list-inside text-slate-600 pl-12 mt-1">
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
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900 border-l-4 border-slate-900 pl-3 mt-6">
              Gallery
            </h2>
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
                  className={`relative w-full rounded-lg overflow-hidden bg-slate-900 ${
                    item.aspect === "9-16"
                      ? "aspect-[9/16]"
                      : item.aspect === "16-9"
                      ? "aspect-[16/9]"
                      : "aspect-square"
                  }`}
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={`Gallery item ${index + 1}`}
                      fill
                      sizes={`(max-width: 768px) 100vw, ${Math.round(100 / (galleryCols ?? 3))}vw`}
                      className={`object-${item.fit} rounded-lg shadow-lg`}
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
        )}

        {/* Contact */}
        <ContactFormWrapper topMargin="mt-8" />
      </div>
    </motion.div>
  );
}
