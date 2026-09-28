"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactInfo {
  label: string;
  value: string;
}

interface Education {
  school: string;
  degree: string;
  notes: string;
}

interface Skills {
  [category: string]: string[];
}

interface AboutSectionProps {
  aboutText: string;
  skills: Skills;
  education: Education[];
  contactInfo: ContactInfo[];
  marginTop?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutText, skills, education, contactInfo, marginTop }) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariant = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const revealProps = shouldReduceMotion
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <div id="about" className={`${marginTop ?? ""} w-full max-w-5xl mx-auto px-4 md:px-8 scroll-mt-20`}>
      <motion.div {...revealProps} variants={containerVariant} className="flex flex-col md:flex-row items-start gap-12">
        {/* Left: Headshot + Info */}
        <motion.div variants={itemVariant} className="flex flex-col items-center gap-4 w-full md:w-1/3 shrink-0">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
            <Image src="/images/headshot.webp" alt="Nathan Le Headshot" fill sizes="14rem" className="object-cover" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 text-center">Nathan Le</h3>
          <p className="text-slate-500 text-center">Software Developer</p>

          <a
            href="/files/Nathan Le Resume 2025.pdf"
            download
            className="mt-2 px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            Download Resume
          </a>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/nle827"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-le-b56509322/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right: About, Skills, Education */}
        <div className="flex-1 flex flex-col gap-10 w-full md:w-2/3">
          <motion.div variants={itemVariant}>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">About</h2>
            <p className="text-slate-600 leading-relaxed">{aboutText}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{info.label}</span>
                  <span className="text-slate-800">{info.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariant}>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">{category}</h3>
                  <ul className="text-slate-700 space-y-1">
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariant}>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Education</h2>
            <div className="flex flex-col gap-4">
              {education.map((edu, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900">{edu.school}</h4>
                  <p className="text-slate-500 italic text-sm">{edu.degree}</p>
                  <p className="text-slate-600 text-sm mt-1">{edu.notes}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
