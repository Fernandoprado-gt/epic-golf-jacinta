
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import FaqSectionComponent from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/Header";
import { galleryImages, faqItems } from "@/components/sections/constants";

const Index = () => {
  useEffect(() => {
    document.title = "Epic Golf Residence – Apartamentos e Coberturas no Golfe Olímpico da Barra";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Toaster position="top-center" />
      <Header />
      <HeroSection />
      <BenefitsSection />
      <GallerySection images={galleryImages} />
      <LocationSection />
      <FaqSectionComponent faqs={faqItems} />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
