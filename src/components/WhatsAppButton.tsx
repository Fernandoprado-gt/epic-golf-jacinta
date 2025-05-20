
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

// Add Window interface augmentation for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
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
  // The phone number to contact - ensure it's formatted correctly for WhatsApp
  // Format: Country code without + and remove any spaces, dashes, parentheses
  const phoneNumber = "5521999195838";
  const message = customMessage || "";
  const encodedMessage = encodeURIComponent(message);
  
  // Build the standard wa.me link format
  const whatsAppUrl = message 
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://wa.me/${phoneNumber}`;

  // Default text if no custom text is provided
  const defaultText = "Falar no WhatsApp";

  // Handler to track WhatsApp button clicks using GTM
  const handleWhatsAppClick = () => {
    // Push to dataLayer for GTM tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'whatsapp_click',
        'whatsapp_text': buttonText || defaultText,
        'whatsapp_phone': phoneNumber,
        'whatsapp_message': message
      });
    }
  };

  return (
    <a 
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className={cn(
        "font-semibold flex items-center justify-center gap-2 py-2 md:py-3 px-4 md:px-5 text-sm transition-all duration-300 shadow-sm hover:shadow-md rounded-md",
        // Semi-transparent background for better readability
        inverted 
          ? "bg-white text-epic-blue hover:bg-epic-gold hover:text-white border border-epic-gold" 
          : "bg-epic-gold text-white hover:bg-epic-blue hover:text-white",
        // Center the button if centered prop is true
        centered ? "mx-auto" : "",
        className
      )}
    >
      <MessageSquare className="h-4 w-4 flex-shrink-0" />
      <span className="line-clamp-1">{buttonText || defaultText}</span>
      <ArrowRight className="h-4 w-4 flex-shrink-0" />
    </a>
  );
};

export default WhatsAppButton;
