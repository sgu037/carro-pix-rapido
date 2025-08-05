import logoImage from "@/assets/logo-7b.png";

const Header = () => {
  return (
    <header className="glass border-b border-border/30 backdrop-blur-glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between min-h-[60px]">
          <div className="flex items-center">
            <img 
              src={logoImage}
              alt="7//B" 
              className="h-8 md:h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-outfit">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-outfit">Carros</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-outfit border-b border-primary">Venda aqui</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;