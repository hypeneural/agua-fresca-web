
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WaterEffect3DProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  hoverEffect?: boolean;
}

const WaterEffect3D = ({ 
  children, 
  className = "", 
  intensity = 'medium',
  hoverEffect = true
}: WaterEffect3DProps) => {
  // Determine number of bubbles based on intensity
  const bubblesCount = intensity === 'light' ? 4 : intensity === 'medium' ? 8 : 12;
  
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px" 
      }}
      whileHover={hoverEffect ? { 
        z: 10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      } : undefined}
    >
      {/* Background gradient for 3D look */}
      <div className="absolute inset-0 bg-gradient-to-br from-pool-50/30 to-pool-200/20 z-0"></div>
      
      {/* Water bubbles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
        {[...Array(bubblesCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pool-500/20"
            style={{
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 20 - 10],
              opacity: [0, 0.7, 0],
              scale: [0, 1]
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      {/* Water ripple effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute rounded-full bg-pool-500/10"
          style={{
            width: "200%",
            height: "200%",
            left: "-50%",
            top: "-50%",
          }}
          animate={{
            scale: [0, 1],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
      
      {/* Content with 3D effect */}
      <motion.div 
        className="relative z-10"
        whileHover={hoverEffect ? { 
          rotateX: 5,
          rotateY: 5,
          translateZ: 20
        } : undefined}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
      
      {/* Subtle shimmer effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 to-transparent z-20"
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
    </motion.div>
  );
};

export default WaterEffect3D;
