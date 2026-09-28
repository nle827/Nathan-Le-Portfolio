"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { headerContainerVariants, itemVariant } from "../utils/animations";

interface HeroProps {
  shouldReduceMotion: boolean;
}

const socialLinks = [
  { icon: FaLinkedin, alt: "LinkedIn", url: "https://www.linkedin.com/in/nathan-le-b56509322/" },
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
      className="glass w-full max-w-5xl mx-auto rounded-[2.5rem] px-6 sm:px-10 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* Left: Text */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <motion.span variants={itemVariant} className="text-xs font-semibold tracking-widest uppercase text-[var(--olive-600)] mb-3">
          Hello, I&apos;m
        </motion.span>

        <motion.h1 variants={itemVariant} className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-2">
          Nathan Le
        </motion.h1>

        <motion.p
          variants={itemVariant}
          className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-[var(--olive-500)] to-[var(--olive-700)] bg-clip-text text-transparent"
        >
          Software Developer
        </motion.p>

        <motion.p variants={itemVariant} className="text-stone-600 max-w-sm mb-8">
          I build complete products — software, brand, and everything in between — rather than just the code behind them.
        </motion.p>

        <motion.div variants={itemVariant} className="flex flex-col items-center md:items-start gap-6 w-full sm:w-auto">
          <div className="flex items-center gap-3">
            <Link
              href="/#work"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full
                         bg-[var(--olive-600)] text-white text-sm sm:text-base font-medium
                         hover:bg-[var(--olive-700)] transition-colors shadow-sm"
            >
              View My Work
            </Link>
            <a
              href="/files/Nathan Le Resume 2026.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full
                         glass text-stone-700 text-sm sm:text-base font-medium
                         hover:text-[var(--olive-700)] transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, alt, url }) => (
              <a
                key={alt}
                href={url}
                aria-label={alt}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-stone-500 hover:text-[var(--olive-700)] transition-colors"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Photo */}
      <motion.div variants={itemVariant} className="relative mx-auto w-full max-w-xs md:max-w-sm">
        <div className="absolute -inset-6 bg-gradient-to-br from-[var(--olive-200)] to-[var(--olive-50)] rounded-[3rem] blur-2xl opacity-60" />
        <div className="relative w-full aspect-[4/5] rounded-tl-[4rem] rounded-tr-2xl rounded-bl-2xl rounded-br-[4rem] overflow-hidden border-4 border-white/70 shadow-xl">
          <Image
            src="/images/headshot.webp"
            alt="Headshot of Nathan"
            fill
            sizes="(max-width: 768px) 20rem, 24rem"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
