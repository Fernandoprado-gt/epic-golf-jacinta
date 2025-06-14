
import ImageGallery from "@/components/ImageGallery";
import FormButton from "@/components/FormButton";

interface GallerySectionProps {
  images: {
    src: string;
    alt: string;
    caption: string;
    category: string;
  }[];
}

const GallerySection = ({ images }: GallerySectionProps) => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-epic-blue mb-4 break-normal">
            Galeria de Imagens
          </h2>
          <p className="text-epic-black text-base sm:text-lg max-w-3xl mx-auto px-1">
            Explore as imagens do Epic Golf Residence e suas áreas de lazer exclusivas.
          </p>
        </div>
        
        <ImageGallery images={images} />
        
        <div className="mt-12 md:mt-16 text-center">
          <FormButton 
            buttonText="Quero Saber Mais" 
            className="md:min-w-[280px] bg-epic-gold text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
