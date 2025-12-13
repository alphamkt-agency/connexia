import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Logo from "@/assets/Logo_ConnexIA.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={Logo} alt="ConnexIA Logo" className="h-8 w-8" />
              <span className="font-display font-bold text-xl text-foreground">
                connex<span className="gradient-text">ia</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md">
              Conectando seu negócio ao futuro através da inteligência artificial. 
              Automatize, encante e simplifique seu atendimento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">
                Recursos
              </a>
              <a href="#modulos" className="text-muted-foreground hover:text-foreground transition-colors">
                Módulos
              </a>
              <a href="#precos" className="text-muted-foreground hover:text-foreground transition-colors">
                Preços
              </a>
              <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@connexia.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>contato@connexia.com.br</span>
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ConnexIA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors">
              <Instagram className="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
