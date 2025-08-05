import { Card, CardContent } from "@/components/ui/card";

const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Envie os dados",
      description: "Preenchimento rápido e fácil direto no formulário ou WhatsApp."
    },
    {
      number: "2", 
      title: "Avaliação técnica",
      description: "Revisamos seu veículo com base na FIPE e condições reais."
    },
    {
      number: "3",
      title: "Proposta via WhatsApp", 
      description: "Você recebe uma proposta justa em minutos no seu celular."
    },
    {
      number: "4",
      title: "PIX na hora",
      description: "Pagamento imediato e transferência sem complicação."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-outfit mb-4">
            Estamos aqui para facilitar
          </h2>
          <p className="text-lg text-muted-foreground font-outfit">
            Em apenas 4 passos, você recebe o valor do seu carro em Pix
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="bg-card p-6 md:p-8 rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-500 group">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-gradient-gold rounded-full flex items-center justify-center text-lg md:text-2xl font-bold text-primary-foreground font-outfit shadow-gold-glow group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 font-outfit">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-outfit leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;