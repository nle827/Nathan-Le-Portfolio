"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Impact", href: "/#impact" },
  { label: "Contact", href: "/#contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4">
      <div className="glass max-w-4xl mx-auto rounded-full flex items-center justify-between px-5 py-2.5">
        <Link href="/" className="text-base font-semibold tracking-tight text-[var(--olive-800)]">
          Nathan Le
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-stone-600 hover:text-[var(--olive-700)] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full
                     bg-[var(--olive-600)] text-white text-sm font-medium hover:bg-[var(--olive-700)] transition-colors"
        >
          Let&apos;s Talk
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--olive-800)]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="glass md:hidden max-w-4xl mx-auto mt-2 rounded-2xl">
          <ul className="flex flex-col items-center py-4 gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-stone-700 hover:text-[var(--olive-700)]"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[var(--olive-600)] text-white text-sm font-medium"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
