
import { ArrowRight, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormButtonProps {
  className?: string;
  buttonText?: string;
  centered?: boolean;
}

const FormButton = ({ 
  className, 
  buttonText = "Quero Mais Informações",
  centered = true
}: FormButtonProps) => {
  
  const scrollToForm = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
      
      // Track form button click for analytics
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          'event': 'form_button_click',
          'button_text': buttonText
        });
      }
    }
  };

  return (
    <button 
      onClick={scrollToForm}
      className={cn(
        "font-semibold flex items-center justify-center gap-2 py-2 md:py-3 px-4 md:px-5 text-sm transition-all duration-300 shadow-sm hover:shadow-md rounded-md",
        "bg-epic-gold text-white hover:bg-epic-blue hover:text-white",
        centered ? "mx-auto" : "",
        className
      )}
    >
      <MessageSquare className="h-4 w-4 flex-shrink-0" />
      <span className="line-clamp-1">{buttonText}</span>
      <ArrowRight className="h-4 w-4 flex-shrink-0" />
    </button>
  );
};

export default FormButton;
