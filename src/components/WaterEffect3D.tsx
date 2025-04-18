
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
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      } : undefined}
    >
      {/* Background gradient for 3D look */}
      <div className="absolute inset-0 bg-gradient-to-br from-pool-50/30 to-pool-200/20 z-0"></div>
      
      {/* Water bubbles effect - simplified to prevent errors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: bubblesCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pool-500/20"
            style={{
              width: Math.floor(Math.random() * 30 + 10),
              height: Math.floor(Math.random() * 30 + 10),
              left: `${Math.floor(Math.random() * 100)}%`,
              top: `${Math.floor(Math.random() * 100)}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      {/* Content with 3D effect */}
      <div className="relative z-10">
        {children}
      </div>
      
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
