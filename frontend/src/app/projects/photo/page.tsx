
import { motion } from "framer-motion"; 
import Link from "next/link";
import ClickButton from "../../components/ClickButton";
import ContactForm from "../../components/ContactFormWrapper";

const projectMainImage = "/images/harrypotter_castle.webp";
const photo1 = "/images/photo1.webp";
const photo2= "/images/photo2.webp";
const photo3= "/images/photo3.webp";
const photo4 = "/images/photo4.webp";
const photo5= "/images/photo5.webp";
const photo6= "/images/photo6.webp";
const photo7 = "/images/photo7.webp";
const photo8= "/images/photo8.webp";
const photo9= "/images/photo9.webp";
const photo10 = "/images/photo10.webp";
const photo11= "/images/photo11.webp";
const photo12= "/images/photo12.webp";
const photo13= "/images/photo13.webp";
const photo14= "/images/photo14.webp";
const photo15= "/images/photo15.webp";
const photo16= "/images/photo16.webp";
const photo17= "/images/photo17.webp";
const photo18= "/images/photo18.webp";

// Define gallery items (images + videos)
const galleryItems = [
  { type: "image", src: photo1, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo2, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo3, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo4, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo17, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo6, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo7, aspect: "9-16", fit: "contain" },
  { type: "image", src: photo8, aspect: "9-16", fit: "contain" },
  { type: "image", src: photo9, aspect: "9-16", fit: "contain" },
  { type: "image", src: photo10, aspect: "9-16", fit: "contain" },
  { type: "image", src: photo11, aspect: "9-16", fit: "contain" },
  { type: "image", src: photo12, aspect: "9-16", fit: "contain" },
  { type: "image", src: photo13, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo14, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo15, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo16, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo5, aspect: "9-16", fit: "cover" },
  { type: "image", src: photo18, aspect: "9-16", fit: "cover" },
];

// Image fit configuration
const imageFitConfig = {
  mainImageFit: "contain", // "cover" or "contain"
  galleryFits: "contain",  // can be "cover" or "contain" for all gallery items
};
// Pre-render all possible project pages
export async function generateStaticParams() {
  const projects = [
    "menacity",
    "photo",
    "real_estate",
    "reddit_analysis",
    "talkify",
    "video",
    "website",
    "yelp_danalysis",
  ];

  return projects.map((project) => ({
    project,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: any){
  const projectSlug = params?.project || "Photography Showcase";
  const projectTitle = decodeURIComponent(projectSlug.replace(/-/g, " "));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-black via-[#001f2f] to-black text-cyan-400 p-6"
    >
      <div className="max-w-5xl mx-auto space-y-8">
<Link href="/portfolio">
  <ClickButton className="font-mono inline-block mb-4 px-4 py-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition rounded">
    ← Back to Projects
  </ClickButton>
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
          initial={{ x: -100, opacity: 0 }}  // start off-screen to the left
          animate={{ x: 0, opacity: 1 }}     // slide in to normal position
          transition={{ duration: 0.8, ease: "easeOut" }} // smooth animation
          viewport={{ once: true, amount: 0.5 }}
          >
          <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">About</h2>
          <p className="text-cyan-200 mt-2">Photography has always been a way for me to capture stories, memories, and perspectives 
            that words can’t fully express. My work spans portraits, landscapes, and lifestyle photography, with an emphasis on creating
             visually striking images that balance mood, composition, and color. I enjoy blending technical precision with creative 
             freedom, whether I’m shooting in natural light or crafting a look in post-production.
          </p>
        </motion.section>

        <motion.section
        style={{ willChange: "transform, opacity" }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.05 }}
        >

        {/* Tech Stack */}
        <section>
          <h2 className="font-neuestance-bold text-2xl font-bold border-l-4 text-cyberpunk-wave border-cyan-400 pl-3">Tools</h2>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Cameras:</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Fuji Film X100T</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Insta360 Ace Pro 2</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Iphone 15 Pro Max</span>
          </div>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">Editing Software:</h3>
          <div className="flex flex-wrap gap-2 mt-2 pl-12">
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Lightroom</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Adobe Photoshop</span>
            <span className="bg-cyan-800 text-white px-3 py-1 rounded-full text-sm">Canva</span>
          </div>
        </section>    

       {/* Contributions*/}
<h2 className="text-2xl font-neuestance-bold text-cyberpunk-wave font-bold border-l-4 border-cyan-400 pl-3 mt-6">Contributions</h2>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">1. Creative Direction</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Develop unique concepts for shoots, from urban exploration to stylized portraits.</li>
  <li>Plan and stage compositions that highlight subject matter and environment.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">2. Photography & Editing</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Capture high-resolution images with attention to lighting, framing, and detail.</li>
  <li>Enhance and refine photos using Lightroom presets and custom edits.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">3. Storytelling & Presentation</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Curate collections that emphasize narrative flow, mood, and style consistency.</li>
  <li>Optimize photography for diverse formats, including Instagram content and high-quality website displays.</li>
</ul>

<h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">4. Collaboration & Experimentation</h3>
<ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
  <li>Work with models and creatives to bring shared visions to life.</li>
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
