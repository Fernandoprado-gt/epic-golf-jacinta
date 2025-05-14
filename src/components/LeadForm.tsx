
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Form } from "@/components/ui/form";

import { leadFormSchema, LeadFormValues } from "@/components/form/leadFormSchema";
import { useLeadFormSubmit } from "@/hooks/useLeadFormSubmit";
import FormTextField from "@/components/form/FormTextField";
import InterestSelect from "@/components/form/InterestSelect";
import SubmitButton from "@/components/form/SubmitButton";

interface LeadFormProps {
  className?: string;
  onDark?: boolean;
}

const LeadForm = ({ className, onDark = false }: LeadFormProps) => {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      interest: "",
    },
  });

  const { isSubmitting, onSubmit } = useLeadFormSubmit(form);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "space-y-4 rounded-lg p-5 md:p-6 shadow-lg transition-all",
          onDark ? "bg-epic-blue/90 backdrop-blur-sm border border-white/10" : "bg-white",
          className
        )}
      >
        <h3 className={cn(
          "text-xl md:text-2xl font-bold mb-4",
          onDark ? "text-white" : "text-epic-blue"
        )}>
          Receba mais informações
        </h3>
        
        <FormTextField
          control={form.control}
          name="name"
          label="Nome"
          placeholder="Seu nome completo"
          onDark={onDark}
        />
        
        <FormTextField
          control={form.control}
          name="whatsapp"
          label="WhatsApp"
          placeholder="(21) 98888-8888"
          onDark={onDark}
        />
        
        <InterestSelect
          control={form.control}
          onDark={onDark}
        />
        
        <SubmitButton
          isSubmitting={isSubmitting}
          onDark={onDark}
        />
      </form>
    </Form>
  );
};

export default LeadForm;
