
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { useIsMobile } from "@/hooks/use-mobile";

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterComparison = ({
  beforeImage,
  afterImage,
  className = "",
  beforeLabel = "Antes",
  afterLabel = "Depois"
}: BeforeAfterComparisonProps) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const isMobile = useIsMobile();
  
  // Preload images to avoid layout issues
  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = (err) => reject(err);
        });
      };

      try {
        await Promise.all([loadImage(beforeImage), loadImage(afterImage)]);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        // Still set to true to avoid blocking UI
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, [beforeImage, afterImage]);

  // Animate when in view
  useEffect(() => {
    if (isInView && imagesLoaded) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      });
    }
  }, [isInView, imagesLoaded, controls]);
  
  // Handle slider value change
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };
  
  // Drag handler to allow direct interaction with the divider
  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    
    const x = Math.max(0, Math.min(pageX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    
    setSliderValue(percentage);
  };
  
  // Setup mouse/touch events
  const handleDragStart = () => {
    window.addEventListener('mousemove', handleDrag as any);
    window.addEventListener('touchmove', handleDrag as any);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
  };
  
  const handleDragEnd = () => {
    window.removeEventListener('mousemove', handleDrag as any);
    window.removeEventListener('touchmove', handleDrag as any);
    window.removeEventListener('mouseup', handleDragEnd);
    window.removeEventListener('touchend', handleDragEnd);
  };

  return (
    <motion.div
      ref={containerRef}
      className={`before-after-comparison rounded-lg overflow-hidden shadow-xl relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      style={{
        maxWidth: "100%",
        minHeight: isMobile ? "250px" : "400px",
      }}
    >
      {imagesLoaded ? (
        <>
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
            <motion.div 
              className="slider-line absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
              style={{ 
                left: `${sliderValue}%`,
                transform: 'translateX(-50%)',
                zIndex: 20,
              }}
              whileHover={{ scale: [null, 1.1, 1.05] }}
              transition={{ duration: 0.3 }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <motion.div 
                className="slider-handle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="flex">
                  <div className="w-1 h-4 bg-gray-400 mx-px rounded-full"></div>
                  <div className="w-1 h-4 bg-gray-400 mx-px rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Labels */}
            <motion.div 
              className="absolute bottom-3 left-3 bg-black/50 text-white px-2 py-1 text-xs rounded-md z-20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {beforeLabel}
            </motion.div>
            <motion.div 
              className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 text-xs rounded-md z-20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {afterLabel}
            </motion.div>
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
        </>
      ) : (
        // Skeleton loading state
        <div className="w-full h-full flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="text-gray-400">Carregando comparação...</div>
        </div>
      )}
    </motion.div>
  );
};

export default BeforeAfterComparison;
