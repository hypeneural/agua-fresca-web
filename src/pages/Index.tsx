
import { 
  Droplet, 
  Phone, 
  Mail, 
  Clock, 
  Award,
  Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SectionDivider from "@/components/SectionDivider";
import WaterBackground from "@/components/WaterBackground";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Helmet } from "react-helmet-async";
import CustomServiceAreaMap from "@/components/CustomServiceAreaMap";
import { services } from "@/data/services";
import HeroWaterEffects from "@/components/HeroWaterEffects";
import WaterDripAnimation from "@/components/WaterDripAnimation";

// Import new animation components
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ParallaxEffect } from "@/components/animations/ParallaxEffect";
import { ParticlesEffect } from "@/components/animations/ParticlesEffect";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { AnimatedGradient } from "@/components/animations/AnimatedGradient";
import { ScrollToSection } from "@/components/animations/ScrollToSection";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=5548999232642", "_blank");
  };

  // Define sections for ScrollToSection component
  const mainSections = [
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" 
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#0ea5e9 #f1f5f9'
      }}
    >
      <Helmet>
        <title>Maicon Piscinas | Serviços de Piscinas em Tijucas e Região</title>
        <meta name="description" content="Serviços completos de limpeza, manutenção e instalação de equipamentos para piscinas em Tijucas e região. Atendimento especializado e qualidade garantida." />
        <meta name="keywords" content="piscinas, limpeza de piscinas, manutenção de piscinas, tratamento de água, instalação de equipamentos, Tijucas, Santa Catarina" />
        <meta property="og:title" content="Maicon Piscinas | Serviços de Piscinas em Tijucas e Região" />
        <meta property="og:description" content="Soluções completas em piscinas para residências e empresas em Tijucas e região. Qualidade e compromisso desde 2017." />
        <meta property="og:image" content="https://maiconpiscinas.com.br/bio/favicon.png" />
        <meta property="og:url" content="https://maiconpiscinas.com.br" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maicon Piscinas | Serviços de Piscinas em Tijucas e Região" />
        <meta name="twitter:description" content="Serviços completos para piscinas com atendimento personalizado e qualidade garantida." />
        <meta name="twitter:image" content="https://maiconpiscinas.com.br/bio/favicon.png" />
        <link rel="canonical" href="https://maiconpiscinas.com.br" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Maicon Piscinas",
            "image": "https://maiconpiscinas.com.br/bio/favicon.png",
            "description": "Serviços completos de limpeza, manutenção e instalação de equipamentos para piscinas em Tijucas e região",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tijucas",
              "addressRegion": "SC",
              "addressCountry": "BR"
            },
            "telephone": "+5548999232642",
            "priceRange": "$$",
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
            "sameAs": ["https://www.facebook.com/maiconpiscinas", "https://www.instagram.com/maiconpiscinas"]
          })}
        </script>
      </Helmet>
      
      <Navbar />
      <WhatsAppButton />
      <ScrollToTop />
      <ScrollToSection sections={mainSections} />
      
      <HeroWaterEffects>
        <HeroSection />
      </HeroWaterEffects>
      
      <TrustBadges />
      
      <section id="sobre" className="section-padding bg-gray-50 relative">
        <WaterBackground intensity="light" className="opacity-50" />
        <WaterDripAnimation intensity="light" color="rgba(14, 165, 233, 0.3)" size="small" />
        <ParticlesEffect count={10} type="water" color="rgba(14, 165, 233, 0.2)" />
        
        <div className="container-custom">
          <AnimatedSection 
            className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
            direction="up"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 pb-3 title-underline">Sobre a Maicon Piscinas</h2>
            <p className="text-gray-700 mb-4">
              A Maicon Piscinas é uma empresa referência em manutenção de piscinas, limpeza de piscinas, 
              instalação de equipamentos e reparos de piscinas em Tijucas, Santa Catarina. Com <strong>6+ anos de experiência</strong> no mercado, 
              somos especializados em proporcionar soluções completas para piscinas, 
              garantindo um serviço de qualidade e segurança para nossos clientes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6">
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-3xl font-bold text-pool-600">
                  <AnimatedCounter end={6} suffix="+" />
                </div>
                <div className="text-gray-500 text-sm">Anos de Experiência</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-3xl font-bold text-pool-600">
                  <AnimatedCounter end={200} suffix="+" duration={2.5} />
                </div>
                <div className="text-gray-500 text-sm">Projetos Realizados</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-3xl font-bold text-pool-600">
                  <AnimatedCounter end={98} suffix="%" duration={2.2} />
                </div>
                <div className="text-gray-500 text-sm">Clientes Satisfeitos</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-3xl font-bold text-pool-600">24h</div>
                <div className="text-gray-500 text-sm">Suporte Técnico</div>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-pool-600 hover:bg-pool-500 text-white btn-ripple"
                onClick={handleWhatsAppClick}
              >
                Fale com um Especialista
              </Button>
            </motion.div>
          </AnimatedSection>
          
          <MaskReveal direction="left" className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Equipe Maicon Piscinas"
                  className="w-full h-full object-cover"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pool-500/20 rounded-lg -z-10 blur-md"></div>
          </MaskReveal>
        </div>
      </section>
      
      <SectionDivider type="wave" bgColor="fill-white" color="text-gray-50" />
      
      <section id="servicos" className="section-padding relative">
        <WaterDripAnimation intensity="light" color="rgba(14, 165, 233, 0.2)" />
        <ParticlesEffect count={8} type="circle" />
        
        <div className="container-custom">
          <AnimatedSection 
            className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
            direction="up"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 pb-3 title-underline-center">Nossos Serviços</h2>
            <p className="text-gray-600">
              Oferecemos soluções completas para sua piscina, desde a instalação até a manutenção, 
              garantindo a qualidade e durabilidade do seu investimento.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title} 
                description={service.description}
                icon={service.icon}
                delay={service.delay}
              />
            ))}
          </div>
          
          <AnimatedSection 
            className="text-center mt-10 md:mt-12"
            direction="up"
            delay={0.2}
          >
            <Button 
              className="bg-pool-600 hover:bg-pool-500 text-white btn-ripple"
              onClick={handleWhatsAppClick}
              size="lg"
            >
              <motion.span 
                animate={{
                  rotate: [0, -10, 0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="mr-2"
              >
                <Droplet className="w-5 h-5" />
              </motion.span>
              Solicitar Orçamento
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      <SectionDivider type="angle" color="text-gray-50" />
      
      <section className="section-padding bg-gray-50 relative">
        <WaterDripAnimation intensity="light" color="rgba(14, 165, 233, 0.2)" size="medium" />
        <ParallaxEffect speed={0.3}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-pool-300 filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-pool-400 filter blur-3xl"></div>
          </div>
        </ParallaxEffect>
        
        <div className="container-custom">
          <AnimatedSection 
            className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
            direction="up"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 pb-3 title-underline-center">Transformações Incríveis</h2>
            <p className="text-gray-600">
              Veja o antes e depois dos nossos serviços e descubra como podemos transformar sua piscina.
            </p>
          </AnimatedSection>
          
          <BeforeAfterComparison 
            beforeImage="https://maiconpiscinas.com.br/antes.png"
            afterImage="https://maiconpiscinas.com.br/depois.png"
            className="max-w-4xl mx-auto"
            beforeLabel="Antes"
            afterLabel="Depois"
          />
        </div>
      </section>
      
      <SectionDivider type="curve" color="text-white" bgColor="fill-gray-50" />
      
      <WhyChooseUs />
      
      <SectionDivider type="triangle" color="text-gray-50" />
      
      <section id="depoimentos" className="section-padding bg-gray-50 relative">
        <WaterDripAnimation intensity="light" color="rgba(14, 165, 233, 0.2)" />
        <ParticlesEffect count={12} minSize={3} maxSize={12} />
        
        <div className="container-custom">
          <AnimatedSection 
            className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
            direction="up"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 pb-3 title-underline-center">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600">
              A satisfação dos nossos clientes é o nosso melhor indicador de qualidade. 
              Confira alguns depoimentos de quem já contratou nossos serviços.
            </p>
          </AnimatedSection>
          
          <TestimonialsCarousel />
        </div>
      </section>
      
      <SectionDivider type="wave" color="text-white" bgColor="fill-gray-50" />
      
      <FAQ />
      
      <SectionDivider type="curve" color="text-white" bgColor="fill-gray-50" />
      
      <section id="contato" className="section-padding">
        <div className="container-custom">
          <AnimatedSection
            direction="up"
            className="mb-8 md:mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 pb-3 title-underline text-center md:text-left">Entre em Contato</h2>
            <p className="text-gray-700 mb-6 md:mb-8 text-center md:text-left">
              Estamos prontos para atender você e oferecer as melhores soluções para sua piscina. 
              Entre em contato diretamente pelos nossos canais de atendimento.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatedSection 
              className="bg-white p-5 md:p-6 rounded-lg shadow-md"
              direction="left"
              delay={0.1}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-pool-700">Informações de Contato</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-pool-600 text-white p-2 rounded-full mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Telefone</h4>
                    <a 
                      href="tel:+5548999232642" 
                      className="text-gray-600 hover:text-pool-600 transition-colors"
                    >
                      (48) 99923-2642
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pool-600 text-white p-2 rounded-full mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">E-mail</h4>
                    <a 
                      href="mailto:contato@maiconpiscinas.com.br" 
                      className="text-gray-600 hover:text-pool-600 transition-colors"
                    >
                      contato@maiconpiscinas.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pool-600 text-white p-2 rounded-full mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
                    <p className="text-gray-600">Sábado: 09:00 - 13:00</p>
                  </div>
                </div>
                
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-pool-600 hover:bg-pool-500 text-white py-3 px-4 rounded-lg mt-4 flex items-center justify-center gap-2 btn-ripple overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="0"
                    className="relative z-10"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="relative z-10">Solicitar Orçamento</span>
                  
                  <motion.span
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{ left: '40%', bottom: '-20px' }}
                    animate={{
                      y: [0, -40],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.3,
                      repeatDelay: 1
                    }}
                  />
                </motion.button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection
              direction="right"
              delay={0.2}
              className="rounded-lg overflow-hidden"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-pool-700">Área de Atendimento</h3>
              <CustomServiceAreaMap />
              <p className="text-gray-600 text-sm mt-4">
                Atendemos Tijucas e todas as cidades em um raio de até 50km, incluindo Balneário Camboriú, 
                Itapema, Porto Belo, São João Batista e região.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <SectionDivider type="angle" color="text-gray-50" />
      
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <AnimatedGradient
            colorFrom="rgba(14, 165, 233, 0.8)"
            colorTo="rgba(2, 132, 199, 0.9)"
            className="rounded-xl py-8 md:py-12 px-6 md:px-8 text-center text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="w-4 h-4 bg-white/10 rounded-full absolute top-10 left-10"
                animate={{ 
                  y: [0, 100],
                  opacity: [0.2, 0.5, 0.2]
                }} 
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="w-6 h-6 bg-white/10 rounded-full absolute top-20 right-40"
                animate={{ 
                  y: [0, -80],
                  opacity: [0.1, 0.4, 0.1]
                }} 
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            
            <div className="relative z-10">
              <AnimatedSection 
                direction="up"
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              >
                Pronto para transformar seu espaço?
              </AnimatedSection>
              <AnimatedSection 
                direction="up"
                delay={0.1}
                className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto"
              >
                Entre em contato agora mesmo e solicite um orçamento sem compromisso para o seu projeto.
              </AnimatedSection>
              <AnimatedSection 
                direction="up"
                delay={0.2}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-pool-700 hover:bg-gray-100 btn-ripple w-full sm:w-auto"
                    onClick={handleWhatsAppClick}
                  >
                    <motion.span
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      className="mr-2"
                    >
                      <Award className="w-5 h-5" />
                    </motion.span>
                    Solicitar Orçamento
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-pool-600 text-white border-white hover:bg-pool-700 btn-ripple w-full sm:w-auto"
                    onClick={() => {
                      const contactSection = document.getElementById("contato");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity
                      }}
                      className="mr-2"
                    >
                      <Phone className="w-5 h-5" />
                    </motion.span>
                    Fale Conosco
                  </Button>
                </motion.div>
              </AnimatedSection>
            </div>
          </AnimatedGradient>
        </div>
      </section>
      
      <Footer />

      <style>
        {`
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #0ea5e9;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #0284c7;
        }
        
        @media (max-width: 768px) {
          .section-padding {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          h2 {
            font-size: 1.75rem !important;
          }
          
          p {
            font-size: 0.95rem;
          }
          
          .container-custom {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
        
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .water-ripple {
          position: relative;
          overflow: hidden;
        }
        
        .water-ripple::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0) 60%);
          border-radius: 100%;
          animation: ripple 4s linear infinite;
        }
        
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
        `}
      </style>
    </div>
  );
};

export default Index;
