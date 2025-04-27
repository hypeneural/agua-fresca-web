
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const getDirectionVariants = (direction: string) => {
  const variants = {
    hidden: {},
    visible: {}
  };

  switch (direction) {
    case "up":
      variants.hidden = { y: 50, opacity: 0 };
      variants.visible = { y: 0, opacity: 1 };
      break;
    case "down":
      variants.hidden = { y: -50, opacity: 0 };
      variants.visible = { y: 0, opacity: 1 };
      break;
    case "left":
      variants.hidden = { x: 50, opacity: 0 };
      variants.visible = { x: 0, opacity: 1 };
      break;
    case "right":
      variants.hidden = { x: -50, opacity: 0 };
      variants.visible = { x: 0, opacity: 1 };
      break;
    default:
      variants.hidden = { opacity: 0 };
      variants.visible = { opacity: 1 };
  }

  return variants;
};

export const AnimatedSection = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.3
}: AnimatedSectionProps) => {
  const variants = getDirectionVariants(direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
