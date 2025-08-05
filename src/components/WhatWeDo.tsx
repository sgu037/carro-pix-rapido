import { Banknote, Shield, Headphones, Calendar, CheckCircle, Trophy } from "lucide-react";

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
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/6fc64a62-03d1-4c42-b759-edf3afb05eb1.png" 
                alt="Carro sendo avaliado" 
                className="w-full max-w-md md:max-w-lg mx-auto lg:mx-0 object-contain animate-float rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-primary">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-outfit mb-6">
              O que <span className="text-gradient">fazemos</span> por você
            </h2>
            <p className="text-xl text-muted-foreground font-outfit mb-8 leading-relaxed">
              Vendemos seu carro usado de forma segura, transparente e com o melhor preço do mercado.
            </p>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-background p-4 rounded-xl shadow-soft border border-border/30 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary">
                        <IconComponent className="text-primary-foreground w-6 h-6" />
                      </div>
                      <span className="font-outfit text-foreground font-medium text-lg">{benefit.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <button className="btn-primary text-primary-foreground px-8 py-4 rounded-xl font-outfit font-bold text-lg tracking-wide">
                QUERO VENDER MEU CARRO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;