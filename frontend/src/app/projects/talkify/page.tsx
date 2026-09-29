"use client";

import ProjectDetailsClient, { TechStackCategory } from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/talkify.webp";

const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: [] as ("contain" | "cover" | "fill")[],
};

const aboutText = `Talkify is a full-stack, Discord-style chat app I built to go deeper on real-time systems than a typical CRUD project — private messaging, group "spaces," and live message edits all had to stay in sync across clients without the UI ever feeling laggy or out of order. The core messaging, friend system, and space/channel model all work end to end; live online-presence indicators are still in progress — the open problem there is keeping accurate real-time state without flooding the socket connection with presence updates on every reconnect.`;

const techStack: TechStackCategory[] = [
  {
    heading: "Front-End",
    items: ["React", "TypeScript", "Framer Motion"],
  },
  {
    heading: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Socket.io"],
  },
];

const highlights = [
  "Real-time messaging, friend requests, and edits synced live via Socket.io",
  "Modular REST API for users, messages, and server spaces",
  "JWT authentication with bcrypt-hashed credentials",
  "Full-stack TypeScript across a React frontend and Node/Express/MongoDB backend",
  "Online presence indicators still in progress",
];

export default function TalkifyPage() {
  return (
    <ProjectDetailsClient
      title="Talkify"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={[]}
      highlights={highlights}
      techStack={techStack}
      galleryCols={0}
    />
  );
}
