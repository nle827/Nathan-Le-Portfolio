"use client";

import ProjectDetailsClient, {
  GalleryItem,
  TechStackCategory,
  Contribution,
} from "../../components/ProjectDetailsClient";

const projectMainImage = "/images/talkify.webp";
const talkify1 = "/images/talkify_login.webp";
const talkify2 = "/images/talkify_space.webp";
const talkify3 = "/images/talkify_menu.webp";

// Gallery items
const galleryItems: GalleryItem[] = [
  { type: "image", src: talkify1, aspect: "16-9", fit: "contain" },
  { type: "image", src: talkify2, aspect: "16-9", fit: "contain" },
  { type: "image", src: talkify3, aspect: "16-9", fit: "contain" },
];

// Image fit configuration
const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: ["contain", "contain", "contain"] as ("contain" | "cover" | "fill")[],
};

// About section
const aboutText = `Talkify is a real-time social chatting web application that allows users to connect, make friends, and communicate 
through both private messages and group chat channels. Inspired by modern messaging platforms like Discord, Talkify 
combines social media features, secure account management, and real-time communication to create a complete, 
user-focused experience.

Users can:
- Create a secure account with authentication and encrypted credentials
- Add and manage friends with real-time friend request handling
- Chat via private DMs or dedicated group channels in chat spaces
- Create and join server-like spaces with invite codes
- Send, edit, and delete messages that update live via Socket.io

Talkify is a full-stack web application built with TypeScript, React, and Node.js. 
The app is powered by Socket.io for real-time communication and a MongoDB + Express backend for secure data handling
and modular architecture.`;

// Tech Stack
const techStack: TechStackCategory[] = [
  {
    heading: "Front-End",
    items: ["React", "CSS", "TypeScript", "HTML"],
  },
  {
    heading: "Animation",
    items: ["Framer Motion"],
  },
  {
    heading: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Socket.io"],
  },
];

// Contributions (Technical Overview + Features)
const contributions: Contribution[] = [
  {
    heading: "1. Architecture Highlights",
    items: [
      "User-Centric Design: Account management and friend features are modular.",
      "RESTful API & Modular Components: CRUD operations for users, messages, and server spaces.",
      "Real-Time Messaging: Implemented with Socket.io for live updates.",
      "Secure Authentication: Encrypted credentials with JWT + BCrypt.",
    ],
  },
  {
    heading: "2. Testing & Reliability",
    items: [
      "Unit Testing: Verified individual API routes and message handling.",
      "Integration Testing: Confirmed smooth interaction between frontend and backend.",
      "Authentication Testing: Ensured secure registration and login.",
      "Error Handling: Axios and backend errors handled gracefully.",
    ],
  },
  {
    heading: "3. Key Features Implemented",
    items: [
      "User Registration & Login (JWT authentication)",
      "Friend Request System & Auto-Created DM Channels",
      "Real-Time Messaging with Edit/Delete Capabilities",
      "Online Status Indicators (work in progress)",
    ],
  },
];

export default function TalkifyPage() {
  return (
    <ProjectDetailsClient
      title="Talkify"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      contributions={contributions}
      techStack={techStack}
      url="https://github.com/wikkiboi/talkify-app"
      galleryCols={1} // Display as single column gallery like your original
    />
  );
}
