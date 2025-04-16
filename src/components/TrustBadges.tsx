
import { motion } from "framer-motion";
import { Star, Shield, ThumbsUp, Clock, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      title: "5/5 Avaliação",
      description: "Excelência reconhecida pelos clientes"
    },
    {
      icon: Shield,
      title: "200+ Projetos Realizados",
      description: "Experiência comprovada em manutenção de piscinas"
    },
    {
      icon: ThumbsUp,
      title: "98% de Aprovação",
      description: "Clientes satisfeitos com nosso trabalho"
    },
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Resposta em até 2 horas úteis"
    },
    {
      icon: Users,
      title: "500+ Clientes",
      description: "Atendidos com excelência em Santa Catarina"
    }
  ];

  return (
    <div className="py-8 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-0 left-0 w-20 h-20 bg-pool-500 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-32 h-32 bg-pool-400 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full sm:w-auto"
            >
              <div className="mr-4 text-pool-600 bg-pool-50 p-3 rounded-full">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                >
                  <badge.icon size={24} />
                </motion.div>
              </div>
              <div>
                <p className="font-semibold text-gray-800">{badge.title}</p>
                <p className="text-xs text-gray-500">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
