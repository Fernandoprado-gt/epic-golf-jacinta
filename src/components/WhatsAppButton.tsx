
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
  // The phone number to contact
  const phoneNumber = "5521999195838"; 
  const message = customMessage || "";
  const encodedMessage = encodeURIComponent(message);
  
  // Build the standard wa.me link format
  const whatsAppUrl = message 
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://wa.me/${phoneNumber}`;

  // Default text if no custom text is provided
  const defaultText = "Falar no WhatsApp";

  return (
    <a 
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "font-semibold flex items-center justify-center gap-2 py-3 md:py-4 lg:py-5 px-4 md:px-6 text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg rounded-md",
        // Semi-transparent background for better readability
        inverted 
          ? "bg-white text-epic-blue hover:bg-epic-gold hover:text-white border border-epic-gold" 
          : "bg-epic-gold text-white hover:bg-epic-blue hover:text-white",
        // Center the button if centered prop is true
        centered ? "mx-auto" : "",
        className
      )}
    >
      <MessageSquare className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
      <span className="line-clamp-1">{buttonText || defaultText}</span>
      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
    </a>
  );
};

export default WhatsAppButton;
