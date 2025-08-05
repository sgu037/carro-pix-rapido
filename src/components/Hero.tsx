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
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 font-outfit leading-tight">
              Quer vender seu veículo?
            </h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-foreground font-outfit">Receba via PIX em até 30 minutos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-foreground font-outfit">IPVA 2025 quitado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-foreground font-outfit">Sem leilão, sem sinistro</span>
              </div>
            </div>
            
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl shadow-gold-glow hover:shadow-gold-glow hover:scale-105 transition-all duration-300 font-outfit font-semibold bg-primary text-primary-foreground"
            >
              QUERO VENDER MEU CARRO
            </Button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10 flex items-center justify-center">
              <img 
                src={whiteSuvImage} 
                alt="Carro SUV" 
                className="w-full max-w-md object-contain"
              />
              <img 
                src={manWithKeysImage} 
                alt="Homem com chaves" 
                className="absolute right-0 top-0 w-48 md:w-64 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;