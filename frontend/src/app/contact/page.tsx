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
    <div className="min-h-screen bg-gradient-to-br from-black via-[#001f2f] to-black">
      {/* Scanlines for cyberpunk effect */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 bg-[repeating-linear-gradient(to_bottom,transparent_0px,rgba(0,255,255,0.05)_1px,transparent_2px)]"></div>

      {/* Contact Section */}
      <ContactSection topMargin="pt-32" />
    </div>
  );
}
