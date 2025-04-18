
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";

const CustomServiceAreaMap = () => {
  const [showCities, setShowCities] = useState(false);
  
  const centralCity = "Tijucas";
  
  const nearbyMajorCities = [
    { name: "Balneário Camboriú", distance: "35km", direction: "Norte" },
    { name: "Itapema", distance: "22km", direction: "Norte" },
    { name: "Porto Belo", distance: "18km", direction: "Nordeste" },
    { name: "Bombinhas", distance: "28km", direction: "Nordeste" },
    { name: "São João Batista", distance: "15km", direction: "Oeste" },
    { name: "Canelinha", distance: "10km", direction: "Oeste" },
    { name: "Nova Trento", distance: "20km", direction: "Oeste" },
    { name: "Biguaçu", distance: "30km", direction: "Sul" },
    { name: "Florianópolis", distance: "50km", direction: "Sul" },
    { name: "Governador Celso Ramos", distance: "42km", direction: "Sul" },
    { name: "Brusque", distance: "35km", direction: "Noroeste" },
    { name: "Itajaí", distance: "28km", direction: "Norte" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 bg-pool-50">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-pool-800 mb-2 md:mb-0">
            Área de Cobertura: 50km
          </h4>
          <button 
            onClick={() => setShowCities(!showCities)}
            className="bg-pool-600 hover:bg-pool-500 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300 flex items-center"
          >
            {showCities ? "Ocultar cidades" : "Ver cidades atendidas"}
            <motion.span 
              animate={{ rotate: showCities ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-2"
            >
              ▼
            </motion.span>
          </button>
        </div>
        
        <div className="relative w-full h-64 bg-blue-50 rounded-lg overflow-hidden">
          {/* Simple map visualization */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
            {/* Decorative water elements */}
            <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-blue-300/30 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-400/20 rounded-full"></div>
            
            {/* Central city marker */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-pool-600 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="mt-1 px-2 py-1 bg-white rounded-md shadow-md">
                  <p className="text-xs font-semibold text-pool-800">{centralCity}</p>
                </div>
              </div>
            </motion.div>
            
            {/* 50km radius circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-2 border-dashed border-pool-400/40 rounded-full"></div>
            
            {/* Nearby cities */}
            {showCities && nearbyMajorCities.map((city, index) => {
              // Calculate position based on direction
              const getPosition = () => {
                const baseDistance = 120; // pixels from center
                
                switch(city.direction) {
                  case "Norte": return { top: "10%", left: "50%" };
                  case "Nordeste": return { top: "20%", left: "75%" };
                  case "Leste": return { top: "50%", left: "85%" };
                  case "Sudeste": return { top: "70%", left: "75%" };
                  case "Sul": return { top: "85%", left: "50%" };
                  case "Sudoeste": return { top: "70%", left: "25%" };
                  case "Oeste": return { top: "50%", left: "15%" };
                  case "Noroeste": return { top: "20%", left: "25%" };
                  default: return { 
                    top: `${30 + Math.random() * 40}%`, 
                    left: `${30 + Math.random() * 40}%` 
                  };
                }
              };
              
              const { top, left } = getPosition();
              
              return (
                <motion.div 
                  key={index}
                  className="absolute"
                  style={{ top, left }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <div className="flex flex-col items-center transform -translate-x-1/2">
                    <div className="w-3 h-3 bg-pool-500 rounded-full"></div>
                    <div className="mt-1 px-2 py-1 bg-white/80 backdrop-blur-sm rounded shadow-sm">
                      <p className="text-[10px] font-medium text-pool-800">{city.name}</p>
                      <p className="text-[8px] text-pool-600">{city.distance}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-600">
          Atendemos {centralCity} e um raio de até 50km, incluindo Balneário Camboriú, 
          Itapema, Porto Belo, São João Batista e região.
        </p>
      </div>
    </div>
  );
};

export default CustomServiceAreaMap;
