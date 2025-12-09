import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape w-96 h-96 -top-20 -right-20 animate-float" />
        <div className="floating-shape w-64 h-64 top-1/3 -left-20 animate-float-delayed" />
        <div className="floating-shape w-80 h-80 bottom-20 right-1/4 animate-float-slow" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-connexia-cyan" />
            <span className="text-sm text-muted-foreground">
              O futuro do atendimento ao cliente
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight animate-slide-up">
            O futuro do seu{" "}
            <span className="gradient-text">negócio</span>
            <br />
            é agora
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Automatize, encante, execute, resolva e simplifique. 
            Divida o fluxo de trabalho entre colaboradores humanos e virtuais, 
            potencializados pelo poder da inteligência artificial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl">
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 md:gap-16 mt-16 pt-16 border-t border-border/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center px-4">
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text">1000+</div>
              <div className="text-sm text-muted-foreground mt-2">Atendimentos/mês</div>
            </div>
            <div className="text-center px-4">
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text">100%</div>
              <div className="text-sm text-muted-foreground mt-2">Humanizado</div>
            </div>
            <div className="text-center px-4">
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground mt-2">Disponibilidade</div>
            </div>
          </div>
        </div>

        {/* Floating Bot Icon */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center glow-effect">
            <Bot className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
