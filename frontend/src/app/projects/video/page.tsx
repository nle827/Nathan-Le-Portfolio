'use client';
import { motion } from "framer-motion"; 
import Link from "next/link";
import { useButtonClickSound } from "../../utils/buttonClickSound";
import { useButtonHoverSound } from "../../utils/buttonHoverSound";
import ContactForm from "../../components/ContactForm";

const projectMainImage = "/images/waterfall.webp";
const video1 = "/videos/video4.webm";
const video2 = "/videos/video2.webm";
const video3= "/videos/video5.webm";
const video4 = "/videos/video1.webm";
const video5= "/videos/video3.webm";
const video6= "/videos/video6.webm";
const video7= "/videos/video7.webm";
const video8= "/videos/video8.webm";
const video9= "/videos/video9.webm";

const galleryItems = [
  { type: "video", src: video1, aspect: "9-16", fit: "containr" },
  { type: "video", src: video2, aspect: "9-16", fit: "contain" },
  { type: "video", src: video3, aspect: "9-16", fit: "contain" },
  { type: "video", src: video4, aspect: "9-16", fit: "contain" },
  { type: "video", src: video5, aspect: "9-16", fit: "contain" },
  { type: "video", src: video6, aspect: "9-16", fit: "contain" },
  { type: "video", src: video7, aspect: "9-16", fit: "contain" },
  { type: "video", src: video8, aspect: "9-16", fit: "contain" },
  { type: "video", src: video9, aspect: "9-16", fit: "contain" },
];

const imageFitConfig = {
  mainImageFit: "contain",
  galleryFits: "contain",
};

export default function ProjectDetailsPage({
  params,
}: {
  params: { project: string };
}) {
  const projectSlug = params?.project || "Videography Showcase";
  const projectTitle = decodeURIComponent(projectSlug.replace(/-/g, " "));
  const playClickSound = useButtonClickSound();
  const playHoverSound = useButtonHoverSound();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-black via-[#001f2f] to-black text-cyan-400 p-6"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <Link
          href="/portfolio">
          <button
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="font-mono inline-block mb-4 px-4 py-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition rounded"
          >
          ← Back to Projects
          </button>
        </Link>

        {/* Title + View Website button */}
        <div className="flex justify-between items-center border-b border-cyan-700 pb-2">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyberpunk-wave text-4xl font-neuestance-bold font-extrabold text-cyan-300"
          >
            {projectTitle}
          </motion.h1>
        </div>

{/* Main Image */}
<div className="w-full h-64 bg-black border border-cyan-700 rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
  <img
    src={projectMainImage}
    alt={`${projectTitle} main image`}
    className={`${
      imageFitConfig.mainImageFit === "contain"
        ? "w-full h-full object-cover"
        : "max-w-full max-h-full object-contain"
    }`}
  />
</div>

{/* About */}
<motion.section
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}
>
  <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">
    About
  </h2>
  <p className="text-cyan-200 mt-2">
    Videography allows me to combine storytelling, visuals, and sound into
    immersive experiences. My work includes short-form social media content,
    cinematic reels, event highlights, and creative projects. I aim to capture
    not just motion, but mood and emotion, blending technical precision with
    creative direction to produce engaging, polished videos.
  </p>
</motion.section>

<motion.section
  style={{ willChange: "transform, opacity" }}
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.05 }}
>
  {/* Tools */}
  <section>
    <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">
      Tools
    </h2>

    <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
      Cameras & Gear:
    </h3>
    <div className="flex flex-wrap gap-2 mt-2 pl-12">
      <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Insta360 Ace Pro 2</span>
      <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">iPhone 15 Pro Max</span>
    </div>

    <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
      Editing Software:
    </h3>
    <div className="flex flex-wrap gap-2 mt-2 pl-12">
      <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Adobe Premiere Pro</span>
      <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">CapCut</span>
    </div>
  </section>

  {/* Contributions */}
  <h2 className="text-2xl font-neuestance-bold text-cyberpunk-wave font-bold border-l-4 border-cyan-400 pl-3 mt-6">
    Contributions
  </h2>

  <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
    1. Creative Direction
  </h3>
  <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
    <li>Conceptualize video ideas tailored to mood, story, or platform.</li>
    <li>Plan shoots with attention to composition, lighting, and motion.</li>
  </ul>

  <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
    2. Filming & Editing
  </h3>
  <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
    <li>Capture cinematic footage using handheld, drone, and stabilized gear.</li>
    <li>Edit videos with transitions, motion graphics, and sound design for maximum impact.</li>
  </ul>

  <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
    3. Storytelling & Presentation
  </h3>
  <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
    <li>Craft narrative-driven edits that guide viewers through a story.</li>
    <li>Adapt content for diverse formats — from Instagram reels to full-length website showcases.</li>
  </ul>

  <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">
    4. Collaboration & Experimentation
  </h3>
  <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
    <li>Work with clients, models, and brands to bring video projects to life.</li>
    <li>Experiment with slow motion, time-lapse, and creative editing techniques.</li>
  </ul>
</motion.section>

{/* Gallery */}
<section>
  <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
    Gallery
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
    {galleryItems.map((item, index) => {
  const isContain = item.fit === "contain";

  // Only apply fixed aspect class if fit is cover
  const aspectClass =
    !isContain && item.aspect === "9-16"
      ? "aspect-[9/16]"
      : !isContain
      ? "aspect-[16/9]"
      : ""; // empty class for contain -> shrink to image size

  const fitClass = item.fit === "cover" ? "object-cover" : "object-contain";

  return (
    <div
      key={index}
      className={`bg-cyan-900 bg-opacity-30 border border-cyan-700 overflow-hidden rounded-lg flex items-center justify-center ${aspectClass}`}
    >
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={`Gallery item ${index + 1}`}
          className={`w-full h-full ${fitClass}`}
        />
      ) : (
        <video
          src={item.src}
          controls
          className={`w-full h-full ${fitClass}`}
        />
      )}
    </div>
  );
})}
  </div>
</section>
<ContactForm topMargin="mt-8" transparent />
      </div>
    </motion.div>
  );
}
