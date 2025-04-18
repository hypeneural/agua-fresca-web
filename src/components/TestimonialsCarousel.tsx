
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialsCarousel = () => {
  const isMobile = useIsMobile();
  
  const testimonials: Testimonial[] = [
    {
      name: "Carlos M.",
      location: "Tijucas, SC",
      content: "O Maicon fez um trabalho excelente na minha piscina! A limpeza e manutenção estão impecáveis, e o atendimento é sempre atencioso e rápido.",
      rating: 5
    },
    {
      name: "Maria J.",
      location: "Tijucas, SC",
      content: "O serviço de recuperação de água verde foi surpreendente! Minha piscina ficou renovada e super limpa, com um preço justo. Super recomendo!",
      rating: 5
    },
    {
      name: "Pedro S.",
      location: "Porto Belo, SC",
      content: "Instalação de equipamentos perfeita! Tudo funcionando conforme prometido e dentro do prazo estabelecido. Profissionais muito capacitados.",
      rating: 5
    },
    {
      name: "Ana L.",
      location: "Itapema, SC",
      content: "Contratei a troca de areia do filtro e o resultado foi excelente. Água cristalina e atendimento de primeira qualidade!",
      rating: 5
    },
    {
      name: "Roberto D.",
      location: "Balneário Camboriú, SC",
      content: "Excelente serviço de manutenção mensal. Nunca mais tive problemas com a água da piscina desde que contratei o Maicon.",
      rating: 5
    }
  ];

  return (
    <motion.div 
      className="relative px-4 py-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="max-w-5xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-1/2"} >
              <div className="p-1">
                <TestimonialCard
                  name={testimonial.name}
                  location={testimonial.location}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  image={testimonial.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2 md:hidden">
          <CarouselPrevious className="relative static left-0 right-auto translate-y-0 bg-white hover:bg-gray-100" />
          <CarouselNext className="relative static right-0 left-auto translate-y-0 bg-white hover:bg-gray-100" />
        </div>
      </Carousel>
    </motion.div>
  );
};

export default TestimonialsCarousel;
