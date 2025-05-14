
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent",
        className
      )}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img 
            src="/placeholder.svg" 
            alt="Epic Golf Residence" 
            className="h-14"
          />
        </div>
        
        <div className="hidden md:block">
          <WhatsAppButton 
            variant="outline" 
            size="sm" 
            className={scrolled 
              ? "border-epic-gold text-epic-blue hover:text-white" 
              : "border-white text-white"
            } 
          />
        </div>
        
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "transition-all duration-300",
              scrolled 
                ? "border-epic-gold text-epic-blue" 
                : "border-white text-white"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
