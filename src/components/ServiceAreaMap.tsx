import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ServiceAreaMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState<string>("tijucas");
  
  // Define as cidades atendidas com suas coordenadas
  const cities = {
    tijucas: { lat: -27.235, lng: -48.6327, name: "Tijucas" },
    balnearioCamboriu: { lat: -26.9909, lng: -48.6354, name: "Balneário Camboriú" },
    itapema: { lat: -27.0862, lng: -48.6161, name: "Itapema" },
    portoBelo: { lat: -27.1591, lng: -48.5429, name: "Porto Belo" },
    saoJoaoBatista: { lat: -27.2772, lng: -48.8474, name: "São João Batista" },
    canelinha: { lat: -27.2614, lng: -48.7657, name: "Canelinha" },
  };
  
  // Lista de cidades atendidas para mostrar no seletor
  const serviceAreas = [
    { id: "tijucas", label: "Tijucas (Base)" },
    { id: "balnearioCamboriu", label: "Balneário Camboriú" },
    { id: "itapema", label: "Itapema" },
    { id: "portoBelo", label: "Porto Belo" },
    { id: "saoJoaoBatista", label: "São João Batista" },
    { id: "canelinha", label: "Canelinha" }
  ];

  // Constrói a URL do mapa com o centro na cidade selecionada
  const getMapUrl = () => {
    const city = cities[selectedCity as keyof typeof cities];
    return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56300!3m2!1d${city.lng}!2d${city.lat}!4m10!1m2!1e4!2m6!1m4!1e4!2m2!1i500!2i300!4e0!5e0!3m2!1spt-BR!2sbr!4v1713406560780!5m2!1spt-BR!2sbr`;
  };

  return (
    <motion.div 
      className="relative rounded-lg overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-0 shadow-none">
        <CardContent className="p-0">
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
              
              <motion.div 
                className="mt-4 p-3 bg-white rounded-lg shadow-inner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xs text-gray-500">
                  <span className="font-semibold text-pool-600">Informação:</span> Também atendemos outras localidades dentro do raio de 50km. Entre em contato para confirmar disponibilidade.
                </p>
              </motion.div>
            </div>
            
            <div className="h-80 md:h-auto md:col-span-2 bg-white relative">
              <iframe 
                src={getMapUrl()}
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                title="Mapa da área de atendimento"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Animated radius around the selected city */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-pool-600"
                  animate={{ 
                    scale: [1, 4],
                    opacity: [0.7, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                />
                <motion.div
                  className="absolute w-5 h-5 bg-pool-600 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0px rgba(14, 165, 233, 0.3)',
                      '0 0 20px rgba(14, 165, 233, 0.6)',
                      '0 0 0px rgba(14, 165, 233, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </div>
              
              {/* Water effect overlay */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'><path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%230ea5e9'></path><path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%230ea5e9'></path><path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%230ea5e9'></path></svg>")`,
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: '100% 100%',
                    height: '120%',
                    top: '80%'
                  }}
                  animate={{ y: [-100, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                    repeatType: "mirror"
                  }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceAreaMap;
