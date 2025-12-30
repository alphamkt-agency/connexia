import { ShoppingCart, Calendar, Megaphone, HeadphonesIcon, Wrench, Bot } from "lucide-react";
import agentSales from "@/assets/agent-sales.png";
import agentScheduling from "@/assets/agent-scheduling.png";
import agentMarketing from "@/assets/agent-marketing.png";
import agentSupport from "@/assets/agent-support.png";
import agentTechnical from "@/assets/agent-technical.png";
import agentCustom from "@/assets/agent-custom.png";

const modules = [
  {
    icon: ShoppingCart,
    title: "Agente de Vendas",
    description: "Especialista em conversões, qualifica leads e conduz negociações com tom persuasivo e personalizado.",
    color: "from-connexia-magenta to-connexia-pink",
    image: agentSales,
  },
  {
    icon: Calendar,
    title: "Agente de Agendamentos",
    description: "Gerencia reservas, confirma horários e envia lembretes automaticamente, sem conflitos de agenda.",
    color: "from-connexia-cyan to-connexia-blue",
    image: agentScheduling,
  },
  {
    icon: Megaphone,
    title: "Agente de Marketing",
    description: "Engaja leads com campanhas personalizadas, nurture automático e mensagens segmentadas.",
    color: "from-connexia-pink to-connexia-magenta",
    image: agentMarketing,
  },
  {
    icon: HeadphonesIcon,
    title: "Agente de Suporte",
    description: "Resolve dúvidas e problemas 24/7 com respostas precisas baseadas na sua base de conhecimento.",
    color: "from-connexia-blue to-connexia-cyan",
    image: agentSupport,
  },
  {
    icon: Wrench,
    title: "Agente Técnico",
    description: "Especializado em suporte técnico avançado, troubleshooting e orientações detalhadas.",
    color: "from-connexia-magenta to-connexia-cyan",
    image: agentTechnical,
  },
  {
    icon: Bot,
    title: "Crie Seu Agente",
    description: "Defina personalidade, tom de voz e comportamento único para qualquer função que seu negócio precisar.",
    color: "from-connexia-cyan to-connexia-magenta",
    image: agentCustom,
  },
];

const Modules = () => {
  return (
    <section id="modulos" className="py-24 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-connexia-magenta/10 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-connexia-cyan/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-connexia-magenta uppercase tracking-wider">
            Agentes Especializados
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Times de IA{" "}
            <span className="gradient-text">orquestrados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crie assistentes com funções únicas. Uma IA Supervisora analisa cada conversa e encaminha automaticamente para o agente certo.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-3xl bg-card border border-border/50 hover:border-connexia-magenta/50 transition-all duration-500 hover:scale-[1.03] card-shadow overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Agent Image */}
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-t ${module.color} opacity-20`} />
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-40 object-cover object-top rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-3 relative">
                {module.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative text-sm">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;