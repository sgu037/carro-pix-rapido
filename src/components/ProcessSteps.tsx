const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Envie os dados",
      description: "Preenchimento rápido e fácil direto no formulário ou WhatsApp.",
      image: "/lovable-uploads/dfe5c564-c1d6-4019-af00-cc53b710d2f2.png"
    },
    {
      number: "02", 
      title: "Avaliação técnica",
      description: "Revisamos seu veículo com base na FIPE e condições reais.",
      image: "/lovable-uploads/3be203fc-a060-4607-a7e1-3d09d9ffdb57.png"
    },
    {
      number: "03",
      title: "Proposta via WhatsApp", 
      description: "Você recebe uma proposta justa em minutos no seu celular.",
      image: "/lovable-uploads/cfc3074a-b5f2-4580-b6fb-650659c525a6.png"
    },
    {
      number: "04",
      title: "PIX na hora",
      description: "Pagamento imediato e transferência sem complicação.",
      image: "/lovable-uploads/5b60a498-8415-4aa4-8f8a-6768c4fc04ca.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 section-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-outfit mb-6">
            Estamos aqui para <span className="text-gradient">facilitar</span>
          </h2>
          <p className="text-xl text-muted-foreground font-outfit max-w-3xl mx-auto leading-relaxed">
            Em apenas 4 passos simples, você recebe o valor do seu carro via PIX
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary z-10">
                <span className="text-primary-foreground font-bold font-outfit text-lg">{step.number}</span>
              </div>

              {/* Card */}
              <div className="bg-card p-6 md:p-8 rounded-xl border border-border/30 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 animate-slide-up pt-10" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center">
                  {/* Image */}
                  <div className="mb-6">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-24 md:h-32 object-contain mx-auto"
                    />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 font-outfit">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-outfit leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-primary transform -translate-x-4 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card p-6 rounded-xl shadow-elegant border border-border/30">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-left">
              <h4 className="font-outfit font-bold text-foreground text-lg">Processo 100% Digital</h4>
              <p className="text-muted-foreground font-outfit">Tudo feito online, sem complicações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;