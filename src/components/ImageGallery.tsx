
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeFilter === category
                ? "bg-epic-gold text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <Dialog key={image.src}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all">
                <CardContent className="p-0 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick(image, index)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
              <div className="relative bg-black/95 rounded-lg">
                <button 
                  onClick={handlePrevious}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 z-10"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 z-10"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <button 
                  className="absolute right-2 top-2 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                </button>
                {selectedImage && (
                  <div className="p-4">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full max-h-[70vh] object-contain mx-auto"
                    />
                    <div className="mt-4 p-4 text-white">
                      <p className="text-xl font-medium">{selectedImage.caption}</p>
                      <p className="opacity-70">{selectedImage.category}</p>
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
