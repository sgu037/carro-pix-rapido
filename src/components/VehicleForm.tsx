import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const VehicleForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    brand: '',
    year: '',
    plate: '',
    mileage: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de vender meu veículo:
    
Nome: ${formData.name}
WhatsApp: ${formData.whatsapp}
Marca/Modelo: ${formData.brand}
Ano/Versão: ${formData.year}
Placa: ${formData.plate}
KM: ${formData.mileage}

Aguardo proposta!`;

    const whatsappUrl = `https://wa.me/5551980104004?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para enviar os dados pelo WhatsApp.",
    });
  };

  return (
    <section id="form" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-lg relative z-10">
        <div className="glass p-8 rounded-3xl shadow-modern border border-border/30">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gradient font-outfit mb-2">
              Faça sua avaliação
            </h2>
            <p className="text-muted-foreground font-outfit">
              Preencha os dados e receba sua proposta
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="glass border-border/30 text-foreground font-outfit h-12 rounded-xl"
            />
            <Input
              name="whatsapp"
              type="tel"
              placeholder="Seu WhatsApp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              className="glass border-border/30 text-foreground font-outfit h-12 rounded-xl"
            />
            <Input
              name="brand"
              placeholder="Marca e modelo"
              value={formData.brand}
              onChange={handleInputChange}
              required
              className="glass border-border/30 text-foreground font-outfit h-12 rounded-xl"
            />
            <Input
              name="year"
              placeholder="Ano e versão"
              value={formData.year}
              onChange={handleInputChange}
              required
              className="glass border-border/30 text-foreground font-outfit h-12 rounded-xl"
            />
            <Input
              name="plate"
              placeholder="Placa"
              value={formData.plate}
              onChange={handleInputChange}
              required
              className="glass border-border/30 text-foreground font-outfit h-12 rounded-xl"
            />
            <Input
              name="mileage"
              type="number"
              placeholder="KM atual"
              value={formData.mileage}
              onChange={handleInputChange}
              required
              className="glass border-border/30 text-foreground font-outfit h-12 rounded-xl"
            />
            <Button 
              type="submit" 
              variant="gold" 
              size="lg" 
              className="w-full font-outfit h-14 text-lg rounded-xl shadow-gold-glow hover:scale-105 transition-all duration-300"
            >
              ENVIAR PARA AVALIAÇÃO
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VehicleForm;