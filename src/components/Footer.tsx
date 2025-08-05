import logoImage from "@/assets/logo-7b.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src={logoImage}
              alt="7//B" 
              className="h-12 md:h-16 w-auto mx-auto mb-4"
            />
          </div>
          
          <div className="mb-6 space-y-2">
            <p className="text-muted-foreground font-outfit">
              Av. Nilo Peçanha, 1851 - Sala 316 - Porto Alegre/RS
            </p>
            <p className="text-muted-foreground font-outfit">
              CNPJ 000000000/00
            </p>
          </div>
          
          <div className="mb-6 space-y-2">
            <p className="text-muted-foreground font-outfit">Políticas de Privacidade</p>
            <p className="text-muted-foreground font-outfit">Dúvidas frequentes</p>
            <p className="text-muted-foreground font-outfit">Termos de Uso</p>
          </div>
          
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="text-muted-foreground font-outfit">Chame no WhatsApp</span>
            <img src="/lovable-uploads/4aedadf1-0584-4f49-a3b9-6543044be4ec.png" alt="WhatsApp" className="w-8 h-8" />
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">&copy; 2025. Compro Seu Veículo</p>
            <p className="text-xs">Preview exclusivo - desenvolvido por Agência PontoCom. <span className="font-semibold">Uso proibido sem autorização.</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;