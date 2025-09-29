"use client";

import React from "react";
import { motion } from "framer-motion";
import { useButtonClickSound } from "../utils/buttonClickSound";
import { useButtonHoverSound } from "../utils/buttonHoverSound";
import { headerContainerVariants, itemVariant } from "../utils/animations";

interface HeroProps {
  shouldReduceMotion: boolean;
}

const socialLinks = [
  { src: "/images/linkedin.png", alt: "LinkedIn", url: "https://www.linkedin.com/in/nathan-le-b56509322/" },
  { src: "/images/github.png", alt: "GitHub", url: "https://github.com/nle827" },
  { src: "/images/email.png", alt: "Email", url: "/contact" },
];

export default function HeroSection({ shouldReduceMotion }: HeroProps) {
  const playClickSound = useButtonClickSound();
  const playHoverSound = useButtonHoverSound();

  const revealProps = shouldReduceMotion
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  const handleNavigation = (url: string) => {
    setTimeout(() => {
      if (url.startsWith("http")) window.open(url, "_blank");
      else window.location.href = url;
    }, 150);
  };

  return (
    <motion.div
      {...revealProps}
      variants={headerContainerVariants}
      className="flex flex-col items-center text-center w-full max-w-4xl px-4 sm:px-6 lg:px-0"
    >
      {/* Headshot */}
      <motion.div variants={itemVariant} className="mb-6 mt-5">
        <img
          src="/images/headshot.webp"
          alt="Headshot of Nathan"
          className="w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full object-cover border-4 border-white shadow-lg"
          loading="eager"
        />
      </motion.div>

      {/* Name */}
      <motion.h1 variants={itemVariant} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-metallic mb-2">
        Nathan Le
      </motion.h1>

      {/* Subtitle */}
      <motion.h1 variants={itemVariant} className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-metallic mb-6">
        Software Developer
      </motion.h1>

      {/* View Work + Socials */}
      <motion.div variants={itemVariant} className="flex flex-col items-center gap-4 mb-8 w-full sm:w-auto">
        {/* "View Work" button */}
        <motion.a
          onMouseEnter={playHoverSound}
          onClick={() => handleNavigation("/portfolio")}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00f0ff" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-full 
                     border-2 border-cyan-400 bg-black/30 text-cyan-100 text-base sm:text-lg font-medium 
                     hover:bg-cyan-800 hover:text-white transition transform 
                     shadow-[0_0_12px_#00f0ff88] hover:shadow-[0_0_18px_#00f0ffcc]"
        >
          View Work
        </motion.a>

        <div className="flex items-center gap-3 mt-3">
          {socialLinks.map(({ src, alt, url }) => {
            const onClickHandler =
              alt === "Email"
                ? () => handleNavigation(url)
                : () => {
                    playClickSound();
                    if (url.startsWith("http")) window.open(url, "_blank");
                    else window.location.href = url;
                  };

            return (
              <motion.img
                key={alt}
                src={src}
                alt={alt}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={playHoverSound}
                onClick={onClickHandler}
                className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer object-contain"
              />
            );
          })}
        </div>
      </motion.div>

      {/* Portfolio Title */}
      <motion.h2 variants={itemVariant} className="font-neuestance-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-16 sm:mt-24 mb-16 sm:mb-24">
        My Portfolio
      </motion.h2>
    </motion.div>
  );
}
