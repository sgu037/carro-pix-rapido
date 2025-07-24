const Header = () => {
  return (
    <header className="glass border-b border-border/30 backdrop-blur-glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between min-h-[60px]">
          <div className="flex justify-center flex-1">
            <img 
              src="/lovable-uploads/cfc3074a-b5f2-4580-b6fb-650659c525a6.png" 
              alt="Compro Seu Veículo" 
              className="h-16 w-auto animate-float"
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