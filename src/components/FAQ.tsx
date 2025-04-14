
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Com que frequência devo fazer a manutenção?",
    answer: "Recomendamos a manutenção preventiva de piscinas semanalmente. Para piscinas de uso intenso, duas vezes por semana é o ideal para garantir a qualidade da água e o funcionamento adequado dos equipamentos."
  },
  {
    question: "Como recuperar uma piscina com água verde?",
    answer: "A recuperação de água verde envolve um tratamento de choque com cloro, ajuste de pH, uso de algicidas específicos, filtração contínua e, em casos graves, pode ser necessária a drenagem parcial ou total. Nossos profissionais realizam esse processo de forma rápida e eficiente."
  },
  {
    question: "Qual é a importância do tratamento químico?",
    answer: "O tratamento químico é essencial para eliminar bactérias e microorganismos nocivos, prevenir o surgimento de algas, manter a água cristalina, proteger os banhistas e aumentar a vida útil dos equipamentos e da estrutura da piscina."
  },
  {
    question: "O que está incluído na manutenção?",
    answer: "Nossa manutenção completa inclui limpeza do cesto do skimmer, limpeza do pré-filtro da bomba, aspiração do fundo, escovação das paredes, tratamento químico (cloro, pH, alcalinidade), limpeza da linha d'água e inspeção dos equipamentos."
  },
  {
    question: "Vocês oferecem garantia nos serviços?",
    answer: "Sim, todos os nossos serviços de instalação e reparo possuem garantia. O período varia de acordo com o tipo de serviço realizado, podendo ser de 3 meses a 1 ano, conforme contrato de prestação de serviço."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<{[key: number]: boolean}>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-3 title-underline-center">Perguntas Frequentes</h2>
          <p className="text-gray-600">
            Tire suas dúvidas sobre nossos serviços e o cuidado com piscinas
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <Collapsible
                open={openItems[index]}
                onOpenChange={() => toggleItem(index)}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <div className="text-pool-600">
                    {openItems[index] ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0 bg-gray-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
