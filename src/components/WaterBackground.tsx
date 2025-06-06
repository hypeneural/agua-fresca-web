
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WaterBackgroundProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  color?: string;
}

const WaterBackground = ({ 
  className = "", 
  intensity = 'medium',
  color = 'rgba(14, 165, 233, 0.15)'
}: WaterBackgroundProps) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Determine number of bubbles based on intensity
  const bubblesCount = intensity === 'light' ? 6 : intensity === 'medium' ? 12 : 20;
  
  // Generate random position for bubbles
  const bubbles = Array.from({ length: bubblesCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage of width
    y: 100 + Math.random() * 50, // start below the container
    size: 10 + Math.random() * 40,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 5
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Subtle water wave background */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `linear-gradient(180deg, ${color} 0%, rgba(255,255,255,0) 100%)`
        }}
      />

      {/* Water ripples */}
      <div className="absolute inset-0">
        {bubbles.map(bubble => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: bubble.size,
              height: bubble.size,
              background: color,
              boxShadow: `0 0 10px ${color}, 0 0 20px ${color.replace(')', ', 0.5)')}`
            }}
            animate={{
              y: [-bubble.y, -150 - bubble.y],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Horizontal flowing wave */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'><path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%230ea5e9'></path><path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%230ea5e9'></path><path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%230ea5e9'></path></svg>")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '100% 100%'
          }}
          animate={{ x: [0, -width] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'><path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%230ea5e9'></path><path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%230ea5e9'></path><path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%230ea5e9'></path></svg>")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '100% 100%'
          }}
          animate={{ x: [-width, 0] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default WaterBackground;
