import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a inteligência artificial da ConnexIA?",
    answer: "Nossa IA é treinada com as informações do seu negócio, produtos e serviços. Ela aprende a responder dúvidas, resolver problemas e realizar atendimentos de forma natural, como se fosse um atendente humano experiente. A cada interação, ela se torna ainda mais inteligente e precisa."
  },
  {
    question: "Preciso ter conhecimento técnico para usar a plataforma?",
    answer: "Não! A ConnexIA foi desenvolvida para ser intuitiva e fácil de usar. Você configura seu agente de IA em poucos minutos, sem precisar de programação ou conhecimentos técnicos. Nossa equipe também oferece suporte completo durante todo o processo."
  },
  {
    question: "Quantos atendimentos a IA consegue fazer simultaneamente?",
    answer: "Diferente de atendentes humanos, nossa IA pode realizar atendimentos ilimitados ao mesmo tempo, 24 horas por dia, 7 dias por semana. Isso significa que seus clientes nunca ficam esperando na fila."
  },
  {
    question: "Posso mudar de plano depois de contratar?",
    answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e o valor é ajustado proporcionalmente ao período restante."
  },
  {
    question: "O que acontece se eu ultrapassar o limite de mensagens do meu plano?",
    answer: "Você será notificado quando estiver próximo do limite. Caso ultrapasse, você pode fazer upgrade do plano ou adquirir pacotes adicionais de mensagens. Nunca interrompemos seu atendimento abruptamente."
  },
  {
    question: "A ConnexIA integra com meu sistema atual?",
    answer: "Sim! Oferecemos integração nativa com WhatsApp, Instagram, Facebook Messenger, e-mail e chat no site. Também temos API aberta para integração com CRMs, ERPs e outros sistemas que você já utiliza."
  },
  {
    question: "Existe período de teste gratuito?",
    answer: "Sim! Oferecemos 7 dias de teste gratuito em todos os planos para você experimentar a plataforma sem compromisso. Durante o teste, você tem acesso a todas as funcionalidades do plano escolhido."
  },
  {
    question: "Como é o suporte da ConnexIA?",
    answer: "Todos os planos incluem suporte via chat e e-mail. Nos planos Premium e Growth, você também tem acesso a suporte prioritário e reuniões de acompanhamento para otimizar seus resultados."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-connexia-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-connexia-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-connexia-pink/10 text-connexia-pink text-sm font-medium mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Perguntas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre a ConnexIA e descubra como podemos 
            transformar o atendimento da sua empresa.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur-sm data-[state=open]:border-connexia-pink/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline hover:text-connexia-pink transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA below FAQ */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale com nossa equipe!
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-connexia-pink hover:text-connexia-cyan transition-colors font-medium"
          >
            Entrar em contato
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
