"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useButtonClickSound2 } from "../utils/buttonClickSound2";
import { useButtonHoverSound } from "../utils/buttonHoverSound";
import { itemVariant } from "../utils/animations";

interface ProjectProps {
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
      className="border border-cyan-500 p-4 rounded-md bg-black bg-opacity-40 shadow-[0_0_12px_#00f0ff44] 
                 hover:shadow-[0_0_18px_#00f0ff88] transition-transform w-full sm:max-w-sm md:max-w-full mx-auto"
      whileHover={{ scale: 1.02 }}
    >
      {image && (
        <div className="w-full h-48 sm:h-56 md:h-64 bg-black bg-opacity-50 border border-cyan-700 rounded mb-4 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-${fit} object-center`}
          />
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold text-cyan-300 mb-2 text-center sm:text-left">{title}</h3>
      <p className="text-cyan-200 mb-4 text-sm sm:text-base text-center sm:text-left">{description}</p>
      <Link
        href={link}
        onClick={() => playClickSound()}
        onMouseEnter={() => playHoverSound()}
        className="inline-block px-4 py-1 border border-cyan-400 text-cyan-300 hover:text-cyan-100 rounded 
                   hover:bg-cyan-800 bg-opacity-20 transition-colors text-center"
      >
        View Project
      </Link>
    </motion.div>
  );
};

export default React.memo(ProjectCard);
