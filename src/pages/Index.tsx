import { useEffect } from "react";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import BenefitCard from "@/components/BenefitCard";
import ImageGallery from "@/components/ImageGallery";
import LocationMap from "@/components/LocationMap";
import FaqSection from "@/components/FaqSection";
import { 
  MapPin, 
  Building, 
  Users, 
  Dumbbell, 
  Anchor, 
  Waves
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

// Mock Gallery Images
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Fachada do Epic Golf Residence",
    caption: "Fachada por Feu Arquitetura",
    category: "Fachada"
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    alt: "Paisagismo do Epic Golf Residence",
    caption: "Paisagismo por Benedito Abbud",
    category: "Paisagismo"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Design de interiores do Epic Golf Residence",
    caption: "Design de interiores por Carlos Rossi",
    category: "Interiores"
  },
  {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Piscina com raia de 25m",
    caption: "Piscina com raia de 25m",
    category: "Lazer"
  },
  {
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Rooftop Gourmet",
    caption: "Rooftop Gourmet",
    category: "Lazer"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Planta do Apartamento",
    caption: "Planta do Apartamento",
    category: "Plantas"
  },
  {
    src: "https://images.unsplash.com/photo-1600573472591-559339dab952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Planta do Garden",
    caption: "Planta do Garden",
    category: "Plantas"
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Planta da Cobertura",
    caption: "Planta da Cobertura",
    category: "Plantas"
  }
];

// FAQ Items
const faqItems = [
  {
    question: "Quais são as opções de plantas disponíveis?",
    answer: "O Epic Golf Residence oferece apartamentos de 2, 3 e 4 quartos, Gardens com até 182m² com piscina privativa e Coberturas de até 208m² também com piscina privativa."
  },
  {
    question: "Há disponibilidade de financiamento?",
    answer: "Sim, o Epic Golf Residence oferece opções de financiamento direto com a construtora e também aceita financiamento bancário."
  },
  {
    question: "Como funciona o serviço de Balsa?",
    answer: "O serviço de Balsa é exclusivo para moradores e oferece acesso direto à praia da Barra, com horários regulares das 8h às 18h."
  },
  {
    question: "Quais são os serviços incluídos no condomínio?",
    answer: "O condomínio oferece diversos serviços exclusivos como Concierge, Grab & Go, Car Wash, Private Ride, e muitos outros serviços de alto padrão."
  },
  {
    question: "Qual é o status do registro do empreendimento?",
    answer: "O empreendimento está devidamente registrado e com todas as licenças necessárias aprovadas."
  }
];

const Index = () => {
  useEffect(() => {
    document.title = "Epic Golf Residence – Apartamentos e Coberturas no Golfe Olímpico da Barra";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Toaster position="top-center" />
      <Header />

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="w-full md:w-7/12 text-center md:text-left animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Viva além do extraordinário no Epic Golf Residence
              </h1>
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
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-epic-gray">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-epic-blue mb-4">Benefícios Exclusivos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Descubra os diferenciais que fazem do Epic Golf Residence a escolha ideal para quem busca exclusividade e bem-estar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard 
              icon={MapPin}
              title="Localização Privilegiada"
              description="Ao lado do Campo de Golfe Olímpico, no ponto mais nobre da Barra da Tijuca."
            />
            <BenefitCard 
              icon={Building}
              title="Infraestrutura Completa"
              description="Lazer completo em mais de 12.788 m² de terreno."
            />
            <BenefitCard 
              icon={Users}
              title="Serviços Exclusivos"
              description="Concierge, Grab & Go, Car Wash, Private Ride e muito mais."
            />
            <BenefitCard 
              icon={Dumbbell}
              title="Gestão Esportiva Profissional"
              description="Companhia Athletica gerenciando todas as atividades esportivas."
            />
            <BenefitCard 
              icon={Anchor}
              title="Acesso à Praia"
              description="Serviço de Balsa exclusivo para acesso à praia da Barra."
            />
            <BenefitCard 
              icon={Waves}
              title="Gardens e Coberturas com Piscina"
              description="Unidades Garden e Coberturas com piscinas privativas."
            />
          </div>
          
          <div className="mt-12 text-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-epic-blue mb-4">Galeria de Imagens</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore as imagens do Epic Golf Residence e suas áreas de lazer exclusivas.
            </p>
          </div>
          
          <ImageGallery images={galleryImages} />
          
          <div className="mt-12 text-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20 bg-epic-gray">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-epic-blue mb-4">Localização Privilegiada</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Localizado na Av. Ermanno Dallari, 200 – Barra da Tijuca, ao lado do Campo de Golfe Olímpico, 
              próximo ao Rio Design Barra, Vogue Square e Praia da Barra.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <LocationMap />
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-epic-blue">Pontos de Interesse</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-epic-green"></span>
                    <span>Campo de Golfe Olímpico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-epic-green"></span>
                    <span>Lagoa de Marapendi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-epic-green"></span>
                    <span>Praia da Barra</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-epic-green"></span>
                    <span>Supermercado Zona Sul</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-epic-green"></span>
                    <span>Academia DNA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-epic-green"></span>
                    <span>Shoppings e escolas próximas</span>
                  </li>
                </ul>
              </div>
              
              <WhatsAppButton className="w-full" />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-epic-blue mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o Epic Golf Residence.
            </p>
          </div>
          
          <FaqSection faqs={faqItems} />
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
            <WhatsAppButton />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-epic-blue text-white">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Viva além do extraordinário no Epic Golf Residence
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 font-light">
            Entre em contato agora mesmo e garanta sua unidade em condições especiais.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <LeadForm onDark={true} />
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Contato Direto</h3>
              <p className="opacity-90 mb-6">
                Fale diretamente com nossos consultores e tire todas as suas dúvidas.
              </p>
              <WhatsAppButton className="bg-epic-gold hover:bg-epic-gold/90" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-epic-blue text-white/70">
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
    </div>
  );
};

export default Index;
