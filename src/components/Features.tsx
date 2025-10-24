import { Card } from "@/components/ui/card";
import { Shield, Network, Lock, Database, Cloud, Zap, Server, Globe } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Arquitetura de Rede",
    description: "Design completo de infraestrutura com topologias modernas e escaláveis",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Cibersegurança",
    description: "Implementação de firewalls, VPNs e sistemas de deteção de intrusões",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lock,
    title: "Proteção de Dados",
    description: "Encriptação end-to-end e gestão segura de informação sensível",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Database,
    title: "Gestão de Recursos",
    description: "Otimização de servidores e balanceamento de carga",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Soluções híbridas com integração de serviços cloud",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Configuração otimizada para máxima velocidade e eficiência",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Server,
    title: "Virtualização",
    description: "Implementação de ambientes virtualizados e containers",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Conectividade Global",
    description: "Redes WAN e soluções de conectividade internacional",
    color: "from-violet-500 to-purple-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Características Principais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma infraestrutura completa que combina tecnologia de ponta com as melhores práticas de segurança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant cursor-pointer animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
