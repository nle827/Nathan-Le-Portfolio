"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useButtonClickSound2 } from "../utils/buttonClickSound2";
import { useButtonHoverSound } from "../utils/buttonHoverSound";
import { itemVariant } from "../utils/animations";

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
  fit?: "cover" | "contain";
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, link, image, fit = "cover" }) => {
  const playClickSound = useButtonClickSound2();
  const playHoverSound = useButtonHoverSound();

  return (
    <motion.div
      variants={itemVariant}
      style={{ willChange: "opacity, transform" }}
      className="border border-slate-200 p-4 rounded-xl bg-white shadow-sm
                 hover:shadow-lg hover:border-cyan-400 transition w-full sm:max-w-sm md:max-w-full mx-auto"
      whileHover={{ scale: 1.02 }}
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
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 text-center sm:text-left">{title}</h3>
      <p className="text-slate-600 mb-4 text-sm sm:text-base text-center sm:text-left">{description}</p>
      <Link
        href={link}
        onClick={() => playClickSound()}
        onMouseEnter={() => playHoverSound()}
        className="inline-block px-4 py-1 border border-cyan-600 text-cyan-700
                   hover:bg-cyan-600 hover:text-white rounded transition-colors text-center"
      >
        View Project
      </Link>
    </motion.div>
  );
};

export default React.memo(ProjectCard);
