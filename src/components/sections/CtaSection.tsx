
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-epic-blue text-white">
      <div className="container max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 break-normal">
          Viva além do extraordinário
        </h2>
        <p className="text-white/90 text-base sm:text-lg mb-8 md:mb-10 max-w-xl mx-auto px-1">
          Descubra o que torna o Epic Golf Residence único e como este empreendimento pode elevar seu estilo de vida.
        </p>
        
        {/* Primary CTA Button */}
        <WhatsAppButton 
          className="md:min-w-[320px] text-center justify-center mb-4 bg-epic-gold hover:bg-white hover:text-epic-blue" 
          buttonText="Falar com um Especialista" 
        />
        
        {/* Social Proof */}
        <div className="mt-8 text-sm text-white/80">
          <p className="font-medium">Junte-se às dezenas de pessoas que já garantiram seu espaço</p>
          <div className="flex justify-center mt-3 space-x-1">
            <span className="inline-block w-3 h-3 bg-epic-gold rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-epic-gold rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-epic-gold rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-epic-gold rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-epic-gold rounded-full"></span>
          </div>
          <p className="mt-2">★★★★★ <span className="font-medium">5.0/5.0</span> - Avaliação dos nossos clientes</p>
        </div>
        
        {/* Urgency Element */}
        <div className="mt-8 border border-white/20 rounded-md p-4 inline-block bg-epic-blue/50 backdrop-blur-sm">
          <p className="text-epic-gold font-semibold flex items-center justify-center gap-2">
            Unidades limitadas disponíveis <ArrowRight className="h-4 w-4" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
