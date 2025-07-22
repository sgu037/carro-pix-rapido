import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="text-3xl font-bold text-primary font-outfit">
            Compro Seu Veículo
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Venda com segurança e rapidez
        </p>
      </div>
    </header>
  );
};

export default Header;