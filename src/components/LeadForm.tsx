
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  whatsapp: z
    .string()
    .min(10, { message: "WhatsApp inválido" })
    .refine((val) => /^[0-9]+$/.test(val), {
      message: "WhatsApp deve conter apenas números",
    }),
  interest: z.string({
    required_error: "Por favor selecione seu interesse.",
  }),
});

interface LeadFormProps {
  className?: string;
  onDark?: boolean;
}

const LeadForm = ({ className, onDark = false }: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      interest: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(
                "text-base font-medium",
                onDark ? "text-white" : "text-epic-black"
              )}>
                Nome
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu nome completo" 
                  {...field} 
                  className={cn(
                    "py-5 md:py-6 text-base transition-all focus:ring-epic-gold",
                    onDark ? "bg-white/20 text-white placeholder:text-white/70 border-white/30" : "border-epic-blue/20"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(
                "text-base font-medium",
                onDark ? "text-white" : "text-epic-black"
              )}>
                WhatsApp
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="(21) 98888-8888" 
                  {...field} 
                  className={cn(
                    "py-5 md:py-6 text-base transition-all focus:ring-epic-gold",
                    onDark ? "bg-white/20 text-white placeholder:text-white/70 border-white/30" : "border-epic-blue/20"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(
                "text-base font-medium",
                onDark ? "text-white" : "text-epic-black"
              )}>
                Interesse
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={cn(
                    "py-5 md:py-6 text-base transition-all",
                    onDark ? "bg-white/20 text-white border-white/30" : "border-epic-blue/20"
                  )}>
                    <SelectValue placeholder="Selecione seu interesse" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="garden">Garden</SelectItem>
                  <SelectItem value="cobertura">Cobertura</SelectItem>
                  <SelectItem value="investimento">Investimento</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className={cn(
            "w-full bg-epic-gold hover:bg-epic-blue text-white font-semibold py-5 md:py-6 text-base transition-all duration-300 mt-2 shadow-md hover:shadow-lg btn-hover-effect",
            onDark ? "hover:bg-white hover:text-epic-blue" : ""
          )}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
          {!isSubmitting && <ArrowRight className="h-5 w-5" />}
        </Button>
      </form>
    </Form>
  );
};

export default LeadForm;
