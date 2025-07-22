const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="space-y-4">
          <p className="text-muted-foreground font-outfit">
            Av. Nilo Peçanha, 1851 – Sala 316 – Porto Alegre/RS
          </p>
          
          <div className="flex justify-center items-center gap-4">
            <div className="text-2xl font-bold text-primary font-outfit">
              718
            </div>
          </div>
          
          <p className="text-muted-foreground font-outfit">
            WhatsApp: (51) 98010-4004
          </p>
          
          <p className="text-muted-foreground font-outfit text-sm">
            © 2025 Compro Seu Veículo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;