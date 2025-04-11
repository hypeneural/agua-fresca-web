
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group",
      className
    )}>
      <div className="mb-4 bg-pool-50 p-3 rounded-lg inline-block text-pool-600 group-hover:bg-pool-100 transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-pool-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
