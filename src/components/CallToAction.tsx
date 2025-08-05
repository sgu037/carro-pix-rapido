const CallToAction = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-outfit mb-6">
          Vamos ao <span className="text-gradient">passo 1</span>
        </h2>
        <p className="text-xl text-muted-foreground font-outfit mb-10 max-w-2xl mx-auto">
          Clique abaixo para enviar as informações do seu veículo
        </p>
        
        <button 
          onClick={scrollToForm}
          className="btn-primary text-primary-foreground px-12 py-6 rounded-xl font-outfit font-bold text-lg tracking-wide"
        >
          PREENCHER FORMULÁRIO
        </button>
      </div>
    </section>
  );
};

export default CallToAction;