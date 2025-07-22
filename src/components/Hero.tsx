import { Button } from "@/components/ui/button";
import carHeroBg from "@/assets/car-front.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero px-4 overflow-hidden mt-8">
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div 
        className="glass p-4 md:p-12 rounded-2xl md:rounded-3xl max-w-5xl mx-auto text-center relative z-10 shadow-modern bg-cover bg-center bg-no-repeat min-h-[350px] sm:min-h-[400px] md:min-h-auto"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${carHeroBg})`,
          backdropFilter: 'blur(20px)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 font-outfit leading-tight md:leading-relaxed">
          Venda seu carro com 
          <span className="text-gradient block mt-1 md:mt-2 leading-tight md:leading-relaxed">segurança</span>
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 font-outfit max-w-3xl mx-auto leading-relaxed px-2">
          Receba via PIX em até 30 minutos. IPVA 2025 quitado. Sem leilão, sem sinistro.
        </h2>
        <Button 
          variant="gold" 
          size="xl" 
          onClick={scrollToForm}
          className="font-outfit text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 md:py-4 shadow-gold-glow hover:scale-105 transition-all duration-300"
        >
          QUERO VENDER AGORA
        </Button>
      </div>
    </section>
  );
};

export default Hero;