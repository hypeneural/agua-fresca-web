import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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

  const handlePhoneClick = () => {
    window.location.href = "tel:+5548999232642";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5548999232642?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Maicon%20Piscinas", "_blank");
  };

  const navItems = ["Início", "Sobre", "Serviços", "Depoimentos", "FAQ", "Contato"];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-gradient-to-r from-pool-800 to-pool-700 shadow-md py-2" 
          : "bg-transparent backdrop-blur-sm bg-black/20 py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.a 
          href="/" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center relative z-20"
        >
          <img src="https://maiconpiscinas.com.br/bio/favicon.png" alt="Maicon Piscinas" className="h-12" />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a 
              key={item}
              href={item === "Início" ? "/" : `#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="text-white hover:text-pool-300 font-medium transition-colors relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              {item}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-pool-300 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePhoneClick}
            className="flex items-center text-white font-medium hover:text-pool-300 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            (48) 99923-2642
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-pool-600 hover:bg-pool-500 text-white"
              onClick={handleWhatsAppClick}
            >
              Orçamento Grátis
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation Toggle - Improved styles */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden relative z-20" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className={cn(
            "p-2.5 rounded-full transition-all duration-300",
            isScrolled 
              ? "bg-pool-600 shadow-lg" 
              : "bg-black/40 backdrop-blur-sm border border-white/20"
          )}>
            {isOpen ? 
              <X size={24} className="text-white" /> : 
              <Menu size={24} className="text-white" />
            }
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu - Improved styles */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-gradient-to-b from-pool-800 to-pool-700 z-40 flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.a 
                  key={item}
                  href={item === "Início" ? "/" : `#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                  className="text-white hover:text-pool-300 font-medium text-lg transition-colors"
                  onClick={toggleMenu}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <div className="mt-10">
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePhoneClick}
                className="flex items-center text-white font-medium text-lg mb-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                (48) 99923-2642
              </motion.button>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-pool-600 hover:bg-pool-500 text-white w-full"
                  onClick={handleWhatsAppClick}
                >
                  Orçamento Grátis
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
