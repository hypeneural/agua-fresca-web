
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const ProjectCard = ({ title, description, image, className }: ProjectCardProps) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300",
      className
    )}>
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
