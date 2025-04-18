
import { ReactNode } from 'react';
import WaterDripAnimation from './WaterDripAnimation';
import { motion } from 'framer-motion';

interface HeroWaterEffectsProps {
  children: ReactNode;
}

const HeroWaterEffects = ({ children }: HeroWaterEffectsProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Left side water drips */}
      <WaterDripAnimation 
        className="absolute left-0 top-0 h-full w-1/5"
        intensity="medium"
        color="rgba(14, 165, 233, 0.4)"
        size="medium"
        duration={2.5}
      />
      
      {/* Right side water drips */}
      <WaterDripAnimation 
        className="absolute right-0 top-0 h-full w-1/5"
        intensity="light"
        color="rgba(14, 165, 233, 0.3)"
        size="large"
        duration={3.5}
      />
      
      {/* Moving wave effect at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-12 opacity-20"
        style={{
          background: "linear-gradient(90deg, rgba(14,165,233,0) 0%, rgba(14,165,233,0.7) 50%, rgba(14,165,233,0) 100%)"
        }}
        animate={{
          x: ["-100%", "100%"]
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default HeroWaterEffects;
