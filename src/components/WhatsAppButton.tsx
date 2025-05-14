
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  customMessage?: string;
}

const WhatsAppButton = ({ 
  className, 
  variant = "default", 
  size = "default",
  customMessage
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
        "bg-epic-gold hover:bg-epic-blue text-white font-semibold flex items-center gap-2 py-6 px-5 text-base transition-all duration-300 shadow-md hover:shadow-lg btn-hover-effect",
        className
      )}
    >
      Quero saber mais sobre o Epic Golf Residence
      <ArrowRight className="h-5 w-5" />
    </Button>
  );
};

export default WhatsAppButton;
