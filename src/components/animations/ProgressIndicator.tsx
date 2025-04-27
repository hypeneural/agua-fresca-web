
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ProgressIndicatorProps {
  color?: string;
  height?: number;
  position?: "top" | "bottom";
  className?: string;
}

export const ProgressIndicator = ({
  color = "#0ea5e9", // pool-600 color
  height = 4,
  position = "top",
  className = ""
}: ProgressIndicatorProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Show only after scrolling starts
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      setIsVisible(v > 0.01);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  return (
    <motion.div
      className={`fixed left-0 right-0 z-50 ${position === "top" ? "top-0" : "bottom-0"} ${className}`}
      style={{
        height,
        backgroundColor: color,
        scaleX,
        transformOrigin: "left",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease"
      }}
    />
  );
};

export default ProgressIndicator;
