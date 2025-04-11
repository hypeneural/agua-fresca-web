
import { Droplet, Waves, Filter, Wrench, ShoppingBag, Sparkles, Leaf, Shield } from "lucide-react";
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
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section id="sobre" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-3 title-underline">Sobre a Maicon Piscinas</h2>
              <p className="text-gray-700 mb-4">
                Desde 2005, a Maicon Piscinas se destaca no mercado de piscinas em Santa Catarina, 
                oferecendo soluções completas que vão desde a instalação até a manutenção.
              </p>
              <p className="text-gray-700 mb-4">
                Nossa missão é proporcionar momentos de lazer e bem-estar através de produtos e serviços 
                de qualidade, com atendimento personalizado e excelência técnica.
              </p>
              <p className="text-gray-700 mb-6">
                Contamos com uma equipe de profissionais especializados e comprometidos em oferecer 
                as melhores soluções para nossos clientes, sempre com foco na satisfação e na qualidade.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pool-600">15+</div>
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
              Oferecemos soluções completas para sua piscina, desde a instalação até a manutenção periódica, 
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
              title="Venda de Produtos" 
              description="Ampla linha de produtos químicos, acessórios e equipamentos para piscinas das melhores marcas."
              icon={ShoppingBag}
            />
            <ServiceCard 
              title="Limpeza e Tratamento" 
              description="Serviços de limpeza, tratamento e manutenção regular para manter sua piscina sempre em perfeitas condições."
              icon={Sparkles}
            />
            <ServiceCard 
              title="Troca de Areia" 
              description="Substituição periódica da areia do filtro para garantir o funcionamento eficiente do sistema de filtragem."
              icon={Leaf}
            />
            <ServiceCard 
              title="Capas de Proteção" 
              description="Capas de proteção sob medida para maior segurança e conservação da água da sua piscina."
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
      
      {/* Projects Section */}
      <section id="projetos" className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-3 title-underline-center">Projetos Realizados</h2>
            <p className="text-gray-600">
              Confira alguns dos nossos projetos concluídos e inspire-se para transformar o seu espaço.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Piscina Residencial em Jurerê"
              description="Projeto completo de piscina e área de lazer para residência de alto padrão."
              image="https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <ProjectCard
              title="Condomínio em Florianópolis"
              description="Piscina coletiva com deck molhado e sistema de aquecimento solar."
              image="https://images.unsplash.com/photo-1536745511564-a5fa6e596e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            />
            <ProjectCard
              title="Hotel em Balneário Camboriú"
              description="Projeto de piscina de borda infinita com vista para o mar."
              image="https://images.unsplash.com/photo-1518172001620-cd0e03e41ff4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <ProjectCard
              title="Spa Residencial em Itapema"
              description="Instalação de spa integrado com piscina e cascata."
              image="https://images.unsplash.com/photo-1542425967-699db6ff3626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <ProjectCard
              title="Área de Lazer em Chapecó"
              description="Projeto completo de área de lazer com piscina, deck e churrasqueira."
              image="https://images.unsplash.com/photo-1562700121-e79abf0e4711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"
            />
            <ProjectCard
              title="Piscina Coberta em Blumenau"
              description="Piscina interna com sistema de aquecimento e tratamento automatizado."
              image="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-pool-500 text-pool-600 hover:bg-pool-50">
              Ver Mais Projetos
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-pool-600 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute right-0 bottom-0 opacity-20">
                <svg width="350" height="350" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFFFFF" d="M44.3,-76.8C57.9,-69.2,70,-57.9,78.5,-44.2C87,-30.5,91.9,-15.2,90.9,-0.6C90,14.1,83.1,28.2,74.4,40.9C65.7,53.6,55.2,65,42.4,72.7C29.6,80.5,14.8,84.5,0.1,84.4C-14.6,84.3,-29.2,80,-42.2,72.3C-55.3,64.5,-66.7,53.3,-73.8,40C-80.9,26.7,-83.6,11.1,-82.6,-3.5C-81.6,-18.2,-77,-35.9,-67.6,-48.9C-58.3,-61.8,-44.2,-70,-30.3,-76.5C-16.4,-83,-8.2,-87.9,3.8,-95C15.8,-102.2,31.5,-112.5,42,-104.8C52.5,-97.1,57.8,-71.4,58.7,-70.6C59.7,-69.7,64.2,-93.6,64.1,-94.4C64,-95.2,58.4,-73,44.3,-76.8Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
            <div className="relative z-10">
              <div className="text-center text-white max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Maicon Piscinas?</h2>
                <p className="text-white/80 mb-10">
                  Mais de 15 anos de experiência, compromisso com qualidade e a satisfação garantida dos nossos clientes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <div className="font-bold text-2xl mb-2">01</div>
                  <h3 className="text-xl font-semibold mb-3">Profissionais Especializados</h3>
                  <p className="text-white/80">
                    Nossa equipe é composta por profissionais treinados e certificados, garantindo um serviço de alta qualidade.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <div className="font-bold text-2xl mb-2">02</div>
                  <h3 className="text-xl font-semibold mb-3">Atendimento Personalizado</h3>
                  <p className="text-white/80">
                    Cada projeto é único e recebe atenção especial, com soluções personalizadas para as suas necessidades.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <div className="font-bold text-2xl mb-2">03</div>
                  <h3 className="text-xl font-semibold mb-3">Garantia de Satisfação</h3>
                  <p className="text-white/80">
                    Trabalhamos com o compromisso de entregar resultados que superem as expectativas dos nossos clientes.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Roberto Almeida"
              location="Florianópolis, SC"
              content="Excelente trabalho na instalação da minha piscina. Profissionais competentes e atenciosos. O resultado ficou melhor do que eu esperava!"
              rating={5}
            />
            <TestimonialCard
              name="Mariana Costa"
              location="Balneário Camboriú, SC"
              content="Contratei a manutenção mensal e estou muito satisfeita. A piscina sempre está impecável e o atendimento é sempre pontual e eficiente."
              rating={5}
            />
            <TestimonialCard
              name="Carlos Eduardo"
              location="Itajaí, SC"
              content="A reforma da minha piscina antiga ficou perfeita. Cumpriram o prazo e o orçamento como combinado. Recomendo a todos!"
              rating={4}
            />
            <TestimonialCard
              name="Fernanda Silva"
              location="Joinville, SC"
              content="Instalaram o sistema de aquecimento na minha piscina e agora posso usá-la o ano todo. Profissionais muito qualificados e prestativos."
              rating={5}
            />
            <TestimonialCard
              name="Paulo Mendes"
              location="Blumenau, SC"
              content="Ótima experiência com a equipe da Maicon Piscinas. A manutenção é feita com excelência e o atendimento é sempre cordial."
              rating={5}
            />
            <TestimonialCard
              name="Juliana Martins"
              location="São José, SC"
              content="Excelente trabalho na instalação da piscina no nosso condomínio. Todos os moradores estão muito satisfeitos com o resultado."
              rating={4}
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
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
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
