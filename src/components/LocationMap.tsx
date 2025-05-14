
import { cn } from "@/lib/utils";

interface LocationMapProps {
  className?: string;
}

const LocationMap = ({ className }: LocationMapProps) => {
  return (
    <div className={cn("rounded-lg overflow-hidden shadow-lg h-[400px]", className)}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6736232467973!2d-43.36768432376194!3d-22.98219934018452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda4a8296ae77%3A0xe19b5d8c2888ccc2!2sAv.%20Ermanno%20Dallari%2C%20200%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1715754834062!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Epic Golf Residence Location"
      ></iframe>
    </div>
  );
};

export default LocationMap;
