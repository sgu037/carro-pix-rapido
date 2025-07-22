import { Button } from "@/components/ui/button";

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
        <img src="/lovable-uploads/4aedadf1-0584-4f49-a3b9-6543044be4ec.png" alt="WhatsApp" className="w-full h-full object-contain" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;