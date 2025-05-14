
import WhatsAppButton from "@/components/WhatsAppButton";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-epic-blue text-white">
      <div className="container max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 break-normal">
          Viva além do extraordinário
        </h2>
        <p className="text-white/90 text-base sm:text-lg mb-6 md:mb-8 max-w-xl mx-auto px-1">
          Descubra o que torna o Epic Golf Residence único e como este empreendimento pode elevar seu estilo de vida.
        </p>
        <WhatsAppButton 
          className="md:min-w-[320px] text-center justify-center" 
          buttonText="Falar com um Especialista" 
        />
      </div>
    </section>
  );
};

export default CtaSection;
