import React from "react";
import Link from "next/link";
import { useButtonClickSound } from "../utils/buttonClickSound";
import { useButtonHoverSound } from "../utils/buttonHoverSound";

const Footer = () => {
  const playClickSound = useButtonClickSound();
  const playHoverSound = useButtonHoverSound();

  const links = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="font-neuestance-bold w-full text-white p-6 shadow-md z-50 relative footer-rgb-border bg-black/80 flex flex-col items-center gap-6">
      {/* Name */}
      <h1 className="text-4xl font-bold text-metallic">Nathan Le</h1>

      {/* Navigation Buttons */}
      <nav>
        <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <button
                  className="text-sm sm:text-2xl font-bold px-4 py-2 rgb-text-hover w-28 sm:w-auto text-center"
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                >
                  {link.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Copyright */}
      <div className="text-center text-xs text-white/30">
        &copy; {new Date().getFullYear()} Nathan Le. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
