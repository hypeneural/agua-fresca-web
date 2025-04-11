
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5548999999999?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Maicon%20Piscinas"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Entre em contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute animate-ripple rounded-full bg-green-400 opacity-40 w-full h-full"></span>
    </a>
  );
};

export default WhatsAppButton;
