import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5551980104004', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        variant="whatsapp"
        size="icon-lg"
        onClick={openWhatsApp}
        className="shadow-modern animate-float hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;