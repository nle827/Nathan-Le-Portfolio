'use client';
import { motion } from "framer-motion"; 
import Link from "next/link";
import { useButtonClickSound } from "../../utils/buttonClickSound";
import { useButtonHoverSound } from "../../utils/buttonHoverSound";
import ContactForm from "../../components/ContactForm";

// Public images
const projectMainImage = "/images/menacity_logo.webp";
const menacity1 = "/images/menacity1n.webp";
const menacity2 = "/images/menacity2n.webp";
const menacity3= "/images/menacity3n.webp";
const menacity4 = "/images/menacity4n.webp";
const menacity5 = "/images/menacity6n.webp";
const menacity6= "/images/menacity7n.webp";
const menacity7= "/images/menacity5n.webp";
const menacity8= "/images/menacity8n.webp";
const menacity9= "/images/menacity9n.webp";

// Image fit config
const imageFitConfig = {
  mainImageFit: "contain",
  galleryFits: ["cover","cover","cover","cover","cover","cover","cover","cover","cover"],
};

const galleryAspectRatios = ["9-16","9-16","9-16","9-16","9-16","9-16","9-16","9-16","9-16"]; 

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

// Make the page async so Next.js types are satisfied
export default async function ProjectDetailsPage({
  params,
}: any) {
  const projectSlug = params?.project || "Menacity Clothing";
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
        <Link href="/portfolio">
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

          <a
            href="https://www.menacityclothing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="font-mono inline-block px-4 py-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition rounded"
            >
              View Website
            </button>
          </a>
        </div>

        {/* Main Image */}
        <div className="w-full h-64 bg-black border border-cyan-700 rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
          <img
            src={projectMainImage}
            alt={`${projectTitle} main image`}
            className={`${
              imageFitConfig.mainImageFit === "cover"
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
          <p className="text-cyan-200 mt-2">
            I founded Menacity Clothing, an independent streetwear brand that blends anime culture with minimalist and modern design. 
            As the sole creative and operational lead, I oversaw every aspect of the brand’s creation. This includes creating concepts
             and visual identity, product development, e-commerce, and marketing. This project reflects my ability to merge design,
              branding, and technology to execute a cohesive business vision. 
          </p>
        </motion.section>

        <motion.section
        style={{ willChange: "transform, opacity" }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.05 }}
        >

        {/* Contributions*/}
          <h2 className="text-2xl font-neuestance-bold text-cyberpunk-wave font-bold border-l-4 border-cyan-400 pl-3 mt-6">Contributions</h2>
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">1. Entrepreneurial Impact</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Founded and scaled a fashion brand, leveraging social media marketing to grow a community of over 60,000 people.</li>
            <li>Designed and developed a user friendly website, attracting 150,000+ user sessions within 2 years.</li>
            <li>Generated $62,000 in sales within 5 months using audience segmentation, ensuring personalized outreach and increased conversions.</li>
          </ul>

          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">2. Brand Identity & Design</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Designed the logo, slogan, and brand visuals to communicate a sleek, modern urban aesthetic.</li>
            <li>Created garment graphics (technical packs) and mockups using Adobe Illustrator and Photoshop.</li>
            <li>Developed social media and promotional graphics for product launches and campaigns.</li>
            <li>Curated a visual tone inspired by street culture, minimalism, and modern day trends.</li>
          </ul>

        {/* Tech Stack */}
        {/*<section>
          <h2 className="text-2xl font-bold border-l-4 border-cyan-400 pl-3 mt-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-cyan-800 text-cyan-100 px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-cyan-800 text-cyan-100 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            <span className="bg-cyan-800 text-cyan-100 px-3 py-1 rounded-full text-sm">TypeScript</span>
          </div>
        </section> */}
        
          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">3. E-Commerce  Development</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Built a fully functional Shopify storefront, customizing the theme to reflect the brand’s style.</li>
            <li>Optimized homepage layout, product pages, and checkout experience for visual impact and conversion.</li>
            <li>Implemented basic Liquid edits for custom sections and promotional features.</li>
            <li>Integrated analytics and marketing tools for sales tracking and performance insights.</li>
          </ul>

          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">4. Marketing & Content Creation</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Directed product and lifestyle photo shoots to showcase the clothing in real-world contexts.</li>
            <li>Edited photos with a consistent aesthetic for use across the website and social media platforms.</li>
            <li>Designed and produced Instagram posts, Tiktok posts, Meta Ads, story campaigns, and teaser visuals to grow brand presence.</li>
            <li>Leveraged email segmentation and automation with email campaigns and promotional content to announce drops and sales.</li>
          </ul>

          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">5. Supply Chain & Vendor Management</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Sourced and coordinated with overseas manufacturers to produce high-quality garments according to brand specifications.</li>
            <li>Managed communication and timelines for sample approval, production schedules, and bulk orders.</li>
            <li>Negotiated pricing, minimum order quantities (MOQs), and production and shipping terms to balance cost efficiency and quality.</li>
           </ul>

          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">6. Inventory & Product Management</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Oversaw inventory planning and tracking to manage stock levels across product launches.</li>
            <li>Implemented SKU tracking and product categorization for both online and offline use.</li>
            <li>Planned limited drops and restocks to maintain exclusivity and brand interest.</li>
           </ul>

          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">7. Logistics & Shipping</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Managed international shipping and customs coordination for product import.</li>
            <li>Designed packaging and unboxing experience, including branded poly mailers and thank-you cards.</li>
            <li>Handled domestic shipping and order fulfillment, ensuring timely delivery and accurate tracking.</li>
           </ul>

          <h3 className="text-xl font-bold text-metallic border-l-4 border-cyan-400 pl-6 mt-3">8. Business Operations & Customer Experience</h3>
          <ul className="list-disc list-inside text-cyan-200 pl-12 mt-2">
            <li>Oversaw order processing and customer support, handling inquiries and feedback.</li>
            <li>Maintained Shopify analytics to track order trends, returns, and customer engagement.</li>
            <li>Balanced operations and marketing schedules for smooth product launches and fulfillment cycles.</li>
           </ul>
        </motion.section>

                {/* Gallery */}
        <section>
          <h2 className="text-2xl font-bold font-neuestance-bold text-cyberpunk-wave border-l-4 border-cyan-400 pl-3 mt-6">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {[menacity1, menacity2, menacity3, menacity7, menacity4, menacity6, menacity5, menacity8, menacity9].map((img, index) => {
              const aspect = galleryAspectRatios[index] || "16-9";
              const aspectClass = aspect === "9-16" ? "aspect-[9/16]" : "aspect-[16/9]";
              return (
                <div
                  key={index}
                  className={`bg-cyan-900 bg-opacity-30 border border-cyan-700 overflow-hidden rounded-lg flex items-center justify-center ${aspectClass}`}
                >
                  <img
                    src={img}
                    width={600}
                    height={1066}
                    alt={`${projectTitle} gallery image ${index + 1}`}
                    className={`${
                      imageFitConfig.galleryFits[index] === "cover"
                        ? "w-full h-full object-cover"
                        : "max-w-full max-h-full object-contain"
                    }`}
                  />
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