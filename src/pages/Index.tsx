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
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5548999232642?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Maicon%20Piscinas", "_blank");
  };

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      
      <HeroSection />
      
      <TrustBadges />
      
      <section id="sobre" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                  className="bg-pool-600 hover:bg-pool-500 text-white"
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
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Equipe Maicon Piscinas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pool-500/20 rounded-lg -z-10 blur-md"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="servicos" className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              description="Substitui��ão do elemento filtrante garantindo eficiência na filtragem e água mais limpa."
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
              className="bg-pool-600 hover:bg-pool-500 text-white"
              onClick={handleWhatsAppClick}
              size="lg"
            >
              Solicitar Orçamento
            </Button>
          </motion.div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
      
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-pool-700 to-pool-600 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
      
      <section id="depoimentos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-3 title-underline-center">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600">
              A satisfação dos nossos clientes é o nosso melhor indicador de qualidade. 
              Confira alguns depoimentos de quem já contratou nossos serviços.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              name="Carlos M."
              location="Tijucas, SC"
              content="O Maicon fez um trabalho excelente na minha piscina! A limpeza e manutenção estão impecáveis, e o atendimento é sempre atencioso e rápido."
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              name="Maria J."
              location="Tijucas, SC"
              content="O serviço de recuperação de água verde foi surpreendente! Minha piscina ficou renovada e super limpa, com um preço justo. Super recomendo!"
              rating={5}
              delay={0.2}
            />
          </div>
        </div>
      </section>
      
      <FAQ />
      
      <section id="contato" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-3 title-underline">Entre em Contato</h2>
              <p className="text-gray-700 mb-8">
                Estamos prontos para atender você e oferecer as melhores soluções para sua piscina. 
                Entre em contato diretamente pelos nossos canais de atendimento.
              </p>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md mb-8"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-pool-600 text-white p-2 rounded-full mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                    <a 
                      href="tel:+5548999232642" 
                      className="text-gray-600 hover:text-pool-600 transition-colors"
                    >
                      (48) 99923-2642
                    </a>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="bg-pool-600 text-white p-2 rounded-full mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">E-mail</h3>
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
                    <h3 className="text-lg font-semibold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
                    <p className="text-gray-600">Sábado: 09:00 - 13:00</p>
                  </div>
                </div>
              </motion.div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Área de Atendimento</h3>
                <div className="h-64 bg-white rounded-lg overflow-hidden shadow-md mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452458.00928335003!2d-49.303449387550555!3d-27.636102986044765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952749bfe17eb89f%3A0xd3d6e34c9fba2a18!2sFlorianópolis%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1649853646251!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Santa Catarina"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Atendemos toda região de Tijucas e principais cidades de Santa Catarina.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-pool-700 to-pool-600 rounded-xl py-12 px-8 text-center text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                  className="bg-white text-pool-700 hover:bg-gray-100"
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
                  className="bg-pool-600 text-white border-white hover:bg-pool-700"
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
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
