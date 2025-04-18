
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Award, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5548999232642?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Maicon%20Piscinas", "_blank");
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-pool-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <img src="https://maiconpiscinas.com.br/bio/favicon.png" alt="Maicon Piscinas - Serviços de qualidade para piscinas em Tijucas e região" className="h-12 mb-6" />
            <p className="mb-6 text-gray-300">
              Soluções completas em piscinas para residências e empresas em Tijucas e região. Qualidade e compromisso desde 2017.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/maicon.piscineiro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title="Siga-nos no Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/maicon_piscinas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title="Siga-nos no Instagram"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 w-5 h-5 text-pool-400 mt-1" />
                <div>
                  <p className="text-gray-300">Telefone</p>
                  <a href="tel:+5548999232642" className="hover:text-pool-400 transition-colors">
                    (48) 99923-2642
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 w-5 h-5 text-pool-400 mt-1" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:contato@maiconpiscinas.com.br" className="hover:text-pool-400 transition-colors">
                    contato@maiconpiscinas.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 w-5 h-5 text-pool-400 mt-1" />
                <div>
                  <p className="text-gray-300">Endereço</p>
                  <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <span itemProp="addressLocality">Tijucas</span>-<span itemProp="addressRegion">SC</span>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 w-5 h-5 text-pool-400 mt-1" />
                <div>
                  <p className="text-gray-300">Horário</p>
                  <p>Segunda a Sexta: 08:00 - 18:00</p>
                  <p>Sábado: 09:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Serviços</h3>
            <ul className="space-y-2">
              {[
                "Limpeza e Tratamento",
                "Instalação de Equipamentos",
                "Iluminação e Hidromassagem",
                "Recuperação de Água Verde",
                "Aquecimentos",
                "Gerador de Cloro",
                "Troca de Areia",
                "Capas de Proteção"
              ].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href="#servicos" className="text-gray-300 hover:text-pool-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Área de Atendimento</h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden mb-4 relative">
              <div className="absolute inset-0 bg-pool-900/50 flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-pool-400" />
                  <h4 className="text-white font-medium mb-1">Tijucas e Região</h4>
                  <p className="text-sm text-gray-300">Atendimento em um raio de 50km</p>
                </div>
              </div>
              
              {/* Water effect overlay */}
              <motion.div 
                className="absolute inset-x-0 bottom-0 h-16 opacity-30"
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0ea5e9" opacity="0.5" />
                </svg>
              </motion.div>
            </div>
            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-pool-600 hover:bg-pool-500 text-white py-2 px-4 rounded flex items-center justify-center w-full relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, 0, -10, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <Heart className="w-5 h-5 mr-2" />
                </motion.div>
                Solicitar Orçamento Agora
              </span>
              
              {/* Animated water ripple effect */}
              <motion.span 
                className="absolute inset-0 bg-pool-500 rounded-md"
                initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0.7 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                style={{ left: "50%", top: "50%" }}
              />
            </motion.button>
            
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-white/5 p-2 rounded-lg text-center">
                <Award className="h-5 w-5 mx-auto mb-1 text-pool-400" />
                <p className="text-xs text-gray-300">Garantia de Serviço</p>
              </div>
              <div className="bg-white/5 p-2 rounded-lg text-center">
                <Shield className="h-5 w-5 mx-auto mb-1 text-pool-400" />
                <p className="text-xs text-gray-300">Segurança e Qualidade</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Maicon Piscinas. Todos os direitos reservados.</p>
          <div className="mt-2 text-xs opacity-70">
            <a href="#" className="hover:text-pool-400 mr-3">Política de Privacidade</a>
            <a href="#" className="hover:text-pool-400">Termos de Uso</a>
          </div>
          
          {/* Structured data for SEO */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Maicon Piscinas",
            "image": "https://maiconpiscinas.com.br/bio/favicon.png",
            "url": "https://maiconpiscinas.com.br",
            "telephone": "+5548999232642",
            "email": "contato@maiconpiscinas.com.br",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tijucas",
              "addressRegion": "SC",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -27.235,
              "longitude": -48.6327
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "13:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/maicon.piscineiro",
              "https://www.instagram.com/maicon_piscinas"
            ]
          }) }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
