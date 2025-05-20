
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  customMessage?: string;
  inverted?: boolean;
  buttonText?: string;
  centered?: boolean;
}

const WhatsAppButton = ({ 
  className, 
  variant = "default", 
  size = "default",
  customMessage,
  inverted = false,
  buttonText,
  centered = true
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    // Use consistent phone number across the site
    const phoneNumber = "5521988384869"; 
    const message = customMessage || "";
    const encodedMessage = encodeURIComponent(message);
    
    // Use the official wa.me format
    const whatsAppUrl = message 
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://wa.me/${phoneNumber}`;
    
    // Trigger Google Ads conversion tracking without blocking the redirect
    if (typeof window !== 'undefined') {
      // Fire the conversion tag
      window.gtag?.('event', 'conversion', {'send_to': 'AW-11491239026/_0qpCOWfp8gaEPLIuecq'});
    }
    
    // Open WhatsApp in a new tab without delay
    window.open(whatsAppUrl, "_blank");
  };

  // Default text if no custom text is provided
  const defaultText = "Falar no WhatsApp";

  return (
    <Button 
      variant={variant} 
      size={size}
      onClick={handleWhatsAppClick}
      className={cn(
        "font-semibold flex items-center gap-2 py-3 md:py-4 lg:py-6 px-3 md:px-5 text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg btn-hover-effect",
        // Semi-transparent background for better readability
        inverted 
          ? "bg-white/95 text-epic-blue hover:bg-epic-gold hover:text-white" 
          : "bg-epic-gold/95 text-white hover:bg-white hover:text-epic-blue",
        // Center the button if centered prop is true
        centered ? "mx-auto" : "",
        className
      )}
    >
      <MessageSquare className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
      <span className="line-clamp-1">{buttonText || defaultText}</span>
      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
    </Button>
  );
};

export default WhatsAppButton;
