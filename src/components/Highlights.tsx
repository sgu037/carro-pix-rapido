import { CheckCircle } from "lucide-react";

const Highlights = () => {
  const highlights = [
    "IPVA 2025 quitado",
    "Pagamento via PIX em até 30 minutos", 
    "Sem exposição em leilão",
    "Atendimento online e presencial",
    "Transferência imediata e segura"
  ];

  return (
    <section className="bg-gradient-section py-16 px-4">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-primary mb-8 font-outfit">
          Diferenciais Compro Seu Veículo
        </h2>
        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-foreground">
              <CheckCircle className="text-primary w-5 h-5" />
              <span className="font-outfit text-lg">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;