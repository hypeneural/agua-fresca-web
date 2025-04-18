
import { motion } from "framer-motion";
import { Award, ThumbsUp, Wrench, Sparkles, Leaf, Shield, Headphones } from "lucide-react";
import WaterEffect3D from './WaterEffect3D';

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
    }
  ];

  // Animated floating bubbles
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="bg-gradient-to-r from-pool-700 to-pool-600 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Enhanced 3D water background effect */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-pool-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pool-400/20 rounded-full blur-3xl"></div>
          
          {/* Animated water bubbles */}
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full bg-white/10"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: bubble.left,
                top: '100%',
                filter: "blur(1px)"
              }}
              animate={{
                y: [0, -500],
                x: [0, (Math.random() * 40) - 20],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0.8]
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeOut"
              }}
            />
          ))}
          
          <div className="relative z-10">
            <motion.div 
              className="text-center text-white max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Maicon Piscinas?</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <WaterEffect3D key={index} className="h-full" intensity="strong" hoverEffect={true}>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: card.delay }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="bg-pool-500/30 p-3 rounded-lg mr-3"
                        whileHover={{ rotate: 10 }}
                        animate={{
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            '0 0 0 rgba(255,255,255,0.1)',
                            '0 0 20px rgba(255,255,255,0.3)',
                            '0 0 0 rgba(255,255,255,0.1)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <card.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                    <p className="text-white/80">
                      {card.description}
                    </p>
                    
                    {/* Water drop animation */}
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-16 h-16 pointer-events-none"
                      animate={{
                        y: [0, 10, 0],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                        <path fill="#fff" d="M50,0 C50,0 65,40 65,70 C65,85 55,95 50,95 C45,95 35,85 35,70 C35,40 50,0 50,0 Z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </WaterEffect3D>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
