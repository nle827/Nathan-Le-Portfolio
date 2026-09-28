"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { headerContainerVariants } from "../utils/animations";

interface ProjectsProps {
  workItems: ProjectProps[];
  shouldReduceMotion: boolean;
}

export default function ProjectsSection({ workItems, shouldReduceMotion }: ProjectsProps) {
  const revealProps = shouldReduceMotion
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <div id="work" className="w-full max-w-5xl mx-auto px-4 scroll-mt-24">
      <div className="text-center md:text-left mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--olive-600)]">Experience & Projects</span>
        <h2 className="text-2xl font-semibold text-stone-900 mt-2">Work</h2>
      </div>
      <motion.div
        {...revealProps}
        variants={headerContainerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full items-stretch"
      >
        {workItems.map((item) => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </motion.div>
    </div>
  );
}
