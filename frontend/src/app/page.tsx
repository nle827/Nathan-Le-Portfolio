"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import { techProjects, creativeProjects } from "./data/projects";
import { aboutText, skills, education, contactInfo } from "./data/about";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="flex flex-col items-center text-center bg-white text-slate-900 px-4 pt-10 pb-16 min-h-screen">
      <HeroSection shouldReduceMotion={shouldReduceMotion} />
      <ProjectsSection
        techProjects={techProjects}
        creativeProjects={creativeProjects}
        shouldReduceMotion={shouldReduceMotion}
      />
      <AboutSection
        aboutText={aboutText}
        skills={skills}
        education={education}
        contactInfo={contactInfo}
        marginTop="mt-48"
      />
      <ContactForm topMargin="mt-16" transparent />
    </div>
  );
}
