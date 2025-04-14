
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import YouTubeBackground from "./YouTubeBackground";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicos");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5548999232642?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Maicon%20Piscinas", "_blank");
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <YouTubeBackground videoId="ry0yA5_pSps" />

      <div className="container-custom relative z-10 text-white">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Transformamos seu espaço com piscinas de alta performance e estética impecável
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Mais de 6 anos de experiência em soluções completas para piscinas em Santa Catarina.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-pool-500 hover:bg-pool-600 text-white"
                onClick={scrollToServices}
              >
                Catálogo de Serviços
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-pool-600 hover:bg-pool-700 text-white"
                onClick={handleWhatsAppClick}
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a 
        href="#sobre" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <span className="text-sm mb-2 opacity-80">Saiba mais</span>
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
