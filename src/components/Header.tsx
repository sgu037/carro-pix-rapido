const Header = () => {
  return (
    <header className="glass border-b border-border/30 backdrop-blur-glass">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/5b60a498-8415-4aa4-8f8a-6768c4fc04ca.png" 
              alt="718 Logo" 
              className="h-16 w-auto animate-float"
            />
            <img 
              src="/lovable-uploads/dfe5c564-c1d6-4019-af00-cc53b710d2f2.png" 
              alt="Compro Seu Veículo" 
              className="h-20 w-auto"
            />
          </div>
          <div className="hidden md:block text-sm text-muted-foreground font-outfit">
            Venda com segurança e rapidez
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;