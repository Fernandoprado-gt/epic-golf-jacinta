
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
        "w-full bg-epic-gold hover:bg-epic-blue text-white font-semibold py-3 md:py-4 text-sm transition-all duration-300 mt-2 shadow-sm hover:shadow-md btn-hover-effect",
        onDark ? "hover:bg-white hover:text-epic-blue" : ""
      )}
    >
      {isSubmitting ? "Enviando..." : "Enviar"}
      {!isSubmitting && <ArrowRight className="h-4 w-4 ml-2" />}
    </Button>
  );
};

export default SubmitButton;
