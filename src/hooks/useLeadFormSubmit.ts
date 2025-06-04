
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { LeadFormValues } from "@/components/form/leadFormSchema";

export const useLeadFormSubmit = (form: UseFormReturn<LeadFormValues>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: LeadFormValues) {
    setIsSubmitting(true);
    
    try {
      // Save lead to Supabase
      const { error } = await supabase
        .from('leads')
        .insert({
          name: values.name,
          whatsapp: values.whatsapp,
          interest: values.interest,
        });

      if (error) {
        console.error('Error saving lead:', error);
        toast.error("Erro ao enviar formulário. Tente novamente.", {
          description: "Houve um problema ao salvar seus dados.",
        });
        setIsSubmitting(false);
        return;
      }

      // If successful, show success message and redirect to WhatsApp
      const message = "Olá, acabei de me cadastrar na página do Epic Golf Residence e gostaria de receber mais informações.";
      const encodedMessage = encodeURIComponent(message);
      const whatsAppUrl = `https://wa.me/5521999195838?text=${encodedMessage}`;
      
      toast.success("Formulário enviado com sucesso!", {
        description: "Você será redirecionado para o WhatsApp em instantes.",
      });
      
      // Call Google Ads conversion tracking for lead form submission
      if (typeof window !== 'undefined' && window.gtag_report_conversion_lead) {
        window.gtag_report_conversion_lead();
      }
      
      setTimeout(() => {
        window.open(whatsAppUrl, "_blank");
      }, 1500);
      
      form.reset();
      
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("Erro inesperado. Tente novamente.", {
        description: "Houve um problema ao processar sua solicitação.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return { isSubmitting, onSubmit };
};

// Extend Window interface to include the new conversion function
declare global {
  interface Window {
    gtag_report_conversion_lead?: (url?: string) => boolean;
  }
}
