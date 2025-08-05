import logoImage from "@/assets/logo-7b.png";

const Header = () => {
  return (
    <header className="glass border-b border-border/20 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between min-h-[60px]">
          <div className="flex items-center">
            <img 
              src={logoImage}
              alt="7//B" 
              className="h-10 md:h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-all duration-300 font-outfit font-medium">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-all duration-300 font-outfit font-medium">Carros</a>
            <a href="#" className="text-primary font-outfit font-semibold border-b-2 border-primary pb-1">Venda aqui</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;