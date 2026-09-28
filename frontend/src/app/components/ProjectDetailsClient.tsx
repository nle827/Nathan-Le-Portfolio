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
      className="min-h-screen text-stone-900 p-4 sm:p-6 pt-28"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="glass rounded-[2.5rem] p-6 sm:p-10 space-y-8">
          {/* Back Button */}
          <Link href="/#projects">
            <ClickButton className="inline-block mb-2 px-4 py-2 glass rounded-full text-stone-700 hover:text-[var(--olive-700)] transition text-sm font-medium">
              ← Back to Projects
            </ClickButton>
          </Link>

          {/* Title + View Website */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold text-stone-900"
            >
              {title}
            </motion.h1>

            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ClickButton className="inline-block px-4 py-2 rounded-full bg-[var(--olive-600)] text-white hover:bg-[var(--olive-700)] transition text-sm font-medium">
                  View Website
                </ClickButton>
              </a>
            )}
          </div>

          {/* Main Image */}
          <div className="relative w-full h-64 bg-stone-900 rounded-2xl overflow-hidden">
            <Image
              src={mainImage}
              alt={`${title} main image`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className={imageFitConfig.mainImageFit === "cover" ? "object-cover" : "object-contain"}
            />
          </div>

          {/* About */}
          <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--olive-600)] mb-2">
              About
            </h2>
            <p className="text-stone-600 leading-relaxed">{about}</p>
          </section>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--olive-600)] mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-col gap-4">
                {techStack.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-semibold text-stone-800 mb-1">{category.heading}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span key={i} className="glass rounded-full px-3 py-1 text-sm text-stone-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contributions */}
          {contributions.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--olive-600)] mb-3">
                Contributions
              </h2>
              <div className="flex flex-col gap-5">
                {contributions.map((contribution, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-semibold text-stone-800 mb-1">{contribution.heading}</h3>
                    <ul className="list-disc list-inside text-stone-600 text-sm space-y-0.5">
                      {contribution.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Gallery */}
          {galleryItems.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--olive-600)] mb-3">
                Gallery
              </h2>
              <div
                className={`grid gap-4 ${
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
                    className={`relative w-full rounded-xl overflow-hidden bg-stone-900 ${
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
                        className={`object-${item.fit}`}
                      />
                    ) : (
                      <video src={item.src} controls className={`w-full h-full object-${item.fit}`} />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Contact */}
        <ContactFormWrapper topMargin="mt-8" />
      </div>
    </motion.div>
  );
}
