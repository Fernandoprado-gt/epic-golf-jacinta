
import React from "react";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control } from "react-hook-form";

interface InterestSelectProps {
  control: Control<any>;
  onDark?: boolean;
}

const InterestSelect = ({ control, onDark = false }: InterestSelectProps) => {
  return (
    <FormField
      control={control}
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
  );
};

export default InterestSelect;
