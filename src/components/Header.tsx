const Header = () => {
  return (
    <header className="glass border-b border-border/30 backdrop-blur-glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between min-h-[60px]">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/5b60a498-8415-4aa4-8f8a-6768c4fc04ca.png" 
              alt="718 Logo" 
              className="h-10 w-auto animate-float flex-shrink-0"
            />
            <img 
              src="/lovable-uploads/d068ac10-29d1-472e-8743-5be6f9d5d446.png" 
              alt="Compro Seu Veículo" 
              className="h-14 w-auto flex-shrink-0 max-w-none"
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