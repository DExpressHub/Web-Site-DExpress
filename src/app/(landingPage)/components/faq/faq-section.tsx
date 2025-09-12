import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Como posso contratar um(a) profissional doméstico(a)?",
    answer: "Você pode contratar diretamente pela plataforma. Basta navegar pelas categorias de serviços, selecionar o perfil desejado e preencher o formulário de contratação. Ou ligando diretamente para a nossa equipa de suporte +244 937 760 239 / +244 937 759 809."
  },
  {
    question: "Como faço o meu cadastro como cliente?",
    answer: "Clique em \"Criar Conta\" no canto superior direito, selecione \"Sou Cliente\" e preencha os dados solicitados. Após o cadastro, você poderá aceder à plataforma e contratar serviços."
  },
  {
    question: "Como posso me cadastrar como profissional?",
    answer: "Vá até \"Trabalhe Conosco\", escolha sua área de atuação e preencha o formulário com seus dados pessoais, experiência e referências. A nossa equipa entrará em contacto."
  },
  {
    question: "Como enviar minha candidatura para uma vaga?",
    answer: "Depois de se cadastrar como profissional, você poderá ver vagas disponíveis e clicar em \"Candidatar-se\". Mantenha seu perfil completo e atualizado para ter mais oportunidades."
  },
  {
    question: "Os profissionais são verificados?",
    answer: "Sim, todos os profissionais passam por um processo de verificação e entrevistas antes de serem aprovados na plataforma."
  },
  {
    question: "Posso agendar uma entrevista com o profissional antes de contratar?",
    answer: "Sim. Oferecemos a opção de agendamento prévio de entrevista virtual ou presencial, conforme disponibilidade."
  },
  {
    question: "A D Express dá algum tipo de garantia?",
    answer: "Sim. Oferecemos garantia de substituição do profissional em caso de desistência ou incompatibilidade, dentro do prazo acordado."
  },
  {
    question: "Quais tipos de serviços posso contratar?",
    answer: "Domésticas internas/externas, diaristas, babás internas/ externas, lavadeiras, cozinheiras, cuidadoras de idosos e crianças especiais."
  },
  {
    question: "Como posso entrar em contacto com o suporte?",
    answer: "Através do nosso WhatsApp +244 937 759 809, chat da plataforma ou e-mail de atendimento: suporte@dexpress.com.ao"
  }
];

export const FAQSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-left hover:text-primary text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipa está pronta para ajudar você. Entre em contacto conosco!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/244937759809" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                WhatsApp: +244 937 759 809
              </a>
              <a 
                href="mailto:suporte@dexpress.com.ao"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                suporte@dexpress.com.ao
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};