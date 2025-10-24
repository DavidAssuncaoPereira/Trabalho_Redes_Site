import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Code, Cpu, GitBranch } from "lucide-react";
import securityIcon from "@/assets/security-icon.jpg";
import networkInfra from "@/assets/network-infrastructure.jpg";

const ProjectDetails = () => {
  const modules = [
    {
      title: "Módulo 1: Fundamentos",
      items: [
        "Análise de requisitos de rede",
        "Planeamento de infraestrutura",
        "Seleção de equipamentos",
        "Documentação técnica"
      ]
    },
    {
      title: "Módulo 2: Implementação",
      items: [
        "Configuração de switches e routers",
        "Implementação de VLANs",
        "Protocolos de routing dinâmico",
        "Testes de conectividade"
      ]
    },
    {
      title: "Módulo 3: Segurança",
      items: [
        "Configuração de firewalls",
        "Implementação de VPN",
        "Sistemas de deteção de intrusões",
        "Políticas de segurança"
      ]
    },
    {
      title: "Módulo 4: Otimização",
      items: [
        "Monitorização de performance",
        "Análise de tráfego",
        "Troubleshooting avançado",
        "Manutenção preventiva"
      ]
    }
  ];

  const technologies = [
    "Cisco IOS", "Packet Tracer", "Wireshark", "pfSense",
    "VirtualBox", "Linux Ubuntu Server", "Windows Server",
    "Docker", "Kubernetes", "Ansible", "GNS3", "Python",
    "Bash Scripting", "SSL/TLS", "IPSec"
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Detalhes do Projeto
          </h2>
          <p className="text-xl text-muted-foreground">
            Estrutura completa e componentes técnicos
          </p>
        </div>

        <Tabs defaultValue="modules" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm p-1">
            <TabsTrigger value="modules" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Code className="w-4 h-4 mr-2" />
              Módulos
            </TabsTrigger>
            <TabsTrigger value="tech" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Cpu className="w-4 h-4 mr-2" />
              Tecnologias
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Segurança
            </TabsTrigger>
            <TabsTrigger value="architecture" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <GitBranch className="w-4 h-4 mr-2" />
              Arquitetura
            </TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module, idx) => (
                <Card key={idx} className="p-6 bg-card/70 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{module.title}</h3>
                  <ul className="space-y-3">
                    {module.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tech" className="animate-fade-in">
            <Card className="p-8 bg-card/70 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, idx) => (
                  <div 
                    key={idx}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8 bg-card/70 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Medidas de Segurança</h3>
                <ul className="space-y-4">
                  {[
                    "Firewall de próxima geração (NGFW)",
                    "Segmentação de rede com VLANs",
                    "Autenticação multi-fator (MFA)",
                    "Encriptação de dados em trânsito",
                    "Sistemas de prevenção de intrusões (IPS)",
                    "Backups automáticos e redundância",
                    "Políticas de acesso baseadas em funções",
                    "Monitorização 24/7 de ameaças"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant h-full min-h-[400px]">
                <img 
                  src={securityIcon} 
                  alt="Security"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant h-full min-h-[400px]">
                <img 
                  src={networkInfra} 
                  alt="Network Infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <Card className="p-8 bg-card/70 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Componentes de Arquitetura</h3>
                <div className="space-y-6">
                  {[
                    { 
                      title: "Camada de Core", 
                      desc: "Switches de alta velocidade para backbone da rede" 
                    },
                    { 
                      title: "Camada de Distribuição", 
                      desc: "Routing entre VLANs e políticas de segurança" 
                    },
                    { 
                      title: "Camada de Acesso", 
                      desc: "Conexão de dispositivos finais e controlo de acesso" 
                    },
                    { 
                      title: "DMZ", 
                      desc: "Zona desmilitarizada para serviços públicos" 
                    },
                    { 
                      title: "Data Center", 
                      desc: "Infraestrutura de servidores virtualizada" 
                    }
                  ].map((component, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-1">{component.title}</h4>
                      <p className="text-muted-foreground text-sm">{component.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectDetails;
