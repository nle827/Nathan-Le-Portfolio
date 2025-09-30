"use client";

import dynamic from "next/dynamic";

type Props = {
  topMargin?: string;
  transparent?: boolean;
};

const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

export default function ContactFormWrapper({ topMargin, transparent }: Props) {
  return <ContactForm topMargin={topMargin} transparent={transparent} />;
}
