
import * as z from "zod";

export const leadFormSchema = z.object({
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

export type LeadFormValues = z.infer<typeof leadFormSchema>;
