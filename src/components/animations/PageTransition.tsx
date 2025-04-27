
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useAnimation } from "./AnimationProvider";

interface PageTransitionProps {
  children: ReactNode;
  mode?: "fade" | "slide" | "scale" | "none";
  duration?: number;
  className?: string;
}

export const PageTransition = ({ 
  children, 
  mode = "fade", 
  duration = 0.5,
  className = "" 
}: PageTransitionProps) => {
  const location = useLocation();
  const { shouldReduceMotion } = useAnimation();

  // If user prefers reduced motion, skip animations
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Animation variants based on mode
  const getVariants = () => {
    switch (mode) {
      case "slide":
        return {
          initial: { x: 20, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -20, opacity: 0 }
        };
      case "scale":
        return {
          initial: { scale: 0.95, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.95, opacity: 0 }
        };
      case "none":
        return {
          initial: {},
          animate: {},
          exit: {}
        };
      case "fade":
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const variants = getVariants();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{
          duration,
          ease: [0.22, 1, 0.36, 1] // Custom easing for smooth transition
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
