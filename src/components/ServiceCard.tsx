
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, className, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full relative overflow-hidden group",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Enhanced 3D Water-like background effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-pool-50 to-pool-500/20"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0) 50%)',
              'radial-gradient(circle at 70% 80%, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0) 50%)',
              'radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0) 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 3D floating bubbles */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {[...Array(6)].map((_, i) => (
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

      {/* Enhanced 3D Card effect */}
      <motion.div 
        className="relative z-10 h-full transform transition-all duration-300"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ 
          rotateY: 5,
          rotateX: -5,
          translateZ: 10
        }}
      >
        <motion.div 
          className="mb-4 bg-gradient-to-br from-pool-50 to-pool-100 p-3 rounded-lg inline-block text-pool-600 shadow-sm"
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 } 
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(20px)"
          }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        
        <h3 
          className="text-xl font-semibold mb-3 group-hover:text-pool-600 transition-colors"
          style={{ 
            transformStyle: "preserve-3d",
            transform: "translateZ(15px)"
          }}
        >
          {title}
        </h3>
        
        <p 
          className="text-gray-600"
          style={{ 
            transformStyle: "preserve-3d",
            transform: "translateZ(10px)"
          }}
        >
          {description}
        </p>

        {/* Enhanced water ripple effect on hover */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
          <motion.div 
            className="absolute inset-0 rounded-full bg-pool-500"
            animate={{ scale: [0, 2.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </div>
        
        {/* Bottom shine effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-0 group-hover:opacity-30"
          style={{
            background: "linear-gradient(to top, rgba(14, 165, 233, 0.2), transparent)",
            borderRadius: "0 0 0.75rem 0.75rem"
          }}
          animate={{
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
