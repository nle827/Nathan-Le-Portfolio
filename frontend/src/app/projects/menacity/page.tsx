"use client";

import ProjectDetailsClient, {
  Contribution,
  GalleryItem,
} from "../../components/ProjectDetailsClient";
import ContactFormWrapper from "../../components/ContactFormWrapper";

// Main project image
const projectMainImage = "/images/menacity_logo.webp";

// About text
const aboutText = `I founded Menacity Clothing, an independent streetwear brand that blends anime culture with minimalist and modern design. 
As the sole creative and operational lead, I oversaw every aspect of the brand’s creation, including visual identity, product development, e-commerce, and marketing. 
This project reflects my ability to merge design, branding, and technology to execute a cohesive business vision.`;

// Contributions
const contributions: Contribution[] = [
  {
    heading: "1. Entrepreneurial Impact",
    items: [
      "Founded and scaled a fashion brand, leveraging social media marketing to grow a community of over 60,000 people.",
      "Designed and developed a user-friendly website, attracting 150,000+ user sessions within 2 years.",
      "Generated $62,000 in sales within 5 months using audience segmentation, ensuring personalized outreach and increased conversions.",
    ],
  },
  {
    heading: "2. Brand Identity & Design",
    items: [
      "Designed the logo, slogan, and brand visuals to communicate a sleek, modern urban aesthetic.",
      "Created garment graphics (technical packs) and mockups using Adobe Illustrator and Photoshop.",
      "Developed social media and promotional graphics for product launches and campaigns.",
      "Curated a visual tone inspired by street culture, minimalism, and modern day trends.",
    ],
  },
  {
    heading: "3. E-Commerce Development",
    items: [
      "Built a fully functional Shopify storefront, customizing the theme to reflect the brand’s style.",
      "Optimized homepage layout, product pages, and checkout experience for visual impact and conversion.",
      "Implemented basic Liquid edits for custom sections and promotional features.",
      "Integrated analytics and marketing tools for sales tracking and performance insights.",
    ],
  },
  {
    heading: "4. Marketing & Content Creation",
    items: [
      "Directed product and lifestyle photo shoots to showcase the clothing in real-world contexts.",
      "Edited photos with a consistent aesthetic for use across the website and social media platforms.",
      "Designed and produced Instagram, TikTok, and Meta content to grow brand presence.",
      "Leveraged email segmentation and automation for campaigns announcing drops and sales.",
    ],
  },
  {
    heading: "5. Supply Chain & Vendor Management",
    items: [
      "Sourced and coordinated with overseas manufacturers to produce high-quality garments according to brand specifications.",
      "Managed communication and timelines for sample approval, production schedules, and bulk orders.",
      "Negotiated pricing, MOQs, and production/shipping terms to balance cost efficiency and quality.",
    ],
  },
  {
    heading: "6. Inventory & Product Management",
    items: [
      "Oversaw inventory planning and tracking to manage stock levels across product launches.",
      "Implemented SKU tracking and product categorization for both online and offline use.",
      "Planned limited drops and restocks to maintain exclusivity and brand interest.",
    ],
  },
  {
    heading: "7. Logistics & Shipping",
    items: [
      "Managed international shipping and customs coordination for product import.",
      "Designed packaging and unboxing experience, including branded poly mailers and thank-you cards.",
      "Handled domestic shipping and order fulfillment, ensuring timely delivery and accurate tracking.",
    ],
  },
  {
    heading: "8. Business Operations & Customer Experience",
    items: [
      "Oversaw order processing and customer support, handling inquiries and feedback.",
      "Maintained Shopify analytics to track order trends, returns, and customer engagement.",
      "Balanced operations and marketing schedules for smooth product launches and fulfillment cycles.",
    ],
  },
];

// Gallery images
const galleryItems: GalleryItem[] = [
  { type: "image", src: "/images/menacity1n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity2n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity3n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity7n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity4n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity6n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity5n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity8n.webp", aspect: "9-16", fit: "cover" },
  { type: "image", src: "/images/menacity9n.webp", aspect: "9-16", fit: "cover" },
];

// Image fit configuration
const imageFitConfig = {
  mainImageFit: "contain" as const,
  galleryFits: galleryItems.map(() => "cover" as const),
};

export default function MenacityPage() {
  return (
    <ProjectDetailsClient
      title="Menacity Clothing"
      about={aboutText}
      mainImage={projectMainImage}
      imageFitConfig={imageFitConfig}
      galleryItems={galleryItems}
      contributions={contributions}
      galleryCols={3}
      url="https://www.menacityclothing.com"
    />
  );
}
