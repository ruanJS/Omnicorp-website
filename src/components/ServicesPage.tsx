import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Workflow, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Globe, 
  Lock, 
  Settings, 
  Database, 
  Terminal, 
  Compass, 
  Layers,
  Sparkles,
  Search,
  Check
} from 'lucide-react';

interface ServicesPageProps {
  onStartProject: () => void;
  onNavigateHome: () => void;
}

export const ServicesPage = ({ onStartProject, onNavigateHome }: ServicesPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'design' | 'sec' | 'auto'>('all');

  const services = [
    {
      id: "design-corp",
      category: "design",
      icon: Globe,
      badge: "Estética de Elite",
      badgeFeatured: "Destaque",
      title: "Sites Corporativos de Luxo",
      tagline: "Projetados para conversão máxima de parceiros de alto valor.",
      details: [
        "Design 100% exclusivo sem utilização de templates",
        "Animações fluidas de alta performance para engajamento visual",
        "Arquitetura focada em velocidade de carregamento excepcional",
        "SEO estratégico pré-configurado para posicionamento orgânico",
        "Portabilidade perfeita e fluidez em telas mobile"
      ],
      description: "Construímos experiências digitais memoráveis para marcas tradicionais e inovadoras. Cada detalhe visual, ritmo micro-interativo e refinamento de layout é projetado para transmitir autoridade e valor perceptível ao seu público final.",
    },
    {
      id: "saas-ecommerce",
      category: "design",
      icon: Cpu,
      badge: "Sistemas Robustos",
      badgeFeatured: "Popular",
      title: "Plataformas SaaS & E-commerce Premium",
      tagline: "Sistemas dinâmicos projetados com arquiteturas escaláveis.",
      details: [
        "Plataformas em nuvem robustas com alto poder de concorrência",
        "Checkout corporativo otimizado para elevar taxa de conversão",
        "Integrações limpas com gateways de pagamentos globais",
        "Painéis administrativos modernos baseados em métricas",
        "Portas de conexão seguras e consistência operacional"
      ],
      description: "De aplicativos sob demanda escaláveis a portais de vendas com checkouts simplificados de alto volume. Blindamos as transações financeiras enquanto simplificamos a jornada de compra.",
    },
    {
      id: "pentest-sec",
      category: "sec",
      icon: Shield,
      badge: "Defesa Ativa",
      badgeFeatured: "Destaque",
      title: "Pentesting de Elite & Blindagem Digital",
      tagline: "Prevenção rigorosa contra invasões e auditoria ativa de vulnerabilidades.",
      details: [
        "Testes de invasão controlados com relatórios estruturados",
        "Identificação precisa de portas de vulnerabilidade",
        "Instalação e blindagem de firewalls modernos contra-ataques",
        "Diretrizes e adequações completas da segurança da informação",
        "Blindagem perimetral e arquiteturas isoladas eficientes"
      ],
      description: "Antecipe eventuais brechas de segurança antes que elas sejam aproveitadas de forma indesejada. Nossa equipe defensiva e de auditoria estabelece defesas rígidas e integradas em suas camadas mais profundas de rede.",
    },
    {
      id: "auto-flows",
      category: "auto",
      icon: Workflow,
      badge: "Orquestração de Dados",
      badgeFeatured: "Popular",
      title: "Automações Inteligentes & Hiperautomação",
      tagline: "Conexão total de rotinas operacionais sem a necessidade de intervenção humana.",
      details: [
        "Configuração de fluxos de dados unificados entre plataformas",
        "Notificações comerciais imediatas integradas com canais de comunicação",
        "Redução drástica de falhas humanas em processos repetitivos",
        "Sincronização instantânea de cadastros, vendas e inventários",
        "Tratamento autônomo inteligente de leads integrando CRMs"
      ],
      description: "Otimize consideravelmente a operação diária da sua corporação. Mapeamos, criamos e hospedamos fluxos inteligentes e contínuos de orquestração de dados, economizando dezenas de horas de trabalho operacional humano.",
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  const stats = [
    { label: "Velocidade Média de Resposta", value: "99.9%", desc: "Disponibilidade e consistência operacional constantes." },
    { label: "Brechas Identificadas & Mitigadas", value: "100%", desc: "Em todas as auditorias minuciosas de segurança realizadas." },
    { label: "Economia do Trabalho Manual", value: "35h/Semana", desc: "Média estimada de horas manuais economizadas por cliente." },
  ];

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-omega-bg text-omega-text text-left">
      {/* 1. Header Section */}
      <section className="relative py-32 md:py-48 overflow-hidden border-b border-omega-border/45">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,195,0,0.06),transparent_80%)]" />
          <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-omega-gold/5 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full border border-omega-gold/20 bg-omega-gold/5 text-omega-gold text-[9px] font-black tracking-[0.5em] uppercase mb-10"
          >
            NOSSAS SOLUÇÕES TECNOLÓGICAS
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-display font-bold leading-none tracking-tighter mb-10"
          >
            Serviços de <span className="text-transparent bg-clip-text gold-luxury-gradient gold-text-glow font-black italic">Desenvolvimento</span> <br />& Cibersegurança
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-lg md:text-2xl text-omega-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed font-light tracking-tight"
          >
            Projetamos, automatizamos e defendemos plataformas corporativas focadas em extrema escalabilidade, design sensorial incomparável e blindagem perimetral implacável.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button 
              onClick={onStartProject}
              className="px-10 py-5 bg-omega-gold text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-omega-gold-hover transition-all duration-500 gold-glow hover:scale-105 active:scale-95 cursor-pointer"
            >
              Fazer Orçamento
            </button>
            <button 
              onClick={onNavigateHome}
              className="px-10 py-5 border border-omega-border text-omega-text font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white/5 transition-all duration-500 hover:border-omega-gold/40 cursor-pointer"
            >
              Ir para a Home
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Dynamic Categories Filter Buttons */}
      <section className="py-12 bg-omega-bg-secondary/40 border-b border-omega-border/40 sticky top-[73px] z-40 backdrop-blur-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center items-center"
        >
          <span className="text-omega-text-secondary font-black uppercase text-[10px] tracking-[0.4em] mr-4 hidden md:inline">Filtrar Soluções:</span>
          {[
            { id: 'all', label: 'Todos os Serviços' },
            { id: 'design', label: 'Design & Plataformas' },
            { id: 'sec', label: 'Cibersegurança & Pentest' },
            { id: 'auto', label: 'Automações Inteligentes' }
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

      {/* 3. Detailed Services Showcase Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((srv, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                key={srv.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-14 bg-[#111111] border border-omega-border rounded-[3.5rem] hover:border-omega-gold/20 transition-all duration-500 relative group overflow-hidden"
              >
                {/* Glow Background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-omega-gold/5 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Left Side: Identity & Meta */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-omega-gold/5 flex items-center justify-center text-omega-gold group-hover:bg-omega-gold group-hover:text-black transition-all duration-500 gold-glow">
                          <srv.icon size={26} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5">
                            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-omega-gold/80 block">{srv.badge}</span>
                            {srv.badgeFeatured && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-[0.15em] bg-omega-gold text-black gold-glow font-sans">
                                <Sparkles size={8} /> {srv.badgeFeatured}
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-display font-medium text-white group-hover:text-omega-gold transition-colors duration-500 mt-1">{srv.title}</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-omega-text-secondary font-light text-base md:text-lg leading-relaxed mb-6">
                      {srv.tagline}
                    </p>
                    <p className="text-omega-text-secondary/70 font-light text-sm leading-relaxed mb-8">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Right Side: Detailed specs list */}
                <div className="lg:col-span-7 flex flex-col justify-center bg-omega-bg-secondary/40 border border-omega-border/20 rounded-[2.5rem] p-8 md:p-12 space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-omega-gold mb-4 border-b border-omega-border/40 pb-4">Garantia das Nossas Entregas</h4>
                  <ul className="space-y-4">
                    {srv.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-omega-text">
                        <div className="w-6 h-6 rounded-full bg-omega-gold/5 flex items-center justify-center text-omega-gold shrink-0 mt-0.5">
                          <Check size={12} />
                        </div>
                        <span className="font-light text-base tracking-tight leading-relaxed text-omega-text-secondary group-hover:text-white transition-colors duration-500">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Interactive Workflow Demonstration Simulated Box */}
      <section className="py-24 bg-omega-bg-secondary relative border-y border-omega-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Context Left */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-8"
            >
              <span className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] block">Sistemas Inteligentes</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium text-white leading-none tracking-tighter">
                Orquestração <br />
                <span className="text-omega-gold italic font-light">Em Tempo Real.</span>
              </h2>
              <p className="text-omega-text-secondary text-base md:text-lg leading-relaxed font-light">
                Com hiperautomações integradas, seus aplicativos de vendas, bancos de dados corporativos e ferramentas comunicam-se de forma assíncrona. O diagrama ao lado ilustra um fluxo perfeitamente operacional: o recebimento de informações comerciais e a respectiva conformidade de segurança operada de forma instantânea.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-omega-gold/10 flex items-center justify-center text-omega-gold"><Check size={10} /></div>
                  <span className="text-sm font-light text-omega-text-secondary">Redução substancial de custos operacionais residuais</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-omega-gold/10 flex items-center justify-center text-omega-gold"><Check size={10} /></div>
                  <span className="text-sm font-light text-omega-text-secondary">Zero latência nas tomadas de decisão internas</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive/Animated Diagram Right */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-7 p-10 bg-omega-card border border-omega-border rounded-[3rem] space-y-8 relative overflow-hidden"
            >
              <span className="text-[9px] font-mono text-omega-gold block">WORKSPACE_STATUS: ORCHESTRATOR_ONLINE</span>
              
              <div className="space-y-6 relative z-10">
                {/* Node 1 */}
                <div className="p-5 bg-[#171717] border border-emerald-500/30 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <Globe size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-white">1. Form_Trigger (Novo Lead)</h4>
                      <p className="text-[10px] text-omega-text-secondary/60">Submetido de forma segura no site corporativo</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-lg border border-emerald-500/20 uppercase tracking-widest leading-none">Ativo</span>
                </div>

                {/* Connecting arrow indicator */}
                <div className="flex justify-center h-4">
                  <div className="w-px border-l-2 border-dashed border-omega-gold/50 h-full"></div>
                </div>

                {/* Node 2 */}
                <div className="p-5 bg-[#171717] border border-omega-gold/30 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-omega-gold/10 flex items-center justify-center text-omega-gold">
                      <Workflow size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-white">2. Processador Automatizado (Sistemas)</h4>
                      <p className="text-[10px] text-omega-text-secondary/60">Enriquecimento inteligente & Sincronização centralizada</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-omega-gold/10 text-omega-gold font-mono text-[9px] rounded-lg border border-omega-gold/20 uppercase tracking-widest leading-none">Processando</span>
                </div>

                {/* Connecting arrow indicator */}
                <div className="flex justify-center h-4">
                  <div className="w-px border-l-2 border-dashed border-omega-gold/50 h-full"></div>
                </div>

                {/* Node 3 */}
                <div className="p-5 bg-[#171717] border border-emerald-500/30 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <Shield size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-white">3. Auditoria Preventiva (Segurança)</h4>
                      <p className="text-[10px] text-omega-text-secondary/60">Criptografia em trânsito com autenticação mútua</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-lg border border-emerald-500/20 uppercase tracking-widest leading-none">Protegido</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Service Stats Block */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((st, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-10 bg-omega-card border border-omega-border rounded-[2.5rem] hover:border-omega-gold/20 transition-all duration-500"
              >
                <h3 className="text-5xl font-display font-bold text-white mb-4">{st.value}</h3>
                <h4 className="text-omega-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4">{st.label}</h4>
                <p className="text-omega-text-secondary font-light text-sm">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dynamic FAQ section */}
      <section className="py-24 bg-omega-bg-secondary/60 border-t border-omega-border/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8 mx-auto"
          >
            PERGUNTAS DE CLIENTES
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-display font-bold mb-16 leading-none tracking-tighter"
          >
            Faq de <span className="text-omega-gold italic font-light">Serviços</span>
          </motion.h3>

          <div className="text-left space-y-6">
            {[
              {
                q: "A Omnicorp realiza melhorias e manutenção em sistemas desenvolvidos por terceiros?",
                a: "Sim. Podemos auditar seu sistema atual, sanar brechas estruturais de segurança na rede corporativa e otimizar integrações de dados legados sem fricção operacional."
              },
              {
                q: "Como é mensurado o sucesso de um fluxo em automações com orquestradores de dados?",
                a: "Nós configuramos logs integrados e painéis corporativos onde você visualiza exatamente as horas de trabalho manual eliminadas, o uptime operacional e as quedas na taxa de falhas comerciais."
              },
              {
                q: "Qual o prazo padrão para auditorias e blindagens de segurança?",
                a: "Para varreduras perimetrais preventivas completas com fornecimento de laudos e mitigação de vulnerabilidades críticas, o prazo de execução padrão varia entre 10 a 18 dias úteis."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 bg-omega-card border border-omega-border rounded-2xl hover:border-omega-gold/20 transition-all duration-500"
              >
                <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                <p className="text-omega-text-secondary font-light text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dedicated Call to Action Section */}
      <section className="py-32 bg-omega-bg relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-omega-card border border-omega-border rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-omega-gold/5 rounded-full blur-[100px]" />
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Sua Próxima Plataforma <br />Banhada em <span className="text-transparent bg-clip-text gold-luxury-gradient italic font-light">Excelência e Segurança.</span>
            </h3>
            <p className="text-omega-text-secondary text-base md:text-xl font-light max-w-2xl mx-auto mb-12">
              Livre-se de brechas digitais ou processos manuais lentos. Faça um orçamento hoje com nossos desenvolvedores de sistemas.
            </p>
            <button
              onClick={onStartProject}
              className="px-12 py-5 bg-omega-gold text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-omega-gold-hover transition-all duration-500 gold-glow hover:scale-105 active:scale-95 cursor-pointer"
            >
              Fazer Orçamento Agora
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
