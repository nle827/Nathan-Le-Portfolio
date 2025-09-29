import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";

const aboutText = `Hi, I'm Nathan Le, a detail-oriented professional with a background in computer science, web development,
 digital marketing, and design. I am passionate about problem-solving, project management, and creative solutions. Currently seeking
 opportunities to contribute technical, analytical, and creative expertise to drive impactful results in a dynamic work environment.`;

const skills = {
  Languages: ["C++", "C", "Python", "JavaScript", "SQL", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion", "Flask", "PySpark", "SparkSQL"],
  Tools: ["Git/GitHub", "Adobe Photoshop", "Illustrator", "Premiere Pro", "Lightroom", "Figma", "Canva", "CapCut"],
};

const education = [
  {
    school: "University of California, Riverside",
    degree: "B.S. Computer Science",
    notes: "Graduated from UCR's Marlan and Rosemary Bourns College of Engineering with a focus in Computer Science. Involved in Student Body Government as a Senator.",
  },
];

const contactInfo = [
  { label: "Name:", value: "Nathan Le" },
  { label: "Email:", value: "nathanale27@gmail.com" },
  { label: "Location:", value: "Los Angeles, CA" },
  { label: "Availability:", value: "Available for hire" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#001f2f] to-black text-cyan-400 p-6 md:p-12">
      <AboutSection
        aboutText={aboutText}
        skills={skills}
        education={education}
        contactInfo={contactInfo}
      />
      
       <ContactForm topMargin="mt-8" transparent />
    </div>
  );
}
