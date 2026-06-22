import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  Workflow,
  Cpu,
  Shield,
  Globe,
  TrendingUp,
  Database,
  Layers,
  Check
} from 'lucide-react';
import { LazyImage } from './LazyImage';

interface PortfolioPageProps {
  onStartProject: () => void;
  onNavigateHome: () => void;
}

export const PortfolioPage = ({ onStartProject, onNavigateHome }: PortfolioPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'saas' | 'ecommerce' | 'security' | 'automation'>('all');

  const projects = [
    {
      id: "lumina",
      category: "saas",
      categoryLabel: "Plataforma SaaS",
      title: "Lumina Digital",
      badgeFeatured: "Destaque",
      summary: "Uma plataforma de análise de dados corporativos e inteligência operacional voltada para alta escalabilidade, monitoramento de desempenho e relatórios executivos em tempo real.",
      longDesc: "Desenvolvemos do zero uma infraestrutura em nuvem extremamente robusta para centralizar e tratar grandes volumes de dados de vendas e operações. O painel unificado foi projetado especificamente para atuar com latência zero e design visual de prestígio.",
      image: "https://picsum.photos/seed/tech1/1200/900",
      link: "https://lumina.omnicorp.dev",
      metrics: [
        { label: "Tempo de Resposta", value: "<15ms" },
        { label: "Volume de Dados Diário", value: "3.2TB" },
        { label: "Satisfação dos Diretores", value: "100%" }
      ],
      deliverables: [
        "Arquitetura de dados de altíssima concorrência",
        "Visualização imersiva de gráficos interativos",
        "Servidores isolados com replicação geográfica",
        "Segurança criptografada em todas as chamadas"
      ]
    },
    {
      id: "aetheria",
      category: "ecommerce",
      categoryLabel: "E-commerce de Luxo",
      title: "Aetheria Luxury",
      badgeFeatured: "Popular",
      summary: "O ápice do varejo digital para marcas de altíssimo padrão. Uma experiência rica em micro-interações táteis, checkout corporativo e design exclusivo focado em valor perceptível.",
      longDesc: "Nossos designers esculpiram cada detalhe de layout desta plataforma luxuosa de e-commerce. Substituímos fluxos de compra redundantes por uma jornada tátil impecável, aumentando substancialmente o tíquete médio da marca.",
      image: "https://picsum.photos/seed/luxury/1200/900",
      link: "https://aetheria.omnicorp.dev",
      metrics: [
        { label: "Aumento na Conversão", value: "+42%" },
        { label: "Carregamento de Página", value: "0.8s" },
        { label: "Tíquete Médio Residual", value: "R$ 4.200" }
      ],
      deliverables: [
        "Design de alta fidelidade sob medida para luxo",
        "Mecanismo de checkout simplificado de um clique",
        "Otimização extrema para dispositivos móveis",
        "Gerenciamento autônomo de catálogo e estoques"
      ]
    },
    {
      id: "aegis",
      category: "security",
      categoryLabel: "Pentest e Cibersegurança",
      title: "Aegis Secure",
      badgeFeatured: "Destaque",
      summary: "Uma suíte completa de auditoria preventiva, mapeamento de vulnerabilidade física e lógica e proteção perimetral avançada de sistemas digitais.",
      longDesc: "Executamos testes de penetração com autorização prévia e blindamos a arquitetura computacional interna de um grande grupo corporativo, vedando todas as brechas de infraestrutura e implementando detecção automatizada de intrusões.",
      image: "https://picsum.photos/seed/security/1200/900",
      link: "https://aegis.omnicorp.dev",
      metrics: [
        { label: "Vulnerabilidades Sanadas", value: "100%" },
        { label: "Firewall Uptime", value: "100%" },
        { label: "Zero-Trust Protocol", value: "Ativo" }
      ],
      deliverables: [
        "Simulação tática de ataques externos corporativos",
        "Relatórios técnicos estruturados de riscos",
        "Instalação e endurecimento de firewalls perimetrais",
        "Criptografia nativa em bancos de dados confidenciais"
      ]
    },
    {
      id: "synapse",
      category: "automation",
      categoryLabel: "Automações Inteligentes",
      title: "Synapse Automations",
      badgeFeatured: "Popular",
      summary: "Orquestração inteligente e contínua conectando as operações críticas de canais de venda, CRMs e faturamento sem qualquer interferência humana.",
      longDesc: "Unificamos todos os canais de atendimento, faturamento estruturado e atualização de dados operacionais sob fluxos seguros de automação assíncrona. Reduzimos para zero o erro humano e economizamos centenas de horas operacionais semestrais.",
      image: "https://picsum.photos/seed/automation/1200/900",
      link: "https://synapse.omnicorp.dev",
      metrics: [
        { label: "Horas Salvas / Semana", value: "45 horas" },
        { label: "Latência de Processamento", value: "0.5s" },
        { label: "Fidelidade de Cadastros", value: "100%" }
      ],
      deliverables: [
        "Design de fluxos assíncronos de dados seguros",
        "Notificações instantâneas comerciais",
        "Sincronização imediata de leads em sistemas de CRM",
        "Gestão autônoma inteligente de relatórios diários"
      ]
    },
    {
      id: "vortex",
      category: "saas",
      categoryLabel: "Dashboard Financeiro",
      title: "Vortex Analytics",
      badgeFeatured: null,
      summary: "Painel analítico de alta performance para corretoras e gestoras de investimentos globais, com criptografia integrada.",
      longDesc: "Modelamos uma plataforma financeira robusta focada na exibição instantânea de derivativos e relatórios analíticos de carteiras corporativas de investimentos. Desenvolvida sob padrões de governança rigorosos e segurança impenetrável.",
      image: "https://picsum.photos/seed/vortex/1200/900",
      link: "https://vortex.omnicorp.dev",
      metrics: [
        { label: "Disponibilidade Global", value: "99.99%" },
        { label: "Cálculo de Risco Portas", value: "<1ms" },
        { label: "Total Asset Integrado", value: "$4.8 Bilhões" }
      ],
      deliverables: [
        "Pipelines de dados blindados baseados em eventos",
        "Autenticação mútua rigorosa em servidores",
        "Design minimalista focado em clareza informativa",
        "Monitoramento contínuo de anomalias estruturais"
      ]
    },
    {
      id: "chronos",
      category: "automation",
      categoryLabel: "Cloud Orchestration",
      title: "Chronos Infrastructure",
      badgeFeatured: null,
      summary: "Gerenciamento dinâmico em nuvem integrado com sistemas autônomos de restauração e prevenção contínua de desastres operacionais.",
      longDesc: "Criamos scripts inteligentes de orquestração automatizada para provisionamento e monitoramento ativo de servidores. O ecossistema se auto-repara no momento exato de instabilidade de conectividade lógica.",
      image: "https://picsum.photos/seed/chronos/1200/900",
      link: "https://chronos.omnicorp.dev",
      metrics: [
        { label: "Restauração Média", value: "3 segundos" },
        { label: "Prevenção de Falhas", value: "99.995%" },
        { label: "Custo de Infra Reduzido", value: "-30%" }
      ],
      deliverables: [
        "Provisionamento automatizado sob demanda",
        "Detecção ativa e inteligente de picos de tráfego",
        "Prevenção contra quedas de rotas e conexões",
        "Configuração autônoma integrada de segurança"
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-omega-bg text-omega-text text-left">
      {/* 1. Header Hero with Slide-up & Fade-in Entry */}
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
            SHOWCASE DE SUCESSO DE CLIENTES
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-display font-bold leading-none tracking-tighter mb-10"
          >
            Nossos Trabalhos de <span className="text-transparent bg-clip-text gold-luxury-gradient gold-text-glow font-black italic">Excelência</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-lg md:text-2xl text-omega-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed font-light tracking-tight"
          >
            Explore o nosso portfólio de plataformas integradas, sistemas altamente seguros e arquiteturas digitais exclusivas moldadas para marcas líderes mundiais.
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
              Iniciar Meu Projeto
            </button>
            <button 
              onClick={onNavigateHome}
              className="px-10 py-5 border border-omega-border text-omega-text font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white/5 transition-all duration-500 hover:border-omega-gold/40 cursor-pointer"
            >
              Voltar para a Home
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Filter tabs with Slide-up & Fade-in */}
      <section className="py-12 bg-omega-bg-secondary/40 border-b border-omega-border/40 sticky top-[73px] z-40 backdrop-blur-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center items-center"
        >
          <span className="text-omega-text-secondary font-black uppercase text-[10px] tracking-[0.4em] mr-4 hidden md:inline">Filtrar Projetos:</span>
          {[
            { id: 'all', label: 'Todos os Projetos' },
            { id: 'saas', label: 'Plataformas SaaS' },
            { id: 'ecommerce', label: 'E-commerce' },
            { id: 'security', label: 'Segurança' },
            { id: 'automation', label: 'Automações' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 cursor-pointer ${
                selectedCategory === cat.id 
                  ? 'bg-omega-gold text-black gold-glow scale-105' 
                  : 'bg-omega-card border border-omega-border text-omega-text-secondary hover:text-white hover:border-omega-gold/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* 3. Portfolio Showcase Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((prj, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, y: -55 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                key={prj.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Visual Image Showcase - Left: odd index, Right: even index based layout */}
                <div className={`col-span-1 lg:col-span-6 relative rounded-[3.5rem] overflow-hidden group border border-omega-border bg-omega-card cursor-pointer ${
                  index % 2 === 1 ? 'lg:order-last' : ''
                }`}>
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-omega-gold/5 mix-blend-overlay" />
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[inset_0_0_80px_rgba(255,195,0,0.15)]" />
                  
                  {/* High performance Lazy Loading Image component with viewport scroll entry animation */}
                  <LazyImage 
                    src={prj.image} 
                    alt={prj.title}
                    wrapperClassName="aspect-[4/3]"
                    className="group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-85 group-hover:opacity-100"
                  />
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 z-30 bg-gradient-to-t from-black via-black/30 to-transparent w-full">
                    <span className="text-omega-gold text-[9px] font-black uppercase tracking-[0.4em] mb-2 block">{prj.categoryLabel}</span>
                    <h3 className="text-3xl md:text-5xl font-display font-black text-white group-hover:text-omega-gold transition-colors duration-500">{prj.title}</h3>
                  </div>

                  <a 
                    href={prj.link}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Navegando de forma simulada para a plataforma exclusiva ${prj.title} em ${prj.link}`);
                    }}
                    className="absolute top-10 right-10 w-14 h-14 rounded-full bg-omega-gold flex items-center justify-center text-black opacity-0 group-hover:opacity-100 -translate-y-6 group-hover:translate-y-0 transition-all duration-700 z-40 gold-glow hover:scale-105"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>

                {/* Case Study Details Text Context - Right or Left side */}
                <div className="col-span-1 lg:col-span-6 space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="px-5 py-2 rounded-full border border-omega-border/40 bg-omega-card/30 text-omega-text-secondary text-[9px] font-black uppercase tracking-[0.3em]">
                      {prj.categoryLabel}
                    </span>
                    {prj.badgeFeatured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] bg-omega-gold text-black gold-glow font-sans">
                        <Sparkles size={8} /> {prj.badgeFeatured}
                      </span>
                    )}
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 leading-none tracking-tight">
                      {prj.title}
                    </h2>
                    <p className="text-omega-text-secondary text-lg font-light leading-relaxed tracking-tight">
                      {prj.summary}
                    </p>
                  </div>

                  <p className="text-omega-text-secondary/75 font-light text-base leading-relaxed border-l-2 border-omega-gold/20 pl-6 my-4 italic">
                    {prj.longDesc}
                  </p>

                  {/* Core deliverables bullet points */}
                  <div className="space-y-3 pb-4">
                    <h4 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.4em]">Entregas de Tecnologia Eficientes</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {prj.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-omega-gold/10 flex items-center justify-center text-omega-gold shrink-0 mt-0.5"><Check size={10} /></div>
                          <span className="text-xs text-omega-text-secondary leading-snug font-light">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics Block on Viewport slide-up & fade-in entrance */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-omega-border/40">
                    {prj.metrics.map((met, mIdx) => (
                      <div key={mIdx} className="p-4 bg-omega-card/60 border border-omega-border/60 rounded-2xl">
                        <p className="text-xl md:text-2xl font-display font-bold text-white">{met.value}</p>
                        <p className="text-[8px] font-black uppercase tracking-wider text-omega-text-secondary mt-1">{met.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-6">
                    <a 
                      href={prj.link}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Navegando de forma simulada para ${prj.title} em ${prj.link}`);
                      }}
                      className="group font-black uppercase text-omega-gold tracking-[0.3em] text-[10px] flex items-center gap-3 transition-all hover:gap-5"
                    >
                      Ver Caso de Estudo Real <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Experience timeline block or summary stats info */}
      <section className="py-24 bg-omega-bg-secondary/60 border-y border-omega-border/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="text-[10px] font-black text-omega-gold uppercase tracking-[0.5em] block">SISTEMAS CERTIFICADOS</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-none">
              Nossa Garantia de Sucesso & Compromisso
            </h2>
            <p className="text-omega-text-secondary text-base md:text-lg font-light leading-relaxed">
              Todos os nossos produtos são entregues acompanhados de documentações completas, testes unitários rigorosos e uma auditoria de cibersegurança integrada. Blindamos suas rotinas operacionais para que você se preocupe estritamente em expandir seu faturamento corporativo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Direct Project Inquiry CTA Section */}
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
              Seu Projeto Sob Medida <br />Conectado com o <span className="text-transparent bg-clip-text gold-luxury-gradient italic font-light">Sucesso Máximo.</span>
            </h3>
            <p className="text-omega-text-secondary text-base md:text-xl font-light max-w-2xl mx-auto mb-12">
              Transforme a performance digital da sua corporação com nossas plataformas exclusivas. Desenvolvemos com velocidade, beleza e robustez inabalável.
            </p>
            <button
              onClick={onStartProject}
              className="px-12 py-5 bg-omega-gold text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-omega-gold-hover transition-all duration-500 gold-glow hover:scale-105 active:scale-95 cursor-pointer"
            >
              Iniciar Um Projeto Agora
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
