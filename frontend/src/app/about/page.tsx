import type { Metadata } from "next";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import { aboutText, skills, education, contactInfo } from "../data/about";

export const metadata: Metadata = {
  title: "About",
  description: aboutText,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 p-6 md:p-12">
      <AboutSection
        aboutText={aboutText}
        skills={skills}
        education={education}
        contactInfo={contactInfo}
      />

      <ContactForm topMargin="mt-8" transparent />
    </div>
  );
}
