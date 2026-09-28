"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiCheck } from "react-icons/hi";
import { itemVariant } from "../utils/animations";

export interface ProjectProps {
  title: string;
  role?: string;
  dates?: string;
  highlights: string[];
  category: "Experience" | "Technical" | "Creative";
  link?: string;
  image?: string;
  fit?: "cover" | "contain";
  imageBg?: "dark" | "light";
}

const ProjectCard: React.FC<ProjectProps> = ({ title, role, dates, highlights, category, link, image, fit = "cover", imageBg = "dark" }) => {
  return (
    <motion.div
      variants={itemVariant}
      style={{ willChange: "opacity, transform" }}
      className="glass rounded-2xl p-4 flex flex-col h-full"
    >
      {image ? (
        <div className={`relative w-full h-44 rounded-xl mb-4 overflow-hidden ${imageBg === "light" ? "bg-white" : "bg-stone-900"}`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-${fit} object-center`}
          />
          <span className="absolute top-2.5 left-2.5 glass rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--olive-700)]">
            {category}
          </span>
        </div>
      ) : (
        <div className="mb-4">
          <span className="glass rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--olive-700)]">
            {category}
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
      {(role || dates) && (
        <p className="text-xs text-stone-500 mb-3">
          {role}
          {role && dates ? " · " : ""}
          {dates}
        </p>
      )}
      {!role && !dates && <div className="mb-3" />}

      <ul className="flex flex-col gap-1.5 mb-5 flex-1">
        {highlights.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-stone-600">
            <HiCheck className="mt-0.5 shrink-0 text-[var(--olive-600)]" size={15} />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {link && (
        <Link
          href={link}
          className="inline-flex items-center justify-center px-4 py-2 rounded-full glass
                     text-stone-700 hover:text-[var(--olive-700)] transition-colors text-center text-sm font-medium"
        >
          View Project
        </Link>
      )}
    </motion.div>
  );
};

export default React.memo(ProjectCard);
