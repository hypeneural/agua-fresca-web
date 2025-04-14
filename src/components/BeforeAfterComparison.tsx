
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterComparison = ({
  beforeImage,
  afterImage,
  className = "",
}: BeforeAfterComparisonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load JuxtaposeJS library dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Add JuxtaposeJS styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css";
    document.head.appendChild(link);

    // Initialize JuxtaposeJS when script is loaded
    script.onload = () => {
      if (containerRef.current && window.juxtapose) {
        window.juxtapose.scanPage();
      }
    };

    return () => {
      // Clean up
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, [beforeImage, afterImage]);

  return (
    <motion.div
      ref={containerRef}
      className={`juxtapose-container rounded-lg overflow-hidden shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="juxtapose" data-startingposition="50">
        <img src={beforeImage} alt="Antes" />
        <img src={afterImage} alt="Depois" />
      </div>
    </motion.div>
  );
};

export default BeforeAfterComparison;
