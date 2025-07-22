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
    <section id="form" className="bg-gradient-section py-16 px-4">
      <div className="container mx-auto max-w-md">
        <Card className="bg-card border-border shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-primary font-outfit">
              Faça sua avaliação agora
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground font-outfit"
              />
              <Input
                name="whatsapp"
                type="tel"
                placeholder="Seu WhatsApp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground font-outfit"
              />
              <Input
                name="brand"
                placeholder="Marca e modelo"
                value={formData.brand}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground font-outfit"
              />
              <Input
                name="year"
                placeholder="Ano e versão"
                value={formData.year}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground font-outfit"
              />
              <Input
                name="plate"
                placeholder="Placa"
                value={formData.plate}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground font-outfit"
              />
              <Input
                name="mileage"
                type="number"
                placeholder="KM atual"
                value={formData.mileage}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground font-outfit"
              />
              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full font-outfit"
              >
                ENVIAR PARA AVALIAÇÃO
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VehicleForm;