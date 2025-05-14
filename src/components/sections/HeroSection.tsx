
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadForm from "@/components/LeadForm";

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: "url('/lovable-uploads/42b4fad2-b4dd-4564-b5b2-38801ae5153d.png')"
      }}>
        {/* Dark overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-epic-blue/60 to-epic-blue/70"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-5 sm:px-6 h-full flex flex-col justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16">
          <div className="w-full md:w-7/12 text-center md:text-left animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight break-normal hyphens-none">
              Viva além do extraordinário no Epic Golf Residence
            </h1>
            <p className="text-epic-gold text-base sm:text-lg mb-4 px-1">
              Cada detalhe pensado para surpreender você todos os dias
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl text-epic-gold font-medium mb-6 break-normal">
              Apartamentos, Gardens e Coberturas de até 208m² no ponto mais nobre da Barra: o Golfe Olímpico
            </h2>
          </div>
          
          <div className="w-full md:w-5/12 md:max-w-md bg-epic-blue/40 p-5 sm:p-6 rounded-lg backdrop-blur-sm">
            <LeadForm onDark={true} />
          </div>
        </div>
        
        {/* WhatsApp button positioned at the bottom right */}
        <div className="hidden md:block absolute bottom-0 right-0 pb-6 pr-6">
          <WhatsAppButton 
            buttonText="Falar no WhatsApp"
            centered={false}
            className="shadow-lg" 
          />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm opacity-80 mb-2">Descubra mais</p>
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
