import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-dark py-16 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-outfit leading-tight">
          Venda seu carro com segurança e receba via PIX em até 30 minutos.
        </h1>
        <h2 className="text-lg md:text-xl text-muted-foreground mb-8 font-outfit">
          Sem leilão, sem sinistro e com IPVA 2025 quitado. Atendimento direto no WhatsApp.
        </h2>
        <Button 
          variant="gold" 
          size="xl" 
          onClick={scrollToForm}
          className="font-outfit animate-pulse hover:animate-none"
        >
          QUERO VENDER AGORA
        </Button>
      </div>
    </section>
  );
};

export default Hero;