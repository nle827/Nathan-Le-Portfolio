"use client";

import dynamic from "next/dynamic";

type Props = {
  topMargin?: string;
};

// Client-only dynamic import of ContactForm
const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

export default function ContactFormWrapper({ topMargin }: Props) {
  return <ContactForm topMargin={topMargin} />;
}
