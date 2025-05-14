
import FaqSection from "@/components/FaqSection";
import WhatsAppButton from "@/components/WhatsAppButton";

interface FaqSectionComponentProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FaqSectionComponent = ({ faqs }: FaqSectionComponentProps) => {
  return (
    <section id="faq" className="py-24 bg-epic-gray">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-epic-blue mb-4">Perguntas Frequentes</h2>
          <p className="text-epic-black text-lg max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o Epic Golf Residence.
          </p>
        </div>
        
        <FaqSection faqs={faqs} />
        
        <div className="mt-16 text-center">
          <p className="text-epic-black text-lg mb-5">Não encontrou o que procurava?</p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
};

export default FaqSectionComponent;
