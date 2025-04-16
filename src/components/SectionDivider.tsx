
import { motion } from 'framer-motion';

interface SectionDividerProps {
  type?: 'wave' | 'angle' | 'curve' | 'triangle' | 'water';
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className={`w-full ${color} translate-y-1`} preserveAspectRatio="none">
        <path fill="currentColor" fillOpacity="1" d="M0,64L60,69.3C120,75,240,85,360,82.7C480,80,600,64,720,64C840,64,960,80,1080,82.7C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
      </svg>
    ),
    angle: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className={`w-full ${color} translate-y-1`} preserveAspectRatio="none">
        <path fill="currentColor" fillOpacity="1" d="M0,96L1440,0L1440,120L0,120Z"></path>
      </svg>
    ),
    curve: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className={`w-full ${color} translate-y-1`} preserveAspectRatio="none">
        <path fill="currentColor" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,42.7C480,32,600,43,720,53.3C840,64,960,85,1080,90.7C1200,96,1320,85,1380,80L1440,75L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
      </svg>
    ),
    triangle: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className={`w-full ${color} translate-y-1`} preserveAspectRatio="none">
        <path fill="currentColor" fillOpacity="1" d="M0,0L1440,96L1440,120L0,120Z"></path>
      </svg>
    ),
    water: (
      <div className="relative w-full h-24 overflow-hidden">
        <div className={`absolute inset-0 ${color}`}>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-24"
            initial={{ backgroundPositionX: '0%' }}
            animate={{ backgroundPositionX: '100%' }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 15,
              ease: "linear"
            }}
            style={{
              background: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'><path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25'></path><path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5'></path><path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'></path></svg>")`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: '100% 100%'
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-24"
            initial={{ backgroundPositionX: '100%' }}
            animate={{ backgroundPositionX: '0%' }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 20,
              ease: "linear"
            }}
            style={{
              background: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'><path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25'></path><path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5'></path><path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'></path></svg>")`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: '100% 100%',
              opacity: 0.7
            }}
          />
        </div>
      </div>
    ),
  };

  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-auto"
      >
        {dividers[type]}
      </motion.div>
    </div>
  );
};

export default SectionDivider;
