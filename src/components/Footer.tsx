const Footer = () => {
  return (
    <footer className="glass border-t border-border/30 py-16 px-4 backdrop-blur-glass">
      <div className="container mx-auto text-center">
        <div className="glass p-8 rounded-2xl shadow-modern border border-border/20 max-w-2xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img 
              src="/lovable-uploads/3be203fc-a060-4607-a7e1-3d09d9ffdb57.png" 
              alt="718 Logo" 
              className="h-8 w-auto animate-float"
            />
            <div className="text-xl font-bold text-gradient font-outfit">
              Compro Seu Veículo
            </div>
          </div>
          
          <div className="space-y-3 text-muted-foreground font-outfit">
            <p>Av. Nilo Peçanha, 1851 – Sala 316 – Porto Alegre/RS</p>
            <p className="text-lg font-semibold text-primary">WhatsApp: (51) 98010-4004</p>
            <p className="text-sm pt-4 border-t border-border/20">© 2025 Compro Seu Veículo - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;