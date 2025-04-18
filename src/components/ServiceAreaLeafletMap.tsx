
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion, AnimatePresence } from 'framer-motion';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import WaterEffect3D from './WaterEffect3D';

// This component is needed to change the map center dynamically
function ChangeMapView({ center, zoom }: { center: LatLngExpression, zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  
  return null;
}

const ServiceAreaLeafletMap = () => {
  const [selectedCity, setSelectedCity] = useState<string>("tijucas");
  
  const cities = {
    tijucas: { lat: -27.235, lng: -48.6327, name: "Tijucas" },
    balnearioCamboriu: { lat: -26.9909, lng: -48.6354, name: "Balneário Camboriú" },
    itapema: { lat: -27.0862, lng: -48.6161, name: "Itapema" },
    portoBelo: { lat: -27.1591, lng: -48.5429, name: "Porto Belo" },
    saoJoaoBatista: { lat: -27.2772, lng: -48.8474, name: "São João Batista" },
    canelinha: { lat: -27.2614, lng: -48.7657, name: "Canelinha" },
  };

  const serviceAreas = [
    { id: "tijucas", label: "Tijucas (Base)" },
    { id: "balnearioCamboriu", label: "Balneário Camboriú" },
    { id: "itapema", label: "Itapema" },
    { id: "portoBelo", label: "Porto Belo" },
    { id: "saoJoaoBatista", label: "São João Batista" },
    { id: "canelinha", label: "Canelinha" }
  ];

  const customIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const selectedCityData = cities[selectedCity as keyof typeof cities];
  const position: LatLngExpression = [selectedCityData.lat, selectedCityData.lng];

  return (
    <WaterEffect3D className="rounded-xl overflow-hidden" intensity="light">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="p-4 bg-gradient-to-br from-pool-50 to-pool-100 border-r border-gray-200">
          <h3 className="text-lg font-semibold text-pool-700 mb-3">Áreas Atendidas</h3>
          <p className="text-sm text-gray-600 mb-4">
            Selecione uma cidade para visualizar no mapa. Atendemos em um raio de 50km a partir de Tijucas.
          </p>
          
          <RadioGroup defaultValue="tijucas" value={selectedCity} onValueChange={setSelectedCity} className="space-y-2">
            {serviceAreas.map((area) => (
              <div key={area.id} className="flex items-center space-x-2">
                <RadioGroupItem value={area.id} id={area.id} />
                <Label htmlFor={area.id} className="cursor-pointer">{area.label}</Label>
              </div>
            ))}
          </RadioGroup>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCity}
              className="mt-4 p-3 bg-white rounded-lg shadow-inner"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-pool-600">Informação:</span> Também atendemos outras localidades dentro do raio de 50km. Entre em contato para confirmar disponibilidade.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="h-[400px] md:h-auto md:col-span-2">
          <MapContainer
            center={[cities.tijucas.lat, cities.tijucas.lng]}
            zoom={11}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
            className="z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>{selectedCityData.name}</Popup>
            </Marker>
            <Circle 
              center={position}
              pathOptions={{ color: '#0ea5e9', fillColor: '#0ea5e9', fillOpacity: 0.1 }}
              radius={50000}
            >
              <Popup>Área de atendimento: 50km ao redor de {selectedCityData.name}</Popup>
            </Circle>
            <ChangeMapView center={position} zoom={11} />
          </MapContainer>
        </div>
      </div>
    </WaterEffect3D>
  );
};

export default ServiceAreaLeafletMap;
