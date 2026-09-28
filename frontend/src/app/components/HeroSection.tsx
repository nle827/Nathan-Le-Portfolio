"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { headerContainerVariants, itemVariant } from "../utils/animations";

interface HeroProps {
  shouldReduceMotion: boolean;
}

const socialLinks = [
  { icon: FaLinkedin, alt: "LinkedIn", url: "https://www.linkedin.com/in/nathan-le-b56509322/" },
  { icon: FaGithub, alt: "GitHub", url: "https://github.com/nle827" },
  { icon: HiOutlineMail, alt: "Email", url: "/#contact" },
];

export default function HeroSection({ shouldReduceMotion }: HeroProps) {
  const revealProps = shouldReduceMotion
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <motion.div
      {...revealProps}
      variants={headerContainerVariants}
      className="flex flex-col items-center text-center w-full max-w-4xl px-4 sm:px-6 lg:px-0"
    >
      {/* Headshot */}
      <motion.div
        variants={itemVariant}
        className="relative mb-6 mt-5 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56"
      >
        <Image
          src="/images/headshot.webp"
          alt="Headshot of Nathan"
          fill
          sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, 14rem"
          className="rounded-full object-cover border-4 border-slate-100 shadow-md"
          priority
        />
      </motion.div>

      {/* Name */}
      <motion.h1 variants={itemVariant} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
        Nathan Le
      </motion.h1>

      {/* Subtitle */}
      <motion.p variants={itemVariant} className="text-lg sm:text-xl text-slate-500 mb-8">
        Software Developer
      </motion.p>

      {/* CTAs */}
      <motion.div variants={itemVariant} className="flex flex-col items-center gap-6 w-full sm:w-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full
                       bg-slate-900 text-white text-sm sm:text-base font-medium
                       hover:bg-slate-700 transition-colors"
          >
            View Work
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full
                       border border-slate-300 text-slate-700 text-sm sm:text-base font-medium
                       hover:border-slate-900 hover:text-slate-900 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, alt, url }) => (
            <a
              key={alt}
              href={url}
              aria-label={alt}
              target={url.startsWith("http") ? "_blank" : undefined}
              rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
