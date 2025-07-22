import { Button } from "@/components/ui/button";
import carHeroBg from "@/assets/car-hero-bg.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero px-4 overflow-hidden mt-8">
      {/* Car background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${carHeroBg})` }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="glass p-8 md:p-12 rounded-3xl max-w-5xl mx-auto text-center relative z-10 shadow-modern">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 font-outfit leading-tight">
          Venda seu carro com 
          <span className="text-gradient block mt-2">segurança</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-12 font-outfit max-w-3xl mx-auto leading-relaxed">
          Receba via PIX em até 30 minutos. IPVA 2025 quitado. Sem leilão, sem sinistro.
        </h2>
        <Button 
          variant="gold" 
          size="xl" 
          onClick={scrollToForm}
          className="font-outfit text-lg px-12 py-4 shadow-gold-glow hover:scale-105 transition-all duration-300"
        >
          QUERO VENDER AGORA
        </Button>
      </div>
    </section>
  );
};

export default Hero;