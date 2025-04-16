
import { 
  Droplet, 
  Waves, 
  Filter, 
  Wrench, 
  ShoppingBag, 
  Sparkles, 
  Leaf, 
  Shield, 
  Phone, 
  Mail, 
  Clock, 
  Thermometer, 
  Zap 
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
import ServiceAreaMap from "@/components/ServiceAreaMap";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=5548999232642", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" 
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#0ea5e9 #f1f5f9'
      }}
    >
      <Navbar />
      <WhatsAppButton />
      <ScrollToTop />
      
      <HeroSection />
      
      <TrustBadges />
      
      <section id="sobre" className="section-padding bg-gray-50 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-3 title-underline">Sobre a Maicon Piscinas</h2>
              <p className="text-gray-700 mb-4">
                A Maicon Piscinas é uma empresa referência em manutenção de piscinas, limpeza de piscinas, 
                instalação de equipamentos e reparos de piscinas em Tijucas, Santa Catarina. Com <strong>6+ anos de experiência</strong> no mercado, 
                somos especializados em proporcionar soluções completas para piscinas, 
                garantindo um serviço de qualidade e segurança para nossos clientes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-3xl font-bold text-pool-600">6+</div>
                  <div className="text-gray-500 text-sm">Anos de Experiência</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-3xl font-bold text-pool-600">200+</div>
                  <div className="text-gray-500 text-sm">Projetos Realizados</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-3xl font-bold text-pool-600">98%</div>
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
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Equipe Maicon Piscinas"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pool-500/20 rounded-lg -z-10 blur-md"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SectionDivider type="wave" bgColor="fill-white" color="text-gray-50" />
      
      <section id="servicos" className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-3 title-underline-center">Nossos Serviços</h2>
            <p className="text-gray-600">
              Oferecemos soluções completas para sua piscina, desde a instalação até a manutenção, 
              garantindo a qualidade e durabilidade do seu investimento.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Limpeza e Tratamento Químico" 
              description="Manutenção periódica da qualidade da água, tratamento químico completo e limpeza de todos os componentes."
              icon={Droplet}
              delay={0.1}
            />
            <ServiceCard 
              title="Instalação de Equipamentos" 
              description="Instalação profissional de bombas, filtros e demais equipamentos para garantir o funcionamento ideal da sua piscina."
              icon={Wrench}
              delay={0.2}
            />
            <ServiceCard 
              title="Iluminação e Hidromassagem" 
              description="Instalação de sistemas de iluminação e hidromassagem para maior conforto e elegância."
              icon={Sparkles}
              delay={0.3}
            />
            <ServiceCard 
              title="Conserto de Bombas" 
              description="Serviço especializado em manutenção preventiva e corretiva de bombas e motores para piscinas."
              icon={Wrench}
              delay={0.4}
            />
            <ServiceCard 
              title="Recuperação de Água Verde" 
              description="Tratamento especializado para recuperar piscinas com água verde, devolvendo a qualidade e transparência."
              icon={Leaf}
              delay={0.5}
            />
            <ServiceCard 
              title="Troca de Areia" 
              description="Substituição do elemento filtrante garantindo eficiência na filtragem e água mais limpa."
              icon={Filter}
              delay={0.6}
            />
            <ServiceCard 
              title="Instalação de Aquecimentos" 
              description="Instalação de sistemas de aquecimento elétrico, solar e trocador de calor para sua piscina."
              icon={Thermometer}
              delay={0.7}
            />
            <ServiceCard 
              title="Instalação de Gerador de Cloro" 
              description="Instalação de sistema automático de geração de cloro para tratamento contínuo da água."
              icon={Zap}
              delay={0.8}
            />
            <ServiceCard 
              title="Capas Térmicas e de Proteção" 
              description="Fornecimento e instalação de capas térmicas e de proteção para maior segurança e economia."
              icon={Shield}
              delay={0.9}
            />
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-pool-600 hover:bg-pool-500 text-white btn-ripple"
              onClick={handleWhatsAppClick}
              size="lg"
            >
              Solicitar Orçamento
            </Button>
          </motion.div>
        </div>
      </section>
      
      <SectionDivider type="angle" color="text-gray-50" />
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-3 title-underline-center">Transformações Incríveis</h2>
            <p className="text-gray-600">
              Veja o antes e depois dos nossos serviços e descubra como podemos transformar sua piscina.
            </p>
          </motion.div>
          
          <BeforeAfterComparison 
            beforeImage="https://maiconpiscinas.com.br/antes.png"
            afterImage="https://maiconpiscinas.com.br/depois.png"
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>
      
      <SectionDivider type="curve" color="text-white" bgColor="fill-gray-50" />
      
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-pool-700 to-pool-600 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Decorative backgrounds */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-pool-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pool-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="text-center text-white max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Maicon Piscinas?</h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3">Compromisso com a Qualidade</h3>
                  <p className="text-white/80">
                    Garantimos que todos os serviços atendem aos mais altos padrões de qualidade, 
                    utilizando os melhores produtos e técnicas para resultados duradouros.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3">Satisfação do Cliente</h3>
                  <p className="text-white/80">
                    Nosso objetivo é a satisfação total dos nossos clientes, oferecendo serviços 
                    personalizados com atenção especial às suas necessidades.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3">Profissionalismo e Ética</h3>
                  <p className="text-white/80">
                    Atuamos com transparência, respeito e responsabilidade em todas as nossas relações.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3">Inovação e Tecnologia</h3>
                  <p className="text-white/80">
                    Buscamos sempre novas tecnologias para oferecer soluções mais eficazes e eficientes.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3">Sustentabilidade</h3>
                  <p className="text-white/80">
                    Valorizamos práticas que promovem a preservação ambiental, utilizando produtos 
                    sustentáveis e métodos que garantem a saúde e segurança de nossos clientes.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <SectionDivider type="triangle" color="text-gray-50" />
      
      <section id="depoimentos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-3 title-underline-center">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600">
              A satisfação dos nossos clientes é o nosso melhor indicador de qualidade. 
              Confira alguns depoimentos de quem já contratou nossos serviços.
            </p>
          </motion.div>
          
          <TestimonialsCarousel />
        </div>
      </section>
      
      <SectionDivider type="wave" color="text-white" bgColor="fill-gray-50" />
      
      <FAQ />
      
      <SectionDivider type="curve" color="text-white" bgColor="fill-gray-50" />
      
      <section id="contato" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-3 title-underline text-center md:text-left">Entre em Contato</h2>
            <p className="text-gray-700 mb-8 text-center md:text-left">
              Estamos prontos para atender você e oferecer as melhores soluções para sua piscina. 
              Entre em contato diretamente pelos nossos canais de atendimento.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-pool-700">Informações de Contato</h3>
              <div className="space-y-6">
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
                  className="w-full bg-pool-600 hover:bg-pool-500 text-white py-3 px-4 rounded-lg mt-4 flex items-center justify-center gap-2 btn-ripple"
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
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Solicitar Orçamento
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-pool-700">Área de Atendimento</h3>
              <ServiceAreaMap />
              <p className="text-gray-600 text-sm mt-4">
                Atendemos Tijucas e todas as cidades em um raio de até 50km, incluindo Balneário Camboriú, 
                Itapema, Porto Belo, São João Batista e região.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SectionDivider type="angle" color="text-gray-50" />
      
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-pool-700 to-pool-600 rounded-xl py-12 px-8 text-center text-white shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Animated background dots */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="w-4 h-4 bg-white/10 rounded-full absolute top-10 left-10"
                animate={{ 
                  y: [0, 100, 0],
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
                  y: [0, -80, 0],
                  opacity: [0.1, 0.4, 0.1]
                }} 
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="w-8 h-8 bg-white/10 rounded-full absolute bottom-10 right-20"
                animate={{ 
                  y: [0, -120, 0],
                  opacity: [0.2, 0.5, 0.2]
                }} 
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Pronto para transformar seu espaço?
              </motion.h2>
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Entre em contato agora mesmo e solicite um orçamento sem compromisso para o seu projeto.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-pool-700 hover:bg-gray-100 btn-ripple"
                    onClick={handleWhatsAppClick}
                  >
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
                    className="bg-pool-600 text-white border-white hover:bg-pool-700 btn-ripple"
                    onClick={() => {
                      const contactSection = document.getElementById("contato");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Fale Conosco
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
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
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .section-padding {
            padding-top: 3rem;
            padding-bottom: 3rem;
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
        `}
      </style>
    </div>
  );
};

export default Index;
