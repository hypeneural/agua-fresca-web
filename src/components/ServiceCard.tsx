
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
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full relative overflow-hidden group",
        className
      )}
    >
      {/* Water-like background effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <motion.div 
          className="absolute inset-0 bg-pool-500/20"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0) 50%)',
              'radial-gradient(circle at 70% 80%, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0) 50%)',
              'radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0) 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 3D Card effect */}
      <div className="relative z-10 h-full transform transition-transform duration-300 group-hover:translate-z-10">
        <motion.div 
          className="mb-4 bg-gradient-to-br from-pool-50 to-pool-100 p-3 rounded-lg inline-block text-pool-600 shadow-sm"
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 } 
          }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-pool-600 transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>

        {/* Subtle water ripple effect on hover */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
          <motion.div 
            className="absolute inset-0 rounded-full bg-pool-500"
            animate={{ scale: [0, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
