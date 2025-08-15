import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const VehicleForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    plate: '',
    mileage: '',
    city: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Gera ID único
    const eventId = "lead_" + Date.now();

    // Dispara evento no Pixel
    (window as any).fbq('track', 'Lead', {
      event_id: eventId
    });

    // Envia para backend (Vercel)
    try {
      await fetch('/api/conversao-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_id: eventId,
          email: formData.email
        })
      });
    } catch (error) {
      console.error('Erro ao enviar para backend:', error);
    }
    
    toast({
      title: "Obrigado! Sua avaliação foi enviada com sucesso.",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      email: '',
      plate: '',
      mileage: '',
      city: ''
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
              id="email"
              name="email"
              type="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="glass border-border/30 text-foreground font-outfit h-12 rounded-xl"
            />
            <Input
              name="plate"
              placeholder="Placa do veículo (Exemplo: ABC1D23)"
              value={formData.plate}
              onChange={handleInputChange}
              required
              className="glass border-border/30 text-foreground font-outfit h-12 rounded-xl"
            />
            <Input
              name="mileage"
              placeholder="Quilometragem atual do veículo (Exemplo: 50 000 km)"
              value={formData.mileage}
              onChange={handleInputChange}
              required
              className="glass border-border/30 text-foreground font-outfit h-12 rounded-xl"
            />
            <Input
              name="city"
              placeholder="Em qual cidade você está localizado(a)? (Ex: Porto Alegre – RS)"
              value={formData.city}
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