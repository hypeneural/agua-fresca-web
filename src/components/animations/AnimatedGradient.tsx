
import { motion } from "framer-motion";
import { useRef } from "react";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
  colorFrom?: string;
  colorTo?: string;
  duration?: number;
  direction?: "diagonal" | "horizontal" | "vertical";
}

export const AnimatedGradient = ({
  className = "",
  children,
  colorFrom = "#0ea5e9",
  colorTo = "#0284c7",
  duration = 5,
  direction = "diagonal"
}: AnimatedGradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Setup direction for gradient
  const getGradient = () => {
    switch (direction) {
      case "horizontal":
        return `linear-gradient(to right, ${colorFrom}, ${colorTo})`;
      case "vertical":
        return `linear-gradient(to bottom, ${colorFrom}, ${colorTo})`;
      case "diagonal":
      default:
        return `linear-gradient(135deg, ${colorFrom}, ${colorTo})`;
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: getGradient(),
          backgroundSize: "200% 200%"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      {children}
    </div>
  );
};

export default AnimatedGradient;
