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
const aboutText = `Talkify is a full-stack, Discord-style chat app I built to go deeper on real-time systems than a typical CRUD project — private messaging, group "spaces," and live message edits all had to stay in sync across clients without the UI ever feeling laggy or out of order. The backend runs on Node.js/Express with MongoDB, and Socket.io pushes messages, friend requests, and edits to clients in real time instead of polling. Authentication runs on JWT with bcrypt-hashed credentials, and the frontend is a modular React/TypeScript app animated with Framer Motion. The core messaging, friend system, and space/channel model all work end to end; live online-presence indicators are still in progress — the open problem there is keeping accurate real-time state without flooding the socket connection with presence updates on every reconnect.`;

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
