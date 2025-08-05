import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import manWithKeysImage from "@/assets/man-with-keys.png";
import whiteSuvImage from "@/assets/white-suv.png";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen section-gradient overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 font-outfit leading-tight">
              Quer vender seu <span className="text-gradient">veículo</span>?
            </h1>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft border border-border/50">
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-foreground font-outfit text-lg">Receba via PIX em até 30 minutos</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft border border-border/50">
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-foreground font-outfit text-lg">IPVA 2025 quitado</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft border border-border/50">
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-foreground font-outfit text-lg">Sem leilão, sem sinistro</span>
              </div>
            </div>
            
            <Button 
              onClick={scrollToForm}
              variant="primary"
              size="xl" 
              className="text-lg px-12 py-6 font-outfit font-bold tracking-wide"
            >
              QUERO VENDER MEU CARRO
            </Button>
          </div>

          {/* Right Content */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-10 blur-3xl scale-110"></div>
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative">
                <img 
                  src={whiteSuvImage} 
                  alt="Carro SUV" 
                  className="w-full max-w-lg md:max-w-xl object-contain drop-shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8">
                  <img 
                    src={manWithKeysImage} 
                    alt="Homem com chaves" 
                    className="w-32 md:w-48 lg:w-56 object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;