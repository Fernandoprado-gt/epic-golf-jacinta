
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
        "bg-epic-green hover:bg-epic-green/90 text-white font-medium flex items-center gap-2",
        className
      )}
    >
      Quero saber mais sobre o Epic Golf Residence
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
};

export default WhatsAppButton;
