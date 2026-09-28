"use client";

import React, { useState, useEffect } from "react";
import ContactSection from "../components/ContactForm";

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // prevent SSR mismatch

  return (
    <div className="relative min-h-screen bg-white">
      {/* Subtle scanline texture */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30 bg-[repeating-linear-gradient(to_bottom,transparent_0px,rgba(8,145,178,0.03)_1px,transparent_2px)]"></div>

      {/* Contact Section */}
      <ContactSection topMargin="pt-32" />
    </div>
  );
}
