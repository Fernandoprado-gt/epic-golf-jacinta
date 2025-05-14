
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const BenefitCard = ({ icon: Icon, title, description, className }: BenefitCardProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-all bg-white",
      className
    )}>
      <div className="p-3 rounded-full bg-epic-green/10 mb-4">
        <Icon className="h-6 w-6 text-epic-green" />
      </div>
      <h3 className="text-epic-blue font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default BenefitCard;
