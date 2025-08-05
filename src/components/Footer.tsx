import logoImage from "@/assets/logo-7b.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/20 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src={logoImage}
              alt="7//B" 
              className="h-16 md:h-20 w-auto mx-auto mb-6"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="space-y-3">
              <h3 className="font-outfit font-semibold text-foreground text-lg mb-4">Contato</h3>
              <p className="text-muted-foreground font-outfit">
                Av. Nilo Peçanha, 1851 - Sala 316
              </p>
              <p className="text-muted-foreground font-outfit">
                Porto Alegre/RS
              </p>
              <p className="text-muted-foreground font-outfit">
                CNPJ 000000000/00
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-outfit font-semibold text-foreground text-lg mb-4">Links Úteis</h3>
              <p className="text-muted-foreground font-outfit hover:text-primary transition-colors cursor-pointer">Políticas de Privacidade</p>
              <p className="text-muted-foreground font-outfit hover:text-primary transition-colors cursor-pointer">Dúvidas frequentes</p>
              <p className="text-muted-foreground font-outfit hover:text-primary transition-colors cursor-pointer">Termos de Uso</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-outfit font-semibold text-foreground text-lg mb-4">Atendimento</h3>
              <div className="flex justify-center items-center gap-3 p-4 bg-background rounded-xl shadow-soft border border-border/30">
                <span className="text-muted-foreground font-outfit">Chame no WhatsApp</span>
                <img src="/lovable-uploads/4aedadf1-0584-4f49-a3b9-6543044be4ec.png" alt="WhatsApp" className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/20 pt-8">
            <p className="text-muted-foreground font-outfit mb-2">&copy; 2025. Compro Seu Veículo - Todos os direitos reservados</p>
            <p className="text-xs text-muted-foreground">Preview exclusivo - desenvolvido por Agência PontoCom. <span className="font-semibold">Uso proibido sem autorização.</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;