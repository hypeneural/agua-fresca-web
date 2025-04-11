
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato o mais breve possível.",
      variant: "default",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Nome completo"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-gray-300 focus:border-pool-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-gray-300 focus:border-pool-500"
        />
        <Input
          type="tel"
          placeholder="Telefone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border-gray-300 focus:border-pool-500"
        />
      </div>
      <div>
        <Textarea
          placeholder="Mensagem"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="border-gray-300 focus:border-pool-500 resize-none"
        />
      </div>
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full bg-pool-600 hover:bg-pool-700"
      >
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </Button>
      <p className="text-xs text-gray-500 text-center">
        Ao enviar, você concorda com nossa política de privacidade.
      </p>
    </form>
  );
};

export default ContactForm;
