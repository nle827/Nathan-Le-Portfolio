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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900">
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
              placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 sm:py-4 rounded-md border border-slate-300 bg-white text-slate-900
              placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 sm:py-4 rounded-md border border-slate-300 bg-white text-slate-900
              placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          ></textarea>

          <div className="flex justify-center mb-4 sm:mb-6">
            <ReCAPTCHA
              sitekey="6LcyHdgrAAAAAHCr9O9IwvgZCo0NptUeuvSHMt1h"
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full px-6 py-3 sm:py-4 rounded-full bg-slate-900
              text-white text-base sm:text-lg font-medium hover:bg-slate-700
              transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2
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
