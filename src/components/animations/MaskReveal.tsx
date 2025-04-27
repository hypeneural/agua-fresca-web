
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MaskRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export const MaskReveal = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.8,
  once = true,
  className = ""
}: MaskRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.4 });
  
  // Determine animation direction
  const getAnimationVariants = () => {
    switch (direction) {
      case "right":
        return {
          hidden: { clipPath: "inset(0 100% 0 0)" },
          visible: { clipPath: "inset(0 0% 0 0)" }
        };
      case "top":
        return {
          hidden: { clipPath: "inset(100% 0 0 0)" },
          visible: { clipPath: "inset(0% 0 0 0)" }
        };
      case "bottom":
        return {
          hidden: { clipPath: "inset(0 0 100% 0)" },
          visible: { clipPath: "inset(0 0 0% 0)" }
        };
      case "left":
      default:
        return {
          hidden: { clipPath: "inset(0 0 0 100%)" },
          visible: { clipPath: "inset(0 0 0 0%)" }
        };
    }
  };
  
  const variants = getAnimationVariants();

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1] // cubic-bezier easing for smooth reveal
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MaskReveal;
