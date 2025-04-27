
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxEffectProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Positive values move slower, negative values move faster
  direction?: "vertical" | "horizontal";
  offset?: [number, number]; // [start, end] in viewport percentage
}

export const ParallaxEffect = ({
  children,
  className = "",
  speed = 0.5,
  direction = "vertical",
  offset = [0.3, 1],
}: ParallaxEffectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  });

  // Calculate transform based on direction
  const transform = direction === "vertical" 
    ? useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 30}%`])
    : useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 20}%`]);

  const transformProperty = direction === "vertical" ? "y" : "x";

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          [transformProperty]: transform,
          willChange: "transform"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxEffect;
