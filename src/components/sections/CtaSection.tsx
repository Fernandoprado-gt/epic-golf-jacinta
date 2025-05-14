
import WhatsAppButton from "@/components/WhatsAppButton";

const CtaSection = () => {
  return (
    <section className="py-20 bg-epic-blue text-white">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Viva além do extraordinário</h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          Descubra o que torna o Epic Golf Residence único e como este empreendimento pode elevar seu estilo de vida.
        </p>
        <WhatsAppButton className="mx-auto text-center justify-center" />
      </div>
    </section>
  );
};

export default CtaSection;
