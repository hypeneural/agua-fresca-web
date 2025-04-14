
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <img src="https://maiconpiscinas.com.br/bio/logo.png" alt="Maicon Piscinas" className="h-12 mb-6" />
            <p className="mb-6 text-gray-300">
              Soluções completas em piscinas para residências e empresas em Tijucas e região.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/maicon_piscinas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/maicon_piscinas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 w-5 h-5 text-pool-400 mt-1" />
                <div>
                  <p className="text-gray-300">Telefone</p>
                  <a href="tel:+5548999232642" className="hover:text-pool-400 transition-colors">
                    (48) 99923-2642
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 w-5 h-5 text-pool-400 mt-1" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:contato@maiconpiscinas.com.br" className="hover:text-pool-400 transition-colors">
                    contato@maiconpiscinas.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 w-5 h-5 text-pool-400 mt-1" />
                <div>
                  <p className="text-gray-300">Endereço</p>
                  <p>Tijucas-SC</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 w-5 h-5 text-pool-400 mt-1" />
                <div>
                  <p className="text-gray-300">Horário</p>
                  <p>Segunda a Sexta: 08:00 - 18:00</p>
                  <p>Sábado: 09:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Serviços</h3>
            <ul className="space-y-2">
              {[
                "Instalação de Piscinas",
                "Instalação de Spas",
                "Conjunto Filtrante",
                "Manutenção de Bombas",
                "Venda de Produtos",
                "Limpeza e Tratamento",
                "Troca de Areia",
                "Capas de Proteção"
              ].map((service) => (
                <li key={service}>
                  <a href="#servicos" className="text-gray-300 hover:text-pool-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Área de Atendimento</h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
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
            <p className="mt-4 text-gray-300 text-sm">
              Atendemos toda região de Florianópolis e principais cidades de Santa Catarina.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Maicon Piscinas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
