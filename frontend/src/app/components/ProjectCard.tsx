"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { itemVariant } from "../utils/animations";

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
  fit?: "cover" | "contain";
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, link, image, fit = "cover" }) => {
  return (
    <motion.div
      variants={itemVariant}
      style={{ willChange: "opacity, transform" }}
      className="border border-slate-200 p-4 rounded-xl bg-white shadow-sm
                 hover:shadow-md hover:border-slate-300 transition w-full sm:max-w-sm md:max-w-full mx-auto"
    >
      {image && (
        <div className="relative w-full h-48 sm:h-56 md:h-64 bg-slate-900 border border-slate-200 rounded mb-4 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-${fit} object-center`}
          />
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 text-center sm:text-left">{title}</h3>
      <p className="text-slate-600 mb-4 text-sm sm:text-base text-center sm:text-left">{description}</p>
      <Link
        href={link}
        className="inline-block px-4 py-1.5 border border-slate-300 text-slate-700
                   hover:border-slate-900 hover:text-slate-900 rounded-md transition-colors text-center text-sm font-medium"
      >
        View Project
      </Link>
    </motion.div>
  );
};

export default React.memo(ProjectCard);
