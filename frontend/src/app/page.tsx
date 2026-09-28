"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ImpactSection from "./components/ImpactSection";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import { techProjects, creativeProjects } from "./data/projects";
import { aboutText, skills, education, contactInfo } from "./data/about";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="flex flex-col items-center text-stone-900 px-4 pt-28 pb-16 min-h-screen gap-16">
      <HeroSection shouldReduceMotion={shouldReduceMotion} />
      <AboutSection
        aboutText={aboutText}
        skills={skills}
        education={education}
        contactInfo={contactInfo}
      />
      <ProjectsSection
        techProjects={techProjects}
        creativeProjects={creativeProjects}
        shouldReduceMotion={shouldReduceMotion}
      />
      <ImpactSection shouldReduceMotion={shouldReduceMotion} />
      <ContactForm className="w-full" />
    </div>
  );
}
