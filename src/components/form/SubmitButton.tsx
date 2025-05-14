
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  onDark?: boolean;
}

const SubmitButton = ({ isSubmitting, onDark = false }: SubmitButtonProps) => {
  return (
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
  );
};

export default SubmitButton;
