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
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="glass p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-modern border border-border/30 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gradient font-outfit mb-8 md:mb-12">
            Diferenciais Compro Seu Veículo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl glass border border-border/20 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <CheckCircle className="text-primary-foreground w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="font-outfit text-sm md:text-lg text-foreground font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;