import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, {
      threshold: 0.5
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);
  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);
  return {
    count,
    ref
  };
};
const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const stat1 = useCountUp(1000, 2000);
  const stat2 = useCountUp(100, 2000);
  const stat3 = useCountUp(24, 1500);
  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape w-96 h-96 -top-20 -right-20 animate-float" />
        <div className="floating-shape w-64 h-64 top-1/3 -left-20 animate-float-delayed" />
        <div className="floating-shape w-80 h-80 bottom-20 right-1/4 animate-float-slow" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
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
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            Automatize, encante, execute, resolva e simplifique. 
            Divida o fluxo de trabalho entre colaboradores humanos e virtuais, 
            potencializados pelo poder da inteligência artificial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <Button variant="hero" size="xl">
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => setIsVideoOpen(true)}>
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div style={{
          animationDelay: '0.4s'
        }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 md:gap-16 mt-16 pt-16 border-t border-connexia-pink/30 animate-fade-in my-[40px]">
            <div ref={stat1.ref} className="text-center px-4 py-6 rounded-2xl bg-gradient-to-b from-connexia-pink/10 to-transparent">
              <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl gradient-text drop-shadow-lg">
                {stat1.count}+
              </div>
              <div className="text-base md:text-lg text-foreground/80 mt-3 font-medium">Atendimentos/mês</div>
            </div>
            <div ref={stat2.ref} className="text-center px-4 py-6 rounded-2xl bg-gradient-to-b from-connexia-cyan/10 to-transparent">
              <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl gradient-text drop-shadow-lg">
                {stat2.count}%
              </div>
              <div className="text-base md:text-lg text-foreground/80 mt-3 font-medium">Humanizado</div>
            </div>
            <div ref={stat3.ref} className="text-center px-4 py-6 rounded-2xl bg-gradient-to-b from-connexia-pink/10 to-transparent">
              <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl gradient-text drop-shadow-lg">
                {stat3.count}/7
              </div>
              <div className="text-base md:text-lg text-foreground/80 mt-3 font-medium">Disponibilidade</div>
            </div>
          </div>
        </div>

        {/* Floating Bot Icon */}
        <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center glow-effect">
            <Bot className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
      </div>
    </section>

    {/* YouTube Video Dialog */}
    <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
      <DialogContent className="sm:max-w-4xl p-0 bg-background border-connexia-pink/20">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-foreground">Demonstração ConnexIA</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={isVideoOpen ? "https://www.youtube.com/embed/zn8_vlxBlSI?autoplay=1" : ""}
            title="Demonstração ConnexIA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-b-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};
export default Hero;