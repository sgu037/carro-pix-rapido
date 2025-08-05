import { Banknote, Shield, Headphones, Calendar, CheckCircle, Trophy } from "lucide-react";
import carTiresImage from "@/assets/car-tires.png";

const WhatWeDo = () => {
  const benefits = [
    {
      icon: Banknote,
      title: "Pagamos via Pix em até 30 minutos",
    },
    {
      icon: Shield,
      title: "Transferência imediata e segura",
    },
    {
      icon: Headphones,
      title: "Atendimento online e presencial",
    },
    {
      icon: Calendar,
      title: "IPVA ou parcelas em atraso",
    },
    {
      icon: CheckCircle,
      title: "Sem exposição em leilão",
    },
    {
      icon: Trophy,
      title: "Líder em repasse Porto Alegre",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-outfit mb-4">
            O que fazemos por você
          </h2>
          <p className="text-lg text-muted-foreground font-outfit">
            Vendemos seu carro usado de forma segura e transparente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-muted/50 p-6 rounded-xl border border-border/30 hover:bg-muted/70 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-glow">
                    <IconComponent className="text-primary-foreground w-6 h-6" />
                  </div>
                  <span className="font-outfit text-foreground font-medium">{benefit.title}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <img 
            src={carTiresImage} 
            alt="Pneus de carro" 
            className="w-48 md:w-64 object-contain opacity-80"
          />
        </div>

        <div className="text-center mt-8">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-outfit font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-gold-glow">
            QUERO VENDER MEU CARRO
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;