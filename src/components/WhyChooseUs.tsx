
import { motion, AnimatePresence } from "framer-motion";
import { Award, ThumbsUp, Wrench, Sparkles, Leaf, Shield, Headphones, Heart } from "lucide-react";
import WaterEffect3D from './WaterEffect3D';
import WaterDripAnimation from './WaterDripAnimation';

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Compromisso com a Qualidade",
      description: "Garantimos que todos os serviços atendem aos mais altos padrões de qualidade, utilizando os melhores produtos e técnicas para resultados duradouros.",
      icon: Award,
      delay: 0.2
    },
    {
      title: "Satisfação do Cliente",
      description: "Nosso objetivo é a satisfação total dos nossos clientes, oferecendo serviços personalizados com atenção especial às suas necessidades.",
      icon: ThumbsUp,
      delay: 0.3
    },
    {
      title: "Profissionalismo e Ética",
      description: "Atuamos com transparência, respeito e responsabilidade em todas as nossas relações.",
      icon: Shield,
      delay: 0.4
    },
    {
      title: "Inovação e Tecnologia",
      description: "Buscamos sempre novas tecnologias para oferecer soluções mais eficazes e eficientes.",
      icon: Sparkles,
      delay: 0.5
    },
    {
      title: "Sustentabilidade",
      description: "Valorizamos práticas que promovem a preservação ambiental, utilizando produtos sustentáveis e métodos que garantem a saúde e segurança de nossos clientes.",
      icon: Leaf,
      delay: 0.6
    },
    {
      title: "Atendimento Exclusivo",
      description: "Atendimento personalizado 24/7 com suporte técnico especializado para garantir a máxima satisfação dos nossos clientes em qualquer situação.",
      icon: Headphones,
      delay: 0.7
    },
    {
      title: "Comprometimento",
      description: "Dedicamos atenção total em cada projeto, garantindo que seu investimento seja valorizado e sua piscina tenha vida longa e funcionamento perfeito.",
      icon: Heart,
      delay: 0.8
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="bg-gradient-to-r from-pool-700 to-pool-600 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Background elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-pool-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pool-400/20 rounded-full blur-3xl"></div>
          
          {/* Water drip effects */}
          <WaterDripAnimation intensity="light" color="rgba(255, 255, 255, 0.6)" />
          
          <div className="relative z-10">
            <motion.div 
              className="text-center text-white max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Maicon Piscinas?</h2>
              <p className="text-white/80 md:text-lg">
                Somos especialistas e referência no mercado, oferecendo atendimento personalizado e soluções completas para sua piscina.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {cards.map((card, index) => (
                  <WaterEffect3D key={index} className="h-full" intensity="light" hoverEffect={true}>
                    <motion.div 
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: card.delay }}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div
                          className="bg-pool-500/30 p-3 rounded-lg mr-3 relative overflow-hidden"
                          whileHover={{ rotate: 10 }}
                          animate={{
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <card.icon className="w-6 h-6 text-white relative z-10" />
                          {/* Small water ripple effect inside icon background */}
                          <motion.div
                            className="absolute inset-0 bg-pool-400/40 rounded-lg"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                        </motion.div>
                        <h3 className="text-xl font-semibold">{card.title}</h3>
                      </div>
                      <p className="text-white/80">
                        {card.description}
                      </p>
                    </motion.div>
                  </WaterEffect3D>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
