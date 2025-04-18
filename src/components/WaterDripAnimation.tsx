
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WaterDripProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  color?: string;
  duration?: number;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Component that creates animated water drip effects
 */
const WaterDripAnimation = ({
  className = "",
  intensity = 'medium',
  color = 'rgb(14, 165, 233)',
  duration = 2,
  size = 'medium'
}: WaterDripProps) => {
  const [drips, setDrips] = useState<Array<{ id: number; x: number }>>([]);
  
  // Determine number of drips based on intensity
  const dripCount = intensity === 'light' ? 3 : intensity === 'medium' ? 6 : 10;
  
  // Determine size in pixels based on size prop
  const dripSize = size === 'small' ? 6 : size === 'medium' ? 10 : 15;
  
  useEffect(() => {
    // Create initial drips
    const initialDrips = Array.from({ length: dripCount }).map((_, idx) => ({
      id: idx,
      x: Math.random() * 100 // Random position across container width (%)
    }));
    
    setDrips(initialDrips);
    
    // Set interval to add new drips
    const interval = setInterval(() => {
      setDrips(prevDrips => {
        // Remove some old drips if there are too many
        if (prevDrips.length > dripCount * 2) {
          return [
            ...prevDrips.slice(-dripCount),
            { id: Date.now(), x: Math.random() * 100 }
          ];
        }
        
        // Add a new drip
        return [...prevDrips, { id: Date.now(), x: Math.random() * 100 }];
      });
    }, duration * 1000 / 2); // Create new drips at half the animation duration
    
    return () => clearInterval(interval);
  }, [dripCount, duration]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <AnimatePresence>
        {drips.map(drip => (
          <motion.div
            key={drip.id}
            className="absolute rounded-full z-10"
            style={{ 
              left: `${drip.x}%`,
              width: dripSize,
              height: dripSize,
              background: color,
              top: -dripSize
            }}
            initial={{ y: -dripSize, opacity: 0 }}
            animate={{
              y: ['0%', '120%'],
              opacity: [0, 0.7, 0.9, 0],
              scale: [1, 1.2, 1.5, 0.8, 0]
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1]
            }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default WaterDripAnimation;
