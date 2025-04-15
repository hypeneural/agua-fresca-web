import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  phone: z.string().min(10, {
    message: "Por favor, insira um número de telefone válido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccessMessage('Mensagem enviada com sucesso!');
        setErrorMessage(null);
        form.reset();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Ocorreu um erro ao enviar a mensagem.');
        setSuccessMessage(null);
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Ocorreu um erro ao enviar a mensagem.');
      setSuccessMessage(null);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input 
          id="name"
          placeholder="Seu Nome"
          type="text"
          {...form.register("name")}
        />
        {form.formState.errors.name && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
        )}
      </div>
      <div>
        <Input
          id="email"
          placeholder="Seu Email"
          type="email"
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <Input
          id="phone"
          placeholder="Seu Telefone"
          type="tel"
          {...form.register("phone")}
        />
        {form.formState.errors.phone && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
        )}
      </div>
      <div>
        <Textarea
          id="message"
          placeholder="Sua Mensagem"
          rows={4}
          {...form.register("message")}
        />
        {form.formState.errors.message && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full">Enviar Mensagem</Button>

      {successMessage && (
        <div className="text-green-500 text-center">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="text-red-500 text-center">{errorMessage}</div>
      )}
    </form>
  );
};

export default ContactForm;
