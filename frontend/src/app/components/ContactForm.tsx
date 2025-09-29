"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactSectionProps {
  transparent?: boolean;
  topMargin?: string;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  transparent = false,
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
      className={`${topMargin} py-16 sm:py-20 px-4 sm:px-8 md:px-16 text-cyan-100 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-neuestance-bold md:text-5xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_10px_#00f0ff]">
          Get in Touch
        </h2>
        <p className="mb-8 sm:mb-12 text-base sm:text-lg text-cyan-200">
          Looking to collaborate or have any questions? Feel free to reach out!
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 max-w-xl mx-auto"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className={`w-full px-4 py-3 sm:py-4 rounded-md border border-cyan-400 text-cyan-100
              focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_8px_#00f0ff88]
              ${transparent ? "bg-black/10 placeholder:text-cyan-300" : "bg-black/50"}`}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className={`w-full px-4 py-3 sm:py-4 rounded-md border border-cyan-400 text-cyan-100
              focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_8px_#00f0ff88]
              ${transparent ? "bg-black/10 placeholder:text-cyan-300" : "bg-black/50"}`}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className={`w-full px-4 py-3 sm:py-4 rounded-md border border-cyan-400 text-cyan-100
              focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_8px_#00f0ff88]
              ${transparent ? "bg-black/10 placeholder:text-cyan-300" : "bg-black/50"}`}
          ></textarea>

          <div className="flex justify-center mb-4 sm:mb-6">
            <ReCAPTCHA
              sitekey="6LcyHdgrAAAAAHCr9O9IwvgZCo0NptUeuvSHMt1h"
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 18px #00f0ffcc" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSending}
            className="w-full px-6 py-3 sm:py-4 rounded-full border-2 border-cyan-400 bg-black/30
              text-cyan-100 text-lg sm:text-xl font-medium antialiased font-neuestance-bold hover:bg-cyan-800 hover:text-white
              transition transform shadow-[0_0_12px_#00f0ff88] focus:outline-none focus:ring-2 focus:ring-cyan-400
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
