import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Start",
    messages: "1.500 mensagens de IA/mês",
    attendances: "150 atendimentos em média",
    responses: "10 respostas geradas por atendimento",
    annualPrice: "1.164",
    monthlyPrice: "97",
    popular: false,
  },
  {
    name: "Premium",
    messages: "3.000 mensagens de IA/mês",
    attendances: "300 atendimentos em média",
    responses: "10 respostas geradas por atendimento",
    annualPrice: "2.148",
    monthlyPrice: "179",
    popular: true,
  },
  {
    name: "Growth",
    messages: "10.000 mensagens de IA/mês",
    attendances: "1.000 atendimentos em média",
    responses: "10 respostas geradas por atendimento",
    annualPrice: "4.524",
    monthlyPrice: "377",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="precos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-connexia-magenta/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-connexia-magenta uppercase tracking-wider">
            Investimento
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Escolha o plano{" "}
            <span className="gradient-text">ideal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Planos flexíveis para escalar o atendimento do seu negócio.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 rounded-3xl border card-shadow transition-transform hover:scale-105 ${
                plan.popular
                  ? "gradient-card border-connexia-magenta/30 animate-pulse-glow"
                  : "bg-card/50 border-border/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full gradient-primary">
                    <Star className="w-4 h-4 text-primary-foreground fill-current" />
                    <span className="text-sm font-semibold text-primary-foreground">
                      Mais Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6 pt-2">
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Plano {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground text-lg">R$</span>
                  <span className="font-display font-black text-5xl gradient-text">
                    {plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground text-lg">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  ou R${plan.annualPrice}/ano
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    plan.popular ? "gradient-primary" : "bg-connexia-cyan/20"
                  }`}>
                    <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-connexia-cyan"}`} />
                  </div>
                  <span className="text-foreground">{plan.messages}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    plan.popular ? "gradient-primary" : "bg-connexia-cyan/20"
                  }`}>
                    <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-connexia-cyan"}`} />
                  </div>
                  <span className="text-foreground">{plan.attendances}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    plan.popular ? "gradient-primary" : "bg-connexia-cyan/20"
                  }`}>
                    <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-connexia-cyan"}`} />
                  </div>
                  <span className="text-foreground">{plan.responses}</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                Contratar Agora
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Todos os planos incluem suporte completo e integração com WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
