
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { LeadFormValues } from "@/components/form/leadFormSchema";

export const useLeadFormSubmit = (form: UseFormReturn<LeadFormValues>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(values: LeadFormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Open WhatsApp with pre-filled message
      const message = "Olá, acabei de me cadastrar na página do Epic Golf Residence e gostaria de receber mais informações.";
      const encodedMessage = encodeURIComponent(message);
      const whatsAppUrl = `https://wa.me/5521988384869?text=${encodedMessage}`;
      
      toast.success("Formulário enviado com sucesso!", {
        description: "Você será redirecionado para o WhatsApp em instantes.",
      });
      
      setTimeout(() => {
        window.open(whatsAppUrl, "_blank");
      }, 1500);
      
      form.reset();
    }, 1000);
  }

  return { isSubmitting, onSubmit };
};
