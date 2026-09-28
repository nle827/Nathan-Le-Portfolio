"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useButtonClickSound2 } from "../utils/buttonClickSound2";
import { useButtonHoverSound } from "../utils/buttonHoverSound";

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
  const [activeTab, setActiveTab] = useState<"about" | "skills" | "education">("about");
  const playClickSound = useButtonClickSound2();
  const playHoverSound = useButtonHoverSound();
  const shouldReduceMotion = useReducedMotion();

  const containerVariant = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contentContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const contentItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const revealProps = shouldReduceMotion
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <div className={`${marginTop ?? ""} flex flex-col md:flex-row items-start gap-12 w-full px-4 md:px-8 lg:px-16`}>
      
      {/* Left Side: Headshot + Info */}
      <motion.div
        {...revealProps}
        variants={containerVariant}
        className="flex flex-col items-center gap-4 w-full md:w-1/3"
      >
        <motion.div variants={itemVariant} className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-[0_0_30px_#00f0ff66]">
          <img src="/images/headshot.webp" alt="Nathan Le Headshot" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1 variants={itemVariant} className="text-3xl sm:text-4xl md:text-5xl font-bold text-metallic text-center">
          Nathan Le
        </motion.h1>

        <motion.h2 variants={itemVariant} className="text-md sm:text-lg md:text-xl text-cyan-300 tracking-wide text-center">
          Software Developer
        </motion.h2>

        <motion.a
          href="/files/Nathan Le Resume 2025.pdf"
          download
          variants={itemVariant}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00f0ff" }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="mt-4 px-6 py-3 rounded-full border-2 border-cyan-400 bg-black/30 text-cyan-100 text-sm sm:text-base md:text-base font-medium hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_12px_#00f0ff88]"
        >
          Download Resume
        </motion.a>

        <motion.div variants={itemVariant} className="flex gap-4 justify-center mt-4">
          <motion.img
            src="/images/github.png"
            alt="GitHub"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playHoverSound}
            onClick={() => window.open("https://github.com/nle827", "_blank")}
          />
          <motion.img
            src="/images/linkedin.png"
            alt="LinkedIn"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playHoverSound}
            onClick={() => window.open("https://www.linkedin.com/in/nathan-le-b56509322/", "_blank")}
          />
        </motion.div>
      </motion.div>

      {/* Right Side: Tabs & Content */}
      <div className="flex-1 flex flex-col gap-6 w-full md:w-2/3">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {["about", "skills", "education"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              onClickCapture={playClickSound}
              onMouseEnter={playHoverSound}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00f0ff" }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium border-2 transition-all duration-200 ${
                activeTab === tab
                  ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_10px_#00f0ff66]"
                  : "bg-black/30 text-cyan-300 border-cyan-400 hover:bg-cyan-400 hover:text-black"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="bg-black/40 rounded-md p-4 sm:p-6 shadow-[0_0_20px_#00f0ff66]"
        >
          {activeTab === "about" && (
            <motion.div variants={contentContainer} className="space-y-4 sm:space-y-6">
              <motion.p className="text-left text-cyan-200 text-sm sm:text-base md:text-lg leading-relaxed">
                {aboutText.split(". ").map((sentence, idx) => (
                  <motion.span key={idx} variants={contentItem} className="block mb-2">
                    {sentence}.
                  </motion.span>
                ))}
              </motion.p>

              <motion.div
                variants={contentContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-6"
              >
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    variants={contentItem}
                    className="flex flex-col items-center sm:items-start text-cyan-200"
                  >
                    <span className="font-bold text-cyan-300 text-sm sm:text-base mb-1">{info.label}</span>
                    <span className="text-base sm:text-lg">{info.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div variants={contentContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div key={category} variants={contentItem}>
                  <h3 className="text-cyan-300 font-bold mb-3">{category}</h3>
                  <ul className="list-disc list-inside text-cyan-200 space-y-1 sm:space-y-2">
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div variants={contentContainer} className="flex flex-col gap-4 text-left">
              {education.map((edu, idx) => (
                <motion.div key={idx} variants={contentItem} className="border-2 border-cyan-400 rounded-md p-3 sm:p-4">
                  <h4 className="text-cyan-300 font-bold">{edu.school}</h4>
                  <p className="text-cyan-200 italic">{edu.degree}</p>
                  <p className="text-cyan-200 text-sm sm:text-base mt-1">{edu.notes}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
