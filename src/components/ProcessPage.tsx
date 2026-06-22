import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  Search, 
  Layers, 
  Cpu, 
  ExternalLink,
  Lock,
  Compass,
  Zap,
  CheckCircle2,
  Calendar,
  MessageSquare,
  TrendingUp,
  Award
} from 'lucide-react';
import { LazyImage } from './LazyImage';

interface ProcessPageProps {
  onStartProject: () => void;
  onNavigateHome: () => void;
}

export const ProcessPage = ({ onStartProject, onNavigateHome }: ProcessPageProps) => {
  const steps = [
    {
      phase: "01",
      stepName: "FASE DE IMERSÃO",
      title: "Descoberta & Alinhamento Estratégico",
      tagline: "Mergulhamos profundamente no DNA corporativo para mapear desafios e oportunidades reais.",
      description: "Antes de escrever uma linha de código ou desenhar um vetor, estudamos minuciosamente o seu mercado, analisamos gargalos de faturamento, canais de captação de leads e metas de segurança. Alinhamos as soluções com as ambições estratégicas de sua marca.",
      avatar: "https://picsum.photos/seed/discovery/800/600",
      actions: [
        "Mapeamento holístico de fluxos operacionais",
        "Diagnóstico de brechas de conexão e silos de dados",
        "Definição metódica de escopo funcional e métricas de sucesso",
        "Entrevistas exclusivas com as partes interessadas do projeto"
      ],
      deliverable: "Laudo estratégico inicial e proposta arquitetônica consolidada."
    },
    {
      phase: "02",
      stepName: "FASE DE REFINAMENTO",
      title: "Estética de Elite & Ergonomia de Layout",
      tagline: "Projetamos layouts sensoriais de prestígio que geram credibilidade instantânea.",
      description: "Cada curva, tipografia e micro-interação é minuciosamente desenhada sob medida. Não trabalhamos com modelos genéricos. Criamos protótipos em alta fidelidade com visualizações interativas para que você sinta a experiência em tempo real antes do desenvolvimento final.",
      avatar: "https://picsum.photos/seed/design-ref/800/600",
      actions: [
        "Direção de arte dedicada com paleta cromática exclusiva",
        "Design de interface de prestígio focado no conforto do usuário",
        "Fluxos de navegação fluidos orientados para conversões elevadas",
        "Micro-animações delicadas aplicadas para guiar a atenção visual"
      ],
      deliverable: "Protótipo interativo completo e guia de identidade digital unificado."
    },
    {
      phase: "03",
      stepName: "FASE DE ENGENHARIA",
      title: "Desenvolvimento Robusto & Blindagem Ativa",
      tagline: "Escrevemos códigos limpos, seguros e com altíssimo desempenho para sustentar sua marca.",
      description: "Nossos engenheiros cibernéticos implementam sistemas seguindo os mais altos padrões de segurança lógica do mercado. Desenvolvemos com foco na extrema velocidade de carregamento de páginas e total segurança no processamento de dados confidenciais.",
      avatar: "https://picsum.photos/seed/dev-code/800/600",
      actions: [
        "Programação exclusiva com técnicas modernas de desempenho",
        "Auditoria de segurança de código integrada e contínua",
        "Orquestração assíncrona de dados para sistemas sem interferência",
        "Testes estressantes de concorrência e carga de conexões digitais"
      ],
      deliverable: "Código-fonte impecável e plataforma hospedada em ambiente de testes."
    },
    {
      phase: "04",
      stepName: "FASE DE IMPLANTAÇÃO",
      title: "Lançamento de Impacto & Suporte Ativo",
      tagline: "Uma transição segura e sem atritos para colocar seu sistema no palco mundial.",
      description: "Garantimos uma migração segura de dados caso necessário e uma implantação assistida por nossa equipe técnica. Monitoramos ativamente a atividade inicial para garantir estabilidade absoluta, entregando painéis para que você entenda as métricas operacionais.",
      avatar: "https://picsum.photos/seed/launch/800/600",
      actions: [
        "Lançamento assistido e monitorado de forma contínua",
        "Configuração de balanceamento inteligente de rotas",
        "Suporte pós-lançamento imediato em canais dedicados",
        "Entrega de painéis visuais para monitorização em tempo real"
      ],
      deliverable: "Plataforma ativa operando no ápice com monitoração robusta habilitada."
    }
  ];

  const valueProps = [
    {
      icon: MessageSquare,
      title: "Comunicação Eficiente",
      desc: "Reuniões semanais de progresso e canais exclusivos para que sua equipe esteja 100% atualizada sobre todas as etapas."
    },
    {
      icon: Calendar,
      title: "Cronogramas Respeitados",
      desc: "Compromisso inflexível com datas de entrega. Planejamos marcos claros de desenvolvimento para evitar atrasos operacionais."
    },
    {
      icon: Award,
      title: "Selo de Excelência",
      desc: "Nossos projetos são criados sob auditoria contínua de segurança e design, oferecendo tranquilidade estrutural à sua comissão executiva."
    }
  ];

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-omega-bg text-omega-text text-left">
      {/* 1. Header Section with Fade-in Slide-up */}
      <section className="relative py-32 md:py-48 overflow-hidden border-b border-omega-border/45">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,195,0,0.06),transparent_80%)]" />
          <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-omega-gold/5 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full border border-omega-gold/20 bg-omega-gold/5 text-omega-gold text-[9px] font-black tracking-[0.5em] uppercase mb-10"
          >
            GARANTIA DE METODOLOGIA METICULOSA
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-display font-bold leading-none tracking-tighter mb-10"
          >
            Nosso Método de <span className="text-transparent bg-clip-text gold-luxury-gradient gold-text-glow font-black italic">Excelência</span> Digital
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-lg md:text-2xl text-omega-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed font-light tracking-tight"
          >
            Conheça o passo a passo de como construímos experiências corporativas inovadoras, blindadas e extremamente velozes, com total visibilidade operacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button 
              onClick={onStartProject}
              className="px-10 py-5 bg-omega-gold text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-omega-gold-hover transition-all duration-500 gold-glow hover:scale-105 active:scale-95 cursor-pointer"
            >
              Começar Meu Projeto
            </button>
            <button 
              onClick={onNavigateHome}
              className="px-10 py-5 border border-omega-border text-omega-text font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white/5 transition-all duration-500 hover:border-omega-gold/40 cursor-pointer"
            >
              Explorar a Home
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Process Step Interactive Timeline Breakdown */}
      <section className="py-32 relative bg-omega-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-40">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 55 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                >
                  {/* Left or Right Side Visual Showcase Card */}
                  <div className={`col-span-1 lg:col-span-6 space-y-8 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                    <div className="relative rounded-[3rem] overflow-hidden border border-omega-border bg-omega-card group">
                      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-omega-gold/5 mix-blend-overlay" />
                      <LazyImage 
                        src={step.avatar} 
                        alt={step.title}
                        wrapperClassName="aspect-[4/3] w-full"
                        className="group-hover:scale-105 transition-transform duration-[1.5s] opacity-80"
                      />
                      <div className="absolute top-10 left-10 p-5 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-md z-20">
                        <span className="text-3xl font-display font-black text-omega-gold">{step.phase}</span>
                      </div>
                    </div>
                  </div>

                  {/* Context Text Box Content */}
                  <div className="col-span-1 lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-omega-gold text-[10px] font-black uppercase tracking-[0.4em]">
                        {step.stepName}
                      </span>
                      <span className="w-8 h-px bg-omega-gold/30"></span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-none">
                      {step.title}
                    </h2>

                    <p className="text-omega-text-secondary text-lg leading-relaxed font-light tracking-tight">
                      {step.tagline}
                    </p>

                    <p className="text-omega-text-secondary/75 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-3.5 pt-4">
                      <h4 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.4em] mb-4">Ações Estratégicas da Etapa:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.actions.map((act, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-omega-gold/10 flex items-center justify-center text-omega-gold shrink-0 mt-0.5">
                              <Check size={10} />
                            </div>
                            <span className="text-xs text-omega-text-secondary/90 font-light leading-snug">{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Central Deliverable highlight box */}
                    <div className="mt-8 p-5 bg-omega-card/40 border border-omega-border rounded-2xl flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-omega-gold/5 flex items-center justify-center text-omega-gold shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase text-omega-gold/80 tracking-widest leading-none mb-1">Entregável Final</p>
                        <p className="text-xs text-omega-text-secondary font-light">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Operational Values & Commitments Section */}
      <section className="py-24 bg-omega-bg-secondary border-y border-omega-border/40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[10px] font-black text-omega-gold uppercase tracking-[0.5em] block">NOSSO COMPROMISSO</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-none">
              Excelência Operacional Sem Concessões.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {valueProps.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 md:p-10 bg-omega-card border border-omega-border rounded-[2.5rem] hover:border-omega-gold/25 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-omega-gold/5 flex items-center justify-center text-omega-gold mb-6">
                  <val.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{val.title}</h3>
                <p className="text-sm font-light text-omega-text-secondary leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bold Final Process Call to Action Section */}
      <section className="py-32 relative bg-omega-bg">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-omega-card border border-omega-border rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-omega-gold/5 rounded-full blur-[100px]" />
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Pronto para Vivenciar a <br />Sua Próxima <span className="text-transparent bg-clip-text gold-luxury-gradient italic font-light">Grande Evolução?</span>
            </h3>
            <p className="text-omega-text-secondary text-base md:text-xl font-light max-w-2xl mx-auto mb-12">
              Não perca tempo operando de forma lenta ou vulnerável. Descubra o verdadeiro potencial digital faturando com sistemas sob medida excepcionais.
            </p>
            <button
              onClick={onStartProject}
              className="px-12 py-5 bg-omega-gold text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-omega-gold-hover transition-all duration-500 gold-glow hover:scale-105 active:scale-95 cursor-pointer"
            >
              Dar o Primeiro Passo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
