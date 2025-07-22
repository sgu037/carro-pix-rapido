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
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="bg-secondary border-border shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-3 font-outfit">
                  {step.number}.
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-outfit">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-outfit text-sm">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;