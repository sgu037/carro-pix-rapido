import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import ProcessSteps from "@/components/ProcessSteps";
import CallToAction from "@/components/CallToAction";
import VehicleForm from "@/components/VehicleForm";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-outfit">
      <Header />
      <Hero />
      <WhatWeDo />
      <ProcessSteps />
      <CallToAction />
      <VehicleForm />
      <SocialProof />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
