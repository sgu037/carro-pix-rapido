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
    <section className="py-16 md:py-24 px-4 section-gradient">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="text-center lg:text-left">
            <img 
              src={phoneMockupImage} 
              alt="App no celular" 
              className="w-64 md:w-80 mx-auto lg:mx-0 object-contain animate-float"
            />
          </div>

          {/* Right - Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-outfit mb-6">
              Visite nossas <span className="text-gradient">redes sociais</span> e avaliações do Google
            </h2>
            <p className="text-xl text-muted-foreground font-outfit mb-10">
              É com orgulho que divulgamos nossos feedbacks!
            </p>

            <div className="space-y-6 mb-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border/30 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground font-outfit text-base leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 p-3 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-6 h-6" />
                <span className="font-outfit font-medium text-foreground">Facebook</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <img src="https://www.instagram.com/favicon.ico" alt="Instagram" className="w-6 h-6" />
                <span className="font-outfit font-medium text-foreground">Instagram</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                <span className="font-outfit font-medium text-foreground">Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;