import { Network, Github, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">NetProject</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Projeto académico de infraestrutura de redes e cibersegurança
              desenvolvido com as mais recentes tecnologias e melhores práticas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "#" },
                { label: "Características", href: "#features" },
                { label: "Detalhes", href: "#details" },
                { label: "Documentação", href: "#documentation" },
                { label: "Contacto", href: "#contacto" },
                { label: "PDF Completo", href: "/projeto-redes.pdf" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.href.startsWith('/') && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Mail className="w-4 h-4" />
                projeto@redes.edu
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Github className="w-4 h-4" />
                GitHub Repository
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025-26 ESDS - Projeto de Redes M4. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
