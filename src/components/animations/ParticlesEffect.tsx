
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface ParticlesEffectProps {
  className?: string;
  color?: string;
  count?: number;
  type?: 'circle' | 'square' | 'water';
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  minDelay?: number;
  maxDelay?: number;
}

export const ParticlesEffect = ({
  className = "",
  color = "rgba(14, 165, 233, 0.5)", // pool-500 with opacity
  count = 15,
  type = 'water',
  minSize = 5,
  maxSize = 20,
  minDuration = 5,
  maxDuration = 15,
  minDelay = 0,
  maxDelay = 10
}: ParticlesEffectProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize particles
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // percentage of container width
        y: Math.random() * 100, // percentage of container height
        size: minSize + Math.random() * (maxSize - minSize),
        duration: minDuration + Math.random() * (maxDuration - minDuration),
        delay: minDelay + Math.random() * (maxDelay - minDelay),
        opacity: 0.3 + Math.random() * 0.7
      });
    }
    
    setParticles(newParticles);
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [count, minSize, maxSize, minDuration, maxDuration, minDelay, maxDelay]);

  const getParticleShape = (type: string) => {
    switch (type) {
      case 'square':
        return "rounded-sm";
      case 'water':
        return "rounded-full drop-shadow-lg";
      case 'circle':
      default:
        return "rounded-full";
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className={`absolute ${getParticleShape(type)}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            opacity: particle.opacity
          }}
          animate={type === 'water' ? {
            y: [0, -150 - Math.random() * 150],
            opacity: [0, particle.opacity, 0],
            scale: [0.5, 1, 0.8]
          } : {
            x: [0, (Math.random() * 100) - 50],
            y: [0, (Math.random() * 100) - 50],
            opacity: [0, particle.opacity, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesEffect;
