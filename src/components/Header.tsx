const Header = () => {
  return (
    <header className="glass border-b border-border/30 backdrop-blur-glass">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/3be203fc-a060-4607-a7e1-3d09d9ffdb57.png" 
              alt="718 Logo" 
              className="h-12 w-auto animate-float"
            />
            <div className="text-2xl font-bold text-gradient font-outfit">
              Compro Seu Veículo
            </div>
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