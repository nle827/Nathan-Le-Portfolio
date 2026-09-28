"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { headerContainerVariants, itemVariant } from "../utils/animations";

interface ProjectsProps {
  techProjects: ProjectProps[];
  creativeProjects: ProjectProps[];
  shouldReduceMotion: boolean;
}

export default function ProjectsSection({ techProjects, creativeProjects, shouldReduceMotion }: ProjectsProps) {
  const revealProps = shouldReduceMotion
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <div id="projects" className="w-full max-w-5xl mx-auto px-4 scroll-mt-20">
      <h2 className="text-2xl font-semibold text-slate-900 mb-10 text-center md:text-left">Projects</h2>
      <motion.div
        {...revealProps}
        variants={headerContainerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full"
      >
        {/* Technical */}
        <motion.div variants={itemVariant} className="w-full">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-6 text-center md:text-left">
            Technical Projects
          </h3>
          <div className="space-y-6">
            {techProjects.map((proj) => (
              <ProjectCard key={proj.title} {...proj} />
            ))}
          </div>
        </motion.div>

        {/* Creative */}
        <motion.div variants={itemVariant} className="w-full">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-6 text-center md:text-left">
            Creative & Visual Projects
          </h3>
          <div className="space-y-6">
            {creativeProjects.map((proj) => (
              <ProjectCard key={proj.title} {...proj} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
