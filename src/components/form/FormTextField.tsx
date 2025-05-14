
import React from "react";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface FormTextFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  onDark?: boolean;
}

const FormTextField = ({ 
  control, 
  name, 
  label, 
  placeholder, 
  onDark = false 
}: FormTextFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn(
            "text-base font-medium",
            onDark ? "text-white" : "text-epic-black"
          )}>
            {label}
          </FormLabel>
          <FormControl>
            <Input 
              placeholder={placeholder} 
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
  );
};

export default FormTextField;
