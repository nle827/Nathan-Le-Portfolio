"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { headerContainerVariants, itemVariant } from "../utils/animations";

interface ProjectsProps {
  techProjects: any[];
  creativeProjects: any[];
  shouldReduceMotion: boolean;
}

export default function ProjectsSection({ techProjects, creativeProjects, shouldReduceMotion }: ProjectsProps) {
  const revealProps = shouldReduceMotion
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <motion.div
      {...revealProps}
      variants={headerContainerVariants}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full px-4 sm:px-6 lg:px-0"
    >
      {/* Technical */}
      <motion.div variants={itemVariant} className="w-full">
        <h2 className="text-2xl sm:text-3xl font-neuestance-bold mb-6 sm:mb-12 text-cyan-300 text-center md:text-left">
          Technical Projects
        </h2>
        <div className="space-y-6">
          {techProjects.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>
      </motion.div>

      {/* Creative */}
      <motion.div variants={itemVariant} className="w-full">
        <h2 className="text-2xl sm:text-3xl font-neuestance-bold mb-6 sm:mb-12 text-cyan-300 text-center md:text-left">
          Creative & Visual Projects
        </h2>
        <div className="space-y-6">
          {creativeProjects.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
