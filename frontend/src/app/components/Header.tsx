"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useButtonClickSound } from "../utils/buttonClickSound";
import { useButtonHoverSound } from "../utils/buttonHoverSound";

const Header: React.FC = () => {
  const playClickSound = useButtonClickSound();
  const playHoverSound = useButtonHoverSound();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    playClickSound();
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="font-neuestance-bold fixed top-0 left-0 w-full text-white p-4 z-50 bg-black/70 backdrop-blur-md shadow-md header-rgb-border">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo / Name */}
        <h1 className="text-3xl sm:text-4xl font-bold text-metallic">Nathan Le</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}>
              <button
                className="text-lg sm:text-2xl font-bold rgb-text-hover px-2 py-1"
                onClick={playClickSound}
                onMouseEnter={playHoverSound}
              >
                {label}
              </button>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={toggleMenu}
          onMouseEnter={playHoverSound}
        >
          <span
            className={`block h-0.5 w-8 bg-cyan-300 mb-1 rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-cyan-300 mb-1 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-cyan-300 rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-md shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href}>
                  <button
                    className="text-xl font-bold rgb-text-hover px-6 py-2"
                    onClick={() => {
                      playClickSound();
                      setMenuOpen(false);
                    }}
                    onMouseEnter={playHoverSound}
                  >
                    {label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
