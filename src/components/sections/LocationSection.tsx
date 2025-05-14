
import LocationMap from "@/components/LocationMap";
import WhatsAppButton from "@/components/WhatsAppButton";

const LocationSection = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-epic-blue text-white">
      <div className="container max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 break-normal">
            Localização Privilegiada
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto px-1">
            Localizado na Av. Ermanno Dallari, 200 – Barra da Tijuca, ao lado do Campo de Golfe Olímpico, 
            próximo ao Rio Design Barra, Vogue Square e Praia da Barra.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-2">
            <LocationMap />
          </div>
          
          <div className="space-y-5 md:space-y-6 flex flex-col">
            <div className="bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-lg shadow-sm border border-white/20 w-full">
              <h3 className="font-medium text-epic-gold text-xl mb-3 md:mb-4">Pontos de Interesse</h3>
              <ul className="mt-2 space-y-2 md:space-y-3">
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-epic-green"></span>
                  <span className="text-white/90">Campo de Golfe Olímpico</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-epic-green"></span>
                  <span className="text-white/90">Lagoa de Marapendi</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-epic-green"></span>
                  <span className="text-white/90">Praia da Barra</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-epic-green"></span>
                  <span className="text-white/90">Supermercado Zona Sul</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-epic-green"></span>
                  <span className="text-white/90">Academia DNA</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-epic-green"></span>
                  <span className="text-white/90">Shoppings e escolas próximas</span>
                </li>
              </ul>
            </div>
            
            <WhatsAppButton 
              className="w-full" 
              variant="outline" 
              buttonText="Ver Mais no WhatsApp"
              centered={false} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
