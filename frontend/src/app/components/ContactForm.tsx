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
      className={`${topMargin} py-16 sm:py-20 px-4 sm:px-8 md:px-16 text-slate-900 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-neuestance-bold md:text-5xl font-bold mb-6 text-slate-900">
          Get in Touch
        </h2>
        <p className="mb-8 sm:mb-12 text-base sm:text-lg text-slate-600">
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
            className="w-full px-4 py-3 sm:py-4 rounded-md border border-slate-300 bg-white text-slate-900
              placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 sm:py-4 rounded-md border border-slate-300 bg-white text-slate-900
              placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 sm:py-4 rounded-md border border-slate-300 bg-white text-slate-900
              placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
          ></textarea>

          <div className="flex justify-center mb-4 sm:mb-6">
            <ReCAPTCHA
              sitekey="6LcyHdgrAAAAAHCr9O9IwvgZCo0NptUeuvSHMt1h"
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSending}
            className="w-full px-6 py-3 sm:py-4 rounded-full border-2 border-cyan-600 bg-white
              text-cyan-700 text-lg sm:text-xl font-medium antialiased font-neuestance-bold hover:bg-cyan-600 hover:text-white
              transition transform shadow-sm hover:shadow-[0_0_18px_rgba(8,145,178,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-500
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
