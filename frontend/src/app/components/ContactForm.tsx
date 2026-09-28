"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineBadgeCheck } from "react-icons/hi";

interface ContactSectionProps {
  topMargin?: string;
  className?: string;
}

const infoItems = [
  { icon: HiOutlineMail, label: "nathanale27@gmail.com" },
  { icon: HiOutlineLocationMarker, label: "Los Angeles, CA" },
  { icon: HiOutlineBadgeCheck, label: "Available for hire" },
];

const ContactForm: React.FC<ContactSectionProps> = ({
  topMargin = "mt-0",
  className = "",
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    if (!formRef.current) return;

    setIsSending(true);

    emailjs
      .send(
        "service_mzbqe7x",
        "template_e3jefhl",
        {
          name: (formRef.current.elements.namedItem("name") as HTMLInputElement)
            .value,
          email: (formRef.current.elements.namedItem("email") as HTMLInputElement)
            .value,
          message: (formRef.current.elements.namedItem("message") as HTMLTextAreaElement)
            .value,
          "g-recaptcha-response": captchaToken,
        },
        "nJwoD52y7lpFOPV8V"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
          setCaptchaToken(null);
        },
        (error) => {
          console.error("❌ FAILED...", error);
          alert("❌ Failed to send message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className={`${topMargin} py-16 sm:py-20 px-4 text-stone-900 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass max-w-5xl mx-auto rounded-[2.5rem] p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left: info */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--olive-600)] mb-3">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-stone-900">Get in Touch</h2>
          <p className="mb-8 text-stone-600">
            Looking to collaborate or have any questions? Feel free to reach out!
          </p>

          <div className="flex flex-col gap-3 items-center md:items-start">
            {infoItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-stone-700">
                <span className="glass rounded-full p-2">
                  <Icon size={16} className="text-[var(--olive-600)]" />
                </span>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-white/70 bg-white/60 text-stone-900
              placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--olive-500)]"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl border border-white/70 bg-white/60 text-stone-900
              placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--olive-500)]"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-xl border border-white/70 bg-white/60 text-stone-900
              placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--olive-500)]"
          ></textarea>

          <div className="flex justify-center sm:justify-start">
            <ReCAPTCHA
              sitekey="6LcyHdgrAAAAAHCr9O9IwvgZCo0NptUeuvSHMt1h"
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full px-6 py-3 rounded-full bg-[var(--olive-600)]
              text-white text-base font-medium hover:bg-[var(--olive-700)]
              transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--olive-600)] focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
