
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
        "bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full",
        className
      )}
    >
      <motion.div 
        className="mb-4 bg-pool-50 p-3 rounded-lg inline-block text-pool-600"
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 } 
        }}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-pool-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
