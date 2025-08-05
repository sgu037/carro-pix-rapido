import { Star } from "lucide-react";
import phoneMockupImage from "@/assets/phone-mockup.png";

const SocialProof = () => {
  const testimonials = [
    {
      text: "Atendimento é excelente! Sem complicações e tudo muito ágil. Recomendo.",
      rating: 5,
    },
    {
      text: "Melhor atendimento, melhores propostas, 100% confiável!!! Já fiz e farei mais negócios com certeza!",
      rating: 5,
    },
    {
      text: "Deixei meu carro com eles na sexta-feira para ser vendido e hoje na terça-feira concluímos a negociação/transferência com pagamento via pix.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="text-center lg:text-left">
            <img 
              src={phoneMockupImage} 
              alt="App no celular" 
              className="w-64 md:w-80 mx-auto lg:mx-0 object-contain"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-outfit mb-4">
              Visite nossas redes sociais e avaliações do Google
            </h2>
            <p className="text-lg text-muted-foreground font-outfit mb-8">
              É com orgulho que divulgamos nossos feedbacks!
            </p>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-background/80 p-6 rounded-xl border border-border/30 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground font-outfit text-sm italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <img src="https://www.instagram.com/favicon.ico" alt="Instagram" className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <img src="/lovable-uploads/4aedadf1-0584-4f49-a3b9-6543044be4ec.png" alt="WhatsApp" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;