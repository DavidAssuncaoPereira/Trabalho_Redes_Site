import { Button } from "@/components/ui/button";
import { Download, FileText, Network } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Animated Network Dots */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-glow-pulse delay-100"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary rounded-full animate-glow-pulse delay-200"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary-glow rounded-full animate-glow-pulse delay-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6 animate-scale-in">
            <Network className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Projeto de Redes 2025-26</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-glow to-primary bg-clip-text text-transparent leading-tight">
            Infraestrutura de Redes
            <br />
            & Cibersegurança
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore o projeto completo de implementação de redes seguras,
            com foco em arquitetura moderna e práticas de segurança avançadas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="group"
              onClick={() => window.open('/projeto-redes.pdf', '_blank')}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Descarregar Projeto
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => document.getElementById('documentation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="w-5 h-5" />
              Ver Documentação
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in">
          {[
            { label: "Módulos", value: "4", icon: Network },
            { label: "Segurança", value: "100%", icon: "🔒" },
            { label: "Tecnologias", value: "15+", icon: "⚡" }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 bg-background/5 backdrop-blur-md border border-primary/20 rounded-2xl hover:border-primary/40 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-2">
                {typeof stat.icon === 'string' ? stat.icon : <stat.icon className="w-10 h-10 mx-auto text-primary" />}
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
