
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Home, Star, Image, MapPin, HelpCircle, Menu } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({
  className
}: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6",
      scrolled ? "bg-epic-blue shadow-md py-3" : "bg-transparent", 
      className
    )}>
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Epic Golf
        </div>
        
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleNavClick('hero')}
                  className={cn(
                    "px-3 py-2 text-sm font-medium cursor-pointer flex items-center gap-1.5 hover:text-epic-gold transition-colors",
                    scrolled ? "text-white" : "text-white"
                  )}
                >
                  <Home size={16} />
                  <span>Início</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleNavClick('benefits')}
                  className={cn(
                    "px-3 py-2 text-sm font-medium cursor-pointer flex items-center gap-1.5 hover:text-epic-gold transition-colors",
                    scrolled ? "text-white" : "text-white"
                  )}
                >
                  <Star size={16} />
                  <span>Benefícios</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleNavClick('gallery')}
                  className={cn(
                    "px-3 py-2 text-sm font-medium cursor-pointer flex items-center gap-1.5 hover:text-epic-gold transition-colors",
                    scrolled ? "text-white" : "text-white"
                  )}
                >
                  <Image size={16} />
                  <span>Galeria</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleNavClick('location')}
                  className={cn(
                    "px-3 py-2 text-sm font-medium cursor-pointer flex items-center gap-1.5 hover:text-epic-gold transition-colors",
                    scrolled ? "text-white" : "text-white"
                  )}
                >
                  <MapPin size={16} />
                  <span>Localização</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleNavClick('faq')}
                  className={cn(
                    "px-3 py-2 text-sm font-medium cursor-pointer flex items-center gap-1.5 hover:text-epic-gold transition-colors",
                    scrolled ? "text-white" : "text-white"
                  )}
                >
                  <HelpCircle size={16} />
                  <span>Perguntas</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="hidden md:block">
          <WhatsAppButton variant="outline" size="sm" className={scrolled ? "border-epic-gold text-epic-gold hover:text-white" : "border-white text-white"} />
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="outline" 
            size="icon" 
            className={cn(
              "transition-all duration-300", 
              scrolled ? "border-epic-gold text-epic-gold" : "border-white text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-epic-blue shadow-md py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <a 
              onClick={() => handleNavClick('hero')} 
              className="text-white hover:text-epic-gold transition-colors py-2 flex items-center gap-2"
            >
              <Home size={18} /> Início
            </a>
            <a 
              onClick={() => handleNavClick('benefits')} 
              className="text-white hover:text-epic-gold transition-colors py-2 flex items-center gap-2"
            >
              <Star size={18} /> Benefícios
            </a>
            <a 
              onClick={() => handleNavClick('gallery')} 
              className="text-white hover:text-epic-gold transition-colors py-2 flex items-center gap-2"
            >
              <Image size={18} /> Galeria
            </a>
            <a 
              onClick={() => handleNavClick('location')} 
              className="text-white hover:text-epic-gold transition-colors py-2 flex items-center gap-2"
            >
              <MapPin size={18} /> Localização
            </a>
            <a 
              onClick={() => handleNavClick('faq')} 
              className="text-white hover:text-epic-gold transition-colors py-2 flex items-center gap-2"
            >
              <HelpCircle size={18} /> Perguntas
            </a>
            <WhatsAppButton className="w-full mt-2" />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
