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
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { galleryImages, faqItems } from "@/components/sections/constants";

const Index = () => {
  useEffect(() => {
    document.title = "Epic Golf Residence – Apartamentos e Coberturas no Golfe Olímpico da Barra";
    
    // Track page view for Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
    
    // Set up scroll tracking for conversion optimization
    const trackScroll = () => {
      const scrollPercentage = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      // Track at 25%, 50%, 75% and 100% scroll depths
      if (scrollPercentage >= 25 && scrollPercentage < 50 && !window.scrollTracked25) {
        window.scrollTracked25 = true;
        if (window.dataLayer) {
          window.dataLayer.push({
            'event': 'scroll_depth',
            'scroll_percentage': 25
          });
        }
      } else if (scrollPercentage >= 50 && scrollPercentage < 75 && !window.scrollTracked50) {
        window.scrollTracked50 = true;
        if (window.dataLayer) {
          window.dataLayer.push({
            'event': 'scroll_depth',
            'scroll_percentage': 50
          });
        }
      } else if (scrollPercentage >= 75 && scrollPercentage < 100 && !window.scrollTracked75) {
        window.scrollTracked75 = true;
        if (window.dataLayer) {
          window.dataLayer.push({
            'event': 'scroll_depth',
            'scroll_percentage': 75
          });
        }
      } else if (scrollPercentage >= 100 && !window.scrollTracked100) {
        window.scrollTracked100 = true;
        if (window.dataLayer) {
          window.dataLayer.push({
            'event': 'scroll_depth',
            'scroll_percentage': 100
          });
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', trackScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', trackScroll);
    };
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
      <FloatingWhatsApp />
    </div>
  );
};

// Extend Window interface to track scroll events
declare global {
  interface Window {
    scrollTracked25?: boolean;
    scrollTracked50?: boolean;
    scrollTracked75?: boolean;
    scrollTracked100?: boolean;
  }
}

export default Index;
