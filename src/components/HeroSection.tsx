
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicos");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
          alt="Piscina azul"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Transforme seu espaço com piscinas de qualidade
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Soluções completas para piscinas em Santa Catarina, 
            desde a instalação até a manutenção.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-pool-500 hover:bg-pool-600 text-white"
              onClick={scrollToServices}
            >
              Conheça Nossos Serviços
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Solicite um Orçamento
            </Button>
          </div>
        </div>
      </div>

      <a 
        href="#sobre" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce"
      >
        <span className="text-sm mb-2 opacity-80">Saiba mais</span>
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
