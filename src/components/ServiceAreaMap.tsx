
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ServiceAreaMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This function would initialize a map with a radius circle
    // In a real implementation, you'd use Google Maps API or similar
    const initMap = () => {
      if (mapRef.current) {
        // Example implementation of drawing a circle around Tijucas will be 
        // handled by the embedded iframe for simplicity
      }
    };
    
    initMap();
  }, []);

  return (
    <motion.div 
      className="relative rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-80 bg-white rounded-lg overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114009.75874740956!2d-48.68956848269856!3d-27.322352022478933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8ab9eaf12f3bb%3A0x2b11e2f8ec5cd90c!2sTijucas%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1713301230780!5m2!1spt-BR!2sbr"
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Mapa da área de atendimento"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="absolute top-4 left-4 z-10 bg-white p-2 rounded-md shadow-md">
        <div className="flex items-center text-sm">
          <div className="w-3 h-3 bg-pool-600 rounded-full mr-2"></div>
          <span>Tijucas (Base)</span>
        </div>
        <div className="flex items-center text-sm mt-1">
          <div className="w-3 h-3 border border-pool-600 rounded-full mr-2"></div>
          <span>Raio de atendimento (50km)</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceAreaMap;
