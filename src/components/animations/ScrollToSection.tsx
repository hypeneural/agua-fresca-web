
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface Section {
  id: string;
  label: string;
}

interface ScrollToSectionProps {
  sections: Section[];
  sectionOffset?: number;
  position?: "left" | "right";
  className?: string;
}

export const ScrollToSection = ({
  sections,
  sectionOffset = -80,
  position = "right",
  className = ""
}: ScrollToSectionProps) => {
  const [activeSection, setActiveSection] = useState("");
  
  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      let currentSection = "";

      // Find the current section based on scroll position
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (pageYOffset >= offsetTop - 150) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <motion.div 
      className={`fixed top-1/2 transform -translate-y-1/2 z-40 ${position === "left" ? "left-4" : "right-4"} ${className}`}
      initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <div className="flex flex-col items-center space-y-4">
        {sections.map(section => (
          <Link
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            offset={sectionOffset}
            duration={500}
            className="group relative"
          >
            <motion.div
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                activeSection === section.id ? "bg-pool-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <span 
              className={`absolute whitespace-nowrap px-2 py-1 text-xs rounded ${
                position === "left" ? "left-6" : "right-6"
              } top-1/2 -translate-y-1/2 bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity`}
            >
              {section.label}
            </span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollToSection;
