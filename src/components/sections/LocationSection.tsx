
import LocationMap from "@/components/LocationMap";
import WhatsAppButton from "@/components/WhatsAppButton";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-epic-blue text-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Localização Privilegiada</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Localizado na Av. Ermanno Dallari, 200 – Barra da Tijuca, ao lado do Campo de Golfe Olímpico, 
            próximo ao Rio Design Barra, Vogue Square e Praia da Barra.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <LocationMap />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
              <h3 className="font-medium text-epic-gold text-xl mb-4">Pontos de Interesse</h3>
              <ul className="mt-2 space-y-3">
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
            
            <WhatsAppButton className="w-full" variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
