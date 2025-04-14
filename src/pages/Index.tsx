import { Droplet, Waves, Filter, Wrench, ShoppingBag, Sparkles, Leaf, Shield, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      
      <HeroSection />
      
      {/* About Section */}
      <section id="sobre" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-3 title-underline">Sobre a Maicon Piscinas</h2>
              <p className="text-gray-700 mb-4">
                A Maicon Piscinas é uma empresa referência em manutenção de piscinas, limpeza de piscinas, 
                instalação de equipamentos e reparos de piscinas em Tijucas, Santa Catarina. Com 6 anos de 
                experiência no mercado, somos especializados em proporcionar soluções completas para piscinas, 
                garantindo um serviço de qualidade e segurança para nossos clientes.
              </p>
              <p className="text-gray-700 mb-6">
                Nossa missão é manter sua piscina sempre em perfeito estado, oferecendo serviços de manutenção 
                de piscinas, reparos e instalações com a mais alta qualidade. Trabalhamos com produtos de alta 
                qualidade, equipamentos modernos e uma equipe técnica especializada para entregar resultados 
                rápidos e eficazes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pool-600">6+</div>
                  <div className="text-gray-500 text-sm">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pool-600">500+</div>
                  <div className="text-gray-500 text-sm">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pool-600">98%</div>
                  <div className="text-gray-500 text-sm">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pool-600">24h</div>
                  <div className="text-gray-500 text-sm">Suporte Técnico</div>
                </div>
              </div>
              <Button variant="outline" className="border-pool-500 text-pool-600 hover:bg-pool-50">
                Saiba Mais Sobre Nós
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Equipe Maicon Piscinas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pool-500/20 rounded-lg -z-10 blur-md"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="servicos" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-3 title-underline-center">Nossos Serviços</h2>
            <p className="text-gray-600">
              Oferecemos soluções completas para sua piscina, desde a instalação até a manutenção, 
              garantindo a qualidade e durabilidade do seu investimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Instalação de Piscinas" 
              description="Instalação profissional de piscinas de fibra, vinil ou alvenaria, seguindo as normas técnicas e de segurança."
              icon={Droplet}
            />
            <ServiceCard 
              title="Instalação de Spas" 
              description="Instalação de spas e ofurôs com sistema completo de hidromassagem e aquecimento para seu conforto."
              icon={Waves}
            />
            <ServiceCard 
              title="Conjunto Filtrante" 
              description="Instalação e manutenção de sistema filtrante completo para manter a água da sua piscina sempre limpa."
              icon={Filter}
            />
            <ServiceCard 
              title="Manutenção de Bombas" 
              description="Serviço especializado em manutenção preventiva e corretiva de bombas e motores para piscinas."
              icon={Wrench}
            />
            <ServiceCard 
              title="Iluminação e Hidromassagem" 
              description="Instalação de sistemas de iluminação e hidromassagem para maior conforto e elegância."
              icon={Sparkles}
            />
            <ServiceCard 
              title="Recuperação de Água Verde" 
              description="Tratamento especializado para recuperar piscinas com água verde, devolvendo a qualidade e transparência."
              icon={Leaf}
            />
            <ServiceCard 
              title="Instalação de Aquecimentos" 
              description="Instalação de sistemas de aquecimento elétrico, solar e trocador de calor para sua piscina."
              icon={ShoppingBag}
            />
            <ServiceCard 
              title="Instalação de Gerador de Cloro" 
              description="Instalação de sistema automático de geração de cloro para tratamento contínuo da água."
              icon={Shield}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-pool-600 hover:bg-pool-700">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-pool-600 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center text-white max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Maicon Piscinas?</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-3">Compromisso com a Qualidade</h3>
                  <p className="text-white/80">
                    Garantimos que todos os serviços atendem aos mais altos padrões de qualidade, 
                    utilizando os melhores produtos e técnicas para resultados duradouros.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-3">Satisfação do Cliente</h3>
                  <p className="text-white/80">
                    Nosso objetivo é a satisfação total dos nossos clientes, oferecendo serviços 
                    personalizados com atenção especial às suas necessidades.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-3">Profissionalismo e Ética</h3>
                  <p className="text-white/80">
                    Atuamos com transparência, respeito e responsabilidade em todas as nossas relações.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-3">Inovação e Tecnologia</h3>
                  <p className="text-white/80">
                    Buscamos sempre novas tecnologias para oferecer soluções mais eficazes e eficientes.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-3">Sustentabilidade</h3>
                  <p className="text-white/80">
                    Valorizamos práticas que promovem a preservação ambiental, utilizando produtos 
                    sustentáveis e métodos que garantem a saúde e segurança de nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="depoimentos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-3 title-underline-center">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600">
              A satisfação dos nossos clientes é o nosso melhor indicador de qualidade. 
              Confira alguns depoimentos de quem já contratou nossos serviços.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              name="Carlos M."
              location="Tijucas, SC"
              content="O Maicon fez um trabalho excelente na minha piscina! A limpeza e manutenção estão impecáveis, e o atendimento é sempre atencioso e rápido."
              rating={5}
            />
            <TestimonialCard
              name="Maria J."
              location="Tijucas, SC"
              content="O serviço de recuperação de água verde foi surpreendente! Minha piscina ficou renovada e super limpa, com um preço justo. Super recomendo!"
              rating={5}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contato" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-3 title-underline">Entre em Contato</h2>
              <p className="text-gray-700 mb-8">
                Estamos prontos para atender você e oferecer as melhores soluções para sua piscina. 
                Preencha o formulário ao lado ou entre em contato diretamente pelos nossos canais de atendimento.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-pool-500 text-white p-2 rounded-full mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-600">(48) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="bg-pool-500 text-white p-2 rounded-full mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@maiconpiscinas.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pool-500 text-white p-2 rounded-full mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
                    <p className="text-gray-600">Sábado: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Área de Atendimento</h3>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
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
                  Atendemos toda região de Florianópolis e principais cidades de Santa Catarina.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-center">Envie sua Mensagem</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="bg-pool-600 rounded-xl py-12 px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar seu espaço?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Entre em contato agora mesmo e solicite um orçamento sem compromisso para o seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-pool-600 hover:bg-gray-100"
                onClick={() => window.location.href = "tel:+5548999232642"}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const contactSection = document.getElementById("contato");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
