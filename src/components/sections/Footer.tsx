
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  // Handler for WhatsApp click in the footer
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const whatsAppUrl = "https://wa.me/5521999195838";
    
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
      return window.gtag_report_conversion(whatsAppUrl);
    } else {
      window.location.href = whatsAppUrl;
      return false;
    }
  };

  return (
    <footer className="py-8 bg-epic-blue text-white/70">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2025 Epic Golf Residence. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-epic-gold" />
              <p>Av. Ermanno Dallari, 200 – Barra da Tijuca, Rio de Janeiro - RJ</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-epic-gold" />
              <a 
                href="https://wa.me/5521999195838"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="hover:text-epic-gold transition-colors"
              >
                +55 21 99919-5838
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-epic-gold transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-epic-gold transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Agência Tendência reference */}
        <div className="mt-4 text-center text-xs text-white/50">
          <p>
            Desenvolvido por <a 
              href="https://agenciatendencia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-epic-gold transition-colors"
            >
              agenciatendencia.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
