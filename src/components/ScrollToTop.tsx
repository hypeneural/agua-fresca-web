
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
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
      <div className="relative">
        {/* 3D layered effect */}
        <div className="absolute inset-0 bg-pool-700 rounded-full transform scale-105 blur-sm opacity-30"></div>
        <div className="absolute inset-0 bg-pool-600 rounded-full transform scale-102"></div>
        <div className="relative bg-gradient-to-br from-pool-500 to-pool-600 p-3 rounded-full text-white shadow-inner">
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
        </div>
      </div>
    </motion.button>
  );
};

export default ScrollToTop;
