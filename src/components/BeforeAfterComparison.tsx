
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { useIsMobile } from "@/hooks/use-mobile";

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterComparison = ({
  beforeImage,
  afterImage,
  className = "",
}: BeforeAfterComparisonProps) => {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };

  return (
    <motion.div
      ref={containerRef}
      className={`before-after-comparison rounded-lg overflow-hidden shadow-xl relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        maxWidth: "100%",
        minHeight: isMobile ? "250px" : "400px",
      }}
    >
      <div className="comparison-container relative w-full h-full">
        {/* Before Image (Background) */}
        <div 
          className="before-image absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
        />
        
        {/* After Image (Overlay with clip) */}
        <div 
          className="after-image absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${afterImage})`,
            clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` 
          }}
        />
        
        {/* Slider Line */}
        <div 
          className="slider-line absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ 
            left: `${sliderValue}%`,
            transform: 'translateX(-50%)',
            zIndex: 20,
            cursor: 'ew-resize'
          }}
        >
          <div className="slider-handle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
            <div className="flex">
              <div className="w-1 h-4 bg-gray-400 mx-px rounded-full"></div>
              <div className="w-1 h-4 bg-gray-400 mx-px rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute bottom-3 left-3 bg-black/50 text-white px-2 py-1 text-xs rounded-md z-20">
          Antes
        </div>
        <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 text-xs rounded-md z-20">
          Depois
        </div>
      </div>
      
      <div className="mt-4 px-4">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          value={[sliderValue]}
          onValueChange={handleSliderChange}
          className="w-full"
        />
      </div>
    </motion.div>
  );
};

export default BeforeAfterComparison;
