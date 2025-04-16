
import { motion } from 'framer-motion';

interface SectionDividerProps {
  type?: 'wave' | 'angle' | 'curve' | 'triangle';
  color?: string;
  bgColor?: string;
  flip?: boolean;
}

const SectionDivider = ({ 
  type = 'wave', 
  color = 'text-white', 
  bgColor = 'fill-gray-50', 
  flip = false 
}: SectionDividerProps) => {
  const dividers = {
    wave: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`w-full ${color}`}>
        <path fill="currentColor" fillOpacity="1" d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,128C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    ),
    angle: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`w-full ${color}`}>
        <path fill="currentColor" fillOpacity="1" d="M0,288L1440,0L1440,320L0,320Z"></path>
      </svg>
    ),
    curve: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`w-full ${color}`}>
        <path fill="currentColor" fillOpacity="1" d="M0,256L60,224C120,192,240,128,360,106.7C480,85,600,107,720,149.3C840,192,960,256,1080,272C1200,288,1320,256,1380,240L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    ),
    triangle: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`w-full ${color}`}>
        <path fill="currentColor" fillOpacity="1" d="M0,0L1440,160L1440,320L0,320Z"></path>
      </svg>
    ),
  };

  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {dividers[type]}
      </motion.div>
    </div>
  );
};

export default SectionDivider;
