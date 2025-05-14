
import BenefitCard from "@/components/BenefitCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Building, Users, Dumbbell, Anchor, Waves } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-epic-gray">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-epic-blue mb-4">Benefícios Exclusivos</h2>
          <p className="text-epic-black text-lg max-w-3xl mx-auto">
            Descubra os diferenciais que fazem do Epic Golf Residence a escolha ideal para quem busca exclusividade e bem-estar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard icon={MapPin} title="Localização Privilegiada" description="Ao lado do Campo de Golfe Olímpico, no ponto mais nobre da Barra da Tijuca." />
          <BenefitCard icon={Building} title="Infraestrutura Completa" description="Lazer completo em mais de 12.788 m² de terreno." />
          <BenefitCard icon={Users} title="Serviços Exclusivos" description="Concierge, Grab & Go, Car Wash, Private Ride e muito mais." />
          <BenefitCard icon={Dumbbell} title="Gestão Esportiva Profissional" description="Companhia Athletica gerenciando todas as atividades esportivas." />
          <BenefitCard icon={Anchor} title="Acesso à Praia" description="Serviço de Balsa exclusivo para acesso à praia da Barra." />
          <BenefitCard icon={Waves} title="Gardens e Coberturas com Piscina" description="Unidades Garden e Coberturas com piscinas privativas." />
        </div>
        
        <div className="mt-16 text-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
