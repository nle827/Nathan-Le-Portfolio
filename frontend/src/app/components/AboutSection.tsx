"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiFlask,
  SiGraphql,
  SiGithub,
  SiPytest,
  SiShopify,
  SiGoogleanalytics,
  SiHotjar,
  SiFigma,
  SiCanvas,
  SiAnthropic,
  SiDavinciresolve,
} from "react-icons/si";

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

const skillIcons: Record<string, IconType> = {
  "C++": SiCplusplus,
  Python: SiPython,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  Flask: SiFlask,
  GraphQL: SiGraphql,
  "Git/GitHub": SiGithub,
  pytest: SiPytest,
  Shopify: SiShopify,
  GA4: SiGoogleanalytics,
  Hotjar: SiHotjar,
  Figma: SiFigma,
  Canva: SiCanvas,
  Claude: SiAnthropic,
  "DaVinci Resolve": SiDavinciresolve,
};

const stats = [
  { value: "4+", label: "Years in Industry" },
  { value: "7+", label: "Roles & Projects" },
  { value: "1", label: "Brand Founded" },
];

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
    <div id="about" className={`${marginTop ?? ""} w-full max-w-5xl mx-auto px-4 scroll-mt-24`}>
      <motion.div {...revealProps} variants={containerVariant} className="flex flex-col gap-10">
        <motion.span variants={itemVariant} className="text-xs font-semibold tracking-widest uppercase text-[var(--olive-600)] text-center md:text-left">
          About Me
        </motion.span>

        <motion.div variants={itemVariant} className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Left: Headshot + Info */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/3 shrink-0">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white/70 shadow-md">
                <Image src="/images/headshot.webp" alt="Nathan Le Headshot" fill sizes="12rem" className="object-cover" />
              </div>

              <h3 className="text-xl font-bold text-stone-900 text-center">Nathan Le</h3>
              <p className="text-stone-500 text-center text-sm">Software Developer</p>

              <a
                href="/files/Nathan Le Resume 2026.pdf"
                download
                className="mt-2 px-6 py-2.5 rounded-full bg-[var(--olive-600)] text-white text-sm font-medium hover:bg-[var(--olive-700)] transition-colors"
              >
                Download Resume
              </a>

              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/nathan-le-b56509322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-stone-500 hover:text-[var(--olive-700)] transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Right: About + stats */}
            <div className="flex-1 flex flex-col gap-6 w-full md:w-2/3">
              <p className="text-stone-600 leading-relaxed">{aboutText}</p>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl py-4 text-center">
                    <div className="text-2xl font-bold text-[var(--olive-700)]">{stat.value}</div>
                    <div className="text-[11px] uppercase tracking-wide text-stone-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-stone-400">{info.label}</span>
                    <span className="text-stone-800">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={itemVariant} className="glass rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-stone-900 mb-6">Skills & Technologies</h2>
          <div className="flex flex-col gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => {
                    const Icon = skillIcons[item];
                    return (
                      <span
                        key={item}
                        className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-stone-700"
                      >
                        {Icon && <Icon size={14} className="text-[var(--olive-600)]" />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariant} className="glass rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">Education</h2>
          <div className="flex flex-col gap-4">
            {education.map((edu, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-stone-900">{edu.school}</h4>
                <p className="text-stone-500 italic text-sm">{edu.degree}</p>
                <p className="text-stone-600 text-sm mt-1">{edu.notes}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
