
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

const ImageGallery = ({ images, className }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const isMobile = useIsMobile();

  const categories = ["Todos", ...Array.from(new Set(images.map(img => img.category)))];
  
  const filteredImages = activeFilter === "Todos" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setSelectedIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setSelectedIndex(newIndex);
  };

  // Adiciona visualização em modo carrossel para dispositivos móveis
  const useCarouselView = isMobile || filteredImages.length > 3;

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={cn(
              "px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors",
              activeFilter === category
                ? "bg-epic-gold text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {isMobile && (
        <div className="mb-6">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredImages.map((image, index) => (
                <CarouselItem key={`carousel-${image.src}`}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all">
                        <CardContent className="p-0 relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 sm:h-64 object-cover object-center hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onClick={() => handleImageClick(image, index)}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                            <p className="text-white font-medium text-xs sm:text-sm">{image.caption}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-[90vw] sm:max-w-lg md:max-w-3xl p-0 bg-transparent border-none">
                      <div className="relative bg-black/95 rounded-lg">
                        <button 
                          onClick={handlePrevious}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-1.5 md:p-2 rounded-full text-white hover:bg-white/20 z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                        </button>
                        <button 
                          onClick={handleNext}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-1.5 md:p-2 rounded-full text-white hover:bg-white/20 z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                        </button>
                        <button 
                          className="absolute right-2 top-2 bg-white/10 p-1.5 rounded-full text-white hover:bg-white/20 z-10"
                          onClick={() => setSelectedImage(null)}
                          aria-label="Close dialog"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <div className="p-2 md:p-4">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full max-h-[60vh] md:max-h-[70vh] object-contain mx-auto"
                            loading="lazy"
                          />
                          <div className="mt-2 md:mt-4 p-2 md:p-4 text-white">
                            <p className="text-lg md:text-xl font-medium">{image.caption}</p>
                            <p className="text-sm opacity-70">{image.category}</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 -translate-y-1/2 bg-epic-gold/80 hover:bg-epic-gold text-white border-none" />
            <CarouselNext className="absolute right-2 -translate-y-1/2 bg-epic-gold/80 hover:bg-epic-gold text-white border-none" />
          </Carousel>
        </div>
      )}

      <div className={cn(
        "grid gap-4 md:gap-6",
        isMobile ? "hidden" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      )}>
        {filteredImages.map((image, index) => (
          <Dialog key={image.src}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all">
                <CardContent className="p-0 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover object-center hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onClick={() => handleImageClick(image, index)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                    <p className="text-white font-medium text-xs sm:text-sm">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-[90vw] sm:max-w-lg md:max-w-3xl p-0 bg-transparent border-none">
              <div className="relative bg-black/95 rounded-lg">
                <button 
                  onClick={handlePrevious}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-1.5 md:p-2 rounded-full text-white hover:bg-white/20 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-1.5 md:p-2 rounded-full text-white hover:bg-white/20 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button 
                  className="absolute right-2 top-2 bg-white/10 p-1.5 rounded-full text-white hover:bg-white/20 z-10"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close dialog"
                >
                  <X className="h-4 w-4" />
                </button>
                {selectedImage && (
                  <div className="p-2 md:p-4">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full max-h-[60vh] md:max-h-[70vh] object-contain mx-auto"
                      loading="lazy"
                    />
                    <div className="mt-2 md:mt-4 p-2 md:p-4 text-white">
                      <p className="text-lg md:text-xl font-medium">{selectedImage.caption}</p>
                      <p className="text-sm opacity-70">{selectedImage.category}</p>
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
