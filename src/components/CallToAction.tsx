const CallToAction = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-outfit mb-4">
          Vamos ao passo 1
        </h2>
        <p className="text-lg text-muted-foreground font-outfit mb-8">
          Clique abaixo para enviar as informações
        </p>
        
        <button 
          onClick={scrollToForm}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-outfit font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-gold-glow"
        >
          PREENCHER FORMULÁRIO
        </button>
      </div>
    </section>
  );
};

export default CallToAction;