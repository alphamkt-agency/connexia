import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const CTA = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full gradient-primary opacity-20 blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full gradient-primary opacity-20 blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl gradient-primary flex items-center justify-center mx-auto mb-8 glow-effect animate-float">
            <MessageSquare className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
            Pronto para{" "}
            <span className="gradient-text">transformar</span>
            <br />
            seu atendimento?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Entre em contato agora e descubra como a ConnexIA pode revolucionar 
            a experiência dos seus clientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl">
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="heroOutline" size="xl">
                  Ver Demonstração
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-background border-border overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/zn8_vlxBlSI?autoplay=1"
                    title="Demonstração ConnexIA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Trust Indicators */}
        </div>
      </div>
    </section>
  );
};

export default CTA;