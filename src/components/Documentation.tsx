import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Target, Lightbulb, ClipboardCheck, Download, FileText, Award } from "lucide-react";

const Documentation = () => {
  const objectives = [
    {
      title: "Análise e Planeamento",
      description: "Realizar análise detalhada dos requisitos de rede e planear uma infraestrutura escalável e segura"
    },
    {
      title: "Implementação Prática",
      description: "Configurar equipamentos de rede, implementar VLANs e protocolos de routing em ambiente simulado"
    },
    {
      title: "Segurança da Informação",
      description: "Aplicar medidas de cibersegurança, incluindo firewalls, VPN e sistemas de deteção de intrusões"
    },
    {
      title: "Otimização e Manutenção",
      description: "Monitorizar, analisar performance e realizar troubleshooting da infraestrutura implementada"
    }
  ];

  const methodology = [
    {
      phase: "Fase 1: Estudo Teórico",
      tasks: [
        "Revisão de conceitos de networking",
        "Estudo de protocolos TCP/IP",
        "Análise de topologias de rede",
        "Investigação de standards de segurança"
      ]
    },
    {
      phase: "Fase 2: Planeamento",
      tasks: [
        "Levantamento de requisitos",
        "Design da topologia de rede",
        "Seleção de equipamentos",
        "Planeamento de endereçamento IP"
      ]
    },
    {
      phase: "Fase 3: Implementação",
      tasks: [
        "Configuração de switches e routers",
        "Implementação de VLANs e trunking",
        "Configuração de routing (OSPF/EIGRP)",
        "Setup de servidores (DHCP, DNS, Web)"
      ]
    },
    {
      phase: "Fase 4: Segurança",
      tasks: [
        "Configuração de ACLs",
        "Implementação de firewall (pfSense)",
        "Setup de VPN site-to-site",
        "Configuração de IDS/IPS"
      ]
    },
    {
      phase: "Fase 5: Testes e Validação",
      tasks: [
        "Testes de conectividade",
        "Análise de tráfego (Wireshark)",
        "Testes de segurança e penetração",
        "Documentação de resultados"
      ]
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Manual de Configuração",
      description: "Guia passo-a-passo para configuração de todos os equipamentos",
      type: "PDF"
    },
    {
      icon: FileText,
      title: "Relatório Técnico",
      description: "Documentação completa com análise e resultados obtidos",
      type: "PDF"
    },
    {
      icon: Award,
      title: "Certificações",
      description: "Lista de certificações e competências desenvolvidas",
      type: "Web"
    }
  ];

  return (
    <section id="documentation" className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Documentação Completa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Guia do Projeto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Toda a informação necessária para compreender, implementar e avaliar este projeto de redes
          </p>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Objetivos do Projeto</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {obj.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Metodologia de Implementação</h3>
          </div>
          <Card className="p-8 bg-card/50 backdrop-blur-sm">
            <Accordion type="single" collapsible className="w-full">
              {methodology.map((phase, idx) => (
                <AccordionItem key={idx} value={`phase-${idx}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {phase.phase}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 mt-4">
                      {phase.tasks.map((task, taskIdx) => (
                        <li key={taskIdx} className="flex items-start gap-3">
                          <ClipboardCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Download className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Recursos e Documentos</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <resource.icon className="w-full h-full text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {resource.title}
                  </h4>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {resource.type}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {resource.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-primary/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Descarregar Documentação Completa</h3>
              <p className="text-muted-foreground">
                Aceda ao documento PDF com todos os detalhes técnicos, configurações e resultados do projeto
              </p>
            </div>
            <Button 
              variant="hero" 
              size="lg"
              className="whitespace-nowrap"
              onClick={() => window.open('/projeto-redes.pdf', '_blank')}
            >
              <Download className="w-5 h-5" />
              Descarregar PDF
            </Button>
          </div>
        </Card>

        {/* Key Results */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Resultados Esperados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Rede Funcional",
                description: "Infraestrutura completa com conectividade garantida entre todos os dispositivos"
              },
              {
                title: "Segurança Robusta",
                description: "Múltiplas camadas de proteção implementadas e testadas com sucesso"
              },
              {
                title: "Performance Otimizada",
                description: "Latência minimizada e throughput maximizado através de configurações otimizadas"
              }
            ].map((result, idx) => (
              <div 
                key={idx}
                className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">{result.title}</h4>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
