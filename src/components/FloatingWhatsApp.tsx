
import { cn } from "@/lib/utils";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá, vim do site do Epic Golf Residence e gostaria de receber mais informações.";
    const encodedMessage = encodeURIComponent(message);
    const whatsAppUrl = `https://wa.me/5521999195838?text=${encodedMessage}`;
    
    // Track WhatsApp click for analytics
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'whatsapp_click',
        'button_location': 'floating'
      });
    }
    
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 rounded-full shadow-lg hover:shadow-xl",
        "flex items-center justify-center",
        "transition-all duration-300 transform hover:scale-110",
        "overflow-hidden"
      )}
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/641ab090-2b5f-4ba1-b3da-aea0aabfc98f.png" 
        alt="WhatsApp" 
        className="w-14 h-14 object-cover rounded-full"
      />
    </button>
  );
};

export default FloatingWhatsApp;
