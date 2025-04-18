
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import WaterEffect3D from './WaterEffect3D';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        exit={{ opacity: 0, y: 20 }}
        layout
      >
        <WaterEffect3D className="h-full" intensity="light">
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow h-full relative overflow-hidden">
            <motion.div
              className="absolute -bottom-2 -right-2 w-24 h-24 bg-pool-100 rounded-full opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <div className="flex flex-col h-full relative z-10">
              <div className="mb-4 flex items-center">
                <motion.div
                  className="bg-pool-100 p-3 rounded-lg mr-3 text-pool-600"
                  whileHover={{ rotate: 10 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              </div>
              
              <p className="text-gray-600 flex-grow">{description}</p>
              
              <motion.div
                className="mt-4 self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="text-pool-600 font-medium flex items-center text-sm">
                  <span>Saiba mais</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </motion.svg>
                </button>
              </motion.div>
            </div>
          </div>
        </WaterEffect3D>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceCard;
