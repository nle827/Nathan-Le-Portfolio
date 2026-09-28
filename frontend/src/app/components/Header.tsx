"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Nathan Le
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-700"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-white">
          <ul className="flex flex-col items-center py-4 gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-slate-900"
                >
                  {label}
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
