
import FaqSection from "@/components/FaqSection";
import FormButton from "@/components/FormButton";

interface FaqSectionComponentProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FaqSectionComponent = ({ faqs }: FaqSectionComponentProps) => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-epic-gray">
      <div className="container max-w-3xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-epic-blue mb-4 break-normal">
            Perguntas Frequentes
          </h2>
          <p className="text-epic-black text-base sm:text-lg max-w-2xl mx-auto px-1">
            Encontre respostas para as dúvidas mais comuns sobre o Epic Golf Residence.
          </p>
        </div>
        
        <FaqSection faqs={faqs} />
        
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-epic-black text-lg mb-4 md:mb-5">Não encontrou o que procurava?</p>
          <FormButton 
            buttonText="Preciso de Mais Infos"
            className="md:min-w-[280px] bg-epic-gold text-white" 
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSectionComponent;
