
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-epic-gray">
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-6xl font-bold text-epic-blue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Página não encontrada</p>
        <p className="text-gray-500 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild className="bg-epic-green hover:bg-epic-green/90">
          <a href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
