
import { motion } from "framer-motion";
import { Star, Shield, ThumbsUp, Clock, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      title: "4.9/5 Avaliação",
      description: "Excelência reconhecida pelos clientes"
    },
    {
      icon: Shield,
      title: "Garantia de Serviço",
      description: "Satisfação garantida em todos os serviços"
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
    <div className="py-8 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="mr-3 text-pool-600">
                <badge.icon size={24} />
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
