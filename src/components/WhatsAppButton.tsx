
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  customMessage?: string;
  inverted?: boolean;
}

const WhatsAppButton = ({ 
  className, 
  variant = "default", 
  size = "default",
  customMessage,
  inverted = false
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const message = customMessage || "";
    const encodedMessage = encodeURIComponent(message);
    const whatsAppUrl = `https://wa.me/5521988384869?text=${encodedMessage}`;
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <Button 
      variant={variant} 
      size={size}
      onClick={handleWhatsAppClick}
      className={cn(
        "font-semibold flex items-center gap-2 py-4 md:py-6 px-3 md:px-5 text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg btn-hover-effect",
        // Semi-transparent background for better readability
        inverted 
          ? "bg-white/95 text-epic-blue hover:bg-epic-gold hover:text-white" 
          : "bg-epic-gold/95 text-white hover:bg-white hover:text-epic-blue",
        className
      )}
    >
      <span className="line-clamp-1">Quero saber mais sobre o Epic Golf Residence</span>
      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
    </Button>
  );
};

export default WhatsAppButton;
