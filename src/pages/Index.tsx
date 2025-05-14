import { useEffect } from "react";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import BenefitCard from "@/components/BenefitCard";
import ImageGallery from "@/components/ImageGallery";
import LocationMap from "@/components/LocationMap";
import FaqSection from "@/components/FaqSection";
import { MapPin, Building, Users, Dumbbell, Anchor, Waves } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

// Imagens da Galeria atualizadas
const galleryImages = [
  {
    src: "/lovable-uploads/71122c7c-3b6c-4618-95ea-ab562119c256.png",
    alt: "Fachada do Epic Golf Residence",
    caption: "Fachada por Feu Arquitetura",
    category: "Fachada"
  },
  {
    src: "/lovable-uploads/526c0df1-1bcf-4f5c-b4a6-4ca9aee138a5.png",
    alt: "Fachada lateral do Epic Golf Residence",
    caption: "Fachada lateral com vista para o jardim",
    category: "Fachada"
  },
  {
    src: "/lovable-uploads/19d0ee2a-2a7b-461d-932d-8eea0b815d46.png",
    alt: "Vista da fachada ao entardecer",
    caption: "Vista da fachada ao entardecer",
    category: "Fachada"
  },
  {
    src: "/lovable-uploads/e65b4822-149a-458a-9e01-e85b1ccfaa13.png",
    alt: "Entrada do condomínio",
    caption: "Entrada exclusiva com paisagismo por Benedito Abbud",
    category: "Fachada"
  },
  {
    src: "/lovable-uploads/d27c3604-a410-4958-a606-9fe0ef616a42.png",
    alt: "Piscina com vista para o prédio",
    caption: "Piscina com raia de 25m",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/c34c878b-be24-404c-a7aa-07152a883d62.png",
    alt: "Piscina com iluminação noturna",
    caption: "Piscina com iluminação noturna",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/cf254fc1-7924-4967-9f06-23a52122f72b.png",
    alt: "Área da piscina com espreguiçadeiras",
    caption: "Área de relaxamento com espreguiçadeiras",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/673dbfb1-0de6-4fea-93d3-7fe4a191cb6c.png",
    alt: "Deck da piscina com palmeiras",
    caption: "Deck da piscina com paisagismo tropical",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/d5a582a1-b25f-4757-9ecf-fbeb9907b36e.png",
    alt: "Quadra de beach tênis",
    caption: "Quadra de beach tênis exclusiva",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/80d8bf91-11b5-4ed1-91e6-cef13abe7740.png",
    alt: "Área gourmet ao ar livre",
    caption: "Área gourmet com vista para a piscina",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/2c4d4ec6-a113-42a1-80e8-5a1e9428f539.png",
    alt: "Piscina coberta",
    caption: "Piscina coberta com vista para o jardim",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/00f5c2a3-7f8a-4407-9eba-b7ccfe448236.png",
    alt: "Sala de jogos",
    caption: "Game room com consoles de última geração",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/46fd8de0-c7fc-4c20-b08b-f0fbf1e517d5.png",
    alt: "Espaço kids",
    caption: "Espaço kids com piscina de bolinhas",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/04a8182c-33cc-4aba-ade7-72a4d58dcd98.png",
    alt: "Sala de boxe",
    caption: "Sala de boxe profissional",
    category: "Fitness"
  },
  {
    src: "/lovable-uploads/00ff0320-11ba-4fc8-918f-db74fcaa23e8.png",
    alt: "Piscina na cobertura",
    caption: "Cobertura com piscina privativa",
    category: "Coberturas"
  },
  {
    src: "/lovable-uploads/d33abfeb-a56b-49c6-b1cf-2a0e17a69686.png",
    alt: "Quadra poliesportiva",
    caption: "Quadra poliesportiva com marcação multiesporte",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/258be91a-fb4b-4ead-91b7-c5922dd597ab.png",
    alt: "Quadra de tênis",
    caption: "Quadra de tênis profissional",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/4a343faf-06b0-484e-976a-9149a3ea4c89.png",
    alt: "Quadra de beach volley",
    caption: "Quadra de beach volley",
    category: "Lazer"
  },
  {
    src: "/lovable-uploads/e5e659ae-673e-4495-92cb-688dd46afbdb.png",
    alt: "Varanda com vista panorâmica",
    caption: "Varanda gourmet com vista panorâmica",
    category: "Apartamentos"
  },
  {
    src: "/lovable-uploads/c2329e30-8c6a-499f-903a-5b0c4f472982.png",
    alt: "Interior do apartamento",
    caption: "Living integrado com cozinha gourmet",
    category: "Apartamentos"
  }
];

// FAQ Items
const faqItems = [{
  question: "Quais são as opções de plantas disponíveis?",
  answer: "O Epic Golf Residence oferece apartamentos de 2, 3 e 4 quartos, Gardens com até 182m² com piscina privativa e Coberturas de até 208m² também com piscina privativa."
}, {
  question: "Há disponibilidade de financiamento?",
  answer: "Sim, o Epic Golf Residence oferece opções de financiamento direto com a construtora e também aceita financiamento bancário."
}, {
  question: "Como funciona o serviço de Balsa?",
  answer: "O serviço de Balsa é exclusivo para moradores e oferece acesso direto à praia da Barra, com horários regulares das 8h às 18h."
}, {
  question: "Quais são os serviços incluídos no condomínio?",
  answer: "O condomínio oferece diversos serviços exclusivos como Concierge, Grab & Go, Car Wash, Private Ride, e muitos outros serviços de alto padrão."
}, {
  question: "Qual é o status do registro do empreendimento?",
  answer: "O empreendimento está devidamente registrado e com todas as licenças necessárias aprovadas."
}];

const Index = () => {
  useEffect(() => {
    document.title = "Epic Golf Residence – Apartamentos e Coberturas no Golfe Olímpico da Barra";
  }, []);
  
  return <div className="min-h-screen flex flex-col bg-white">
      <Toaster position="top-center" />
      <Header />

      {/* Hero Section */}
      <section id="hero" className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
      }}>
          <div className="absolute inset-0 bg-epic-blue/80"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="w-full md:w-7/12 text-center md:text-left animate-fade-in">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Viva além do extraordinário no Epic Golf Residence
              </h1>
              <p className="text-epic-gold text-lg md:text-xl mb-4">
                Cada detalhe pensado para surpreender você todos os dias
              </p>
              <h2 className="text-xl md:text-2xl text-epic-gold font-medium mb-6">
                Apartamentos, Gardens e Coberturas de até 208m² no ponto mais nobre da Barra: o Golfe Olímpico
              </h2>
              <div className="hidden md:block mt-8">
                <WhatsAppButton className="mt-4" />
              </div>
            </div>
            
            <div className="w-full md:w-5/12 md:max-w-md">
              <LeadForm onDark={true} />
            </div>
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

      {/* Benefits Section */}
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
      
      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-epic-blue mb-4">Galeria de Imagens</h2>
            <p className="text-epic-black text-lg max-w-3xl mx-auto">
              Explore as imagens do Epic Golf Residence e suas áreas de lazer exclusivas.
            </p>
          </div>
          
          <ImageGallery images={galleryImages} />
          
          <div className="mt-16 text-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>
      
      {/* Location Section */}
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
      
      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-epic-gray">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-epic-blue mb-4">Perguntas Frequentes</h2>
            <p className="text-epic-black text-lg max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o Epic Golf Residence.
            </p>
          </div>
          
          <FaqSection faqs={faqItems} />
          
          <div className="mt-16 text-center">
            <p className="text-epic-black text-lg mb-5">Não encontrou o que procurava?</p>
            <WhatsAppButton />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-epic-blue text-white">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Viva além do extraordinário</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Descubra o que torna o Epic Golf Residence único e como este empreendimento pode elevar seu estilo de vida.
          </p>
          <WhatsAppButton className="mx-auto text-center justify-center" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-epic-blue text-white/70">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © 2025 Epic Golf Residence. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="text-sm">
              <p>Av. Ermanno Dallari, 200 – Barra da Tijuca, Rio de Janeiro - RJ</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
