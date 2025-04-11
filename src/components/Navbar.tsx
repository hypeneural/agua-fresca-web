
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-pool-700">
            Maicon<span className="text-pool-500">Piscinas</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Início", "Sobre", "Serviços", "Projetos", "Depoimentos", "Contato"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="text-gray-700 hover:text-pool-600 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:+5548999999999" 
            className="flex items-center text-pool-700 font-medium hover:text-pool-600 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            (48) 99999-9999
          </a>
          <Button className="bg-pool-600 hover:bg-pool-700">
            Orçamento Grátis
          </Button>
        </div>

        {/* Mobile Navigation */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 flex flex-col transition-transform duration-300 pt-24 px-6",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6">
          {["Início", "Sobre", "Serviços", "Projetos", "Depoimentos", "Contato"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="text-gray-700 hover:text-pool-600 font-medium text-lg transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="mt-10">
          <a 
            href="tel:+5548999999999" 
            className="flex items-center text-pool-700 font-medium text-lg mb-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            (48) 99999-9999
          </a>
          <Button className="bg-pool-600 hover:bg-pool-700 w-full">
            Orçamento Grátis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
