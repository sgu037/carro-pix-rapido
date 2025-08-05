import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleForm from "@/components/VehicleForm";
import ProcessSteps from "@/components/ProcessSteps";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-outfit">
      <Header />
      <Hero />
      <VehicleForm />
      <ProcessSteps />
      <Highlights />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
