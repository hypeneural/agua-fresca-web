
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=5548999232642"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Entre em contato via WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <div className="flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
          <motion.span 
            className="ml-2 hidden md:inline text-sm font-medium"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 0.3, delay: 1.5 }}
          >
            Fale Conosco
          </motion.span>
        </div>
      </div>
      <motion.span 
        className="absolute rounded-full bg-green-400 w-full h-full left-0 top-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      {/* Enhanced water-like animation */}
      <motion.div 
        className="absolute -inset-1 rounded-full"
        style={{ background: "rgba(20, 220, 100, 0.2)" }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      {/* Bubble animation */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${50 + (i * 15 - 15)}%`,
            top: `${-10 - i * 10}%`,
          }}
          animate={{
            y: [0, -20],
            x: [0, i % 2 === 0 ? 5 : -5],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            repeatDelay: i * 0.2,
          }}
        />
      ))}
    </motion.a>
  );
};

export default WhatsAppButton;
