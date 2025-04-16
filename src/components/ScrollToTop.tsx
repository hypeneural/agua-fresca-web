
import { ArrowUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      setIsVisible(value > 0.2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 bg-white text-pool-600 rounded-full p-3 shadow-lg hover:bg-pool-50 transition-colors duration-300"
      style={{ opacity }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Voltar ao topo"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        <ArrowUp size={20} />
      </motion.div>
    </motion.button>
  );
};

export default ScrollToTop;
