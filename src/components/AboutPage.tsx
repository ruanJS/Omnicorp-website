import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LazyImage } from './LazyImage';
import { 
  Shield, 
  Workflow, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Target, 
  Eye, 
  Award,
  Lock,
  Compass,
  Linkedin,
  Github,
  Instagram,
  Mail
} from 'lucide-react';

interface AboutPageProps {
  onStartProject: () => void;
  onNavigateHome: () => void;
}

export const AboutPage = ({ onStartProject, onNavigateHome }: AboutPageProps) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { label: "Sistemas Monitorados & Blindados", value: "200+", icon: Shield },
    { label: "Horas de Automação Ativa", value: "24/7", icon: Workflow },
    { label: "Experiências Desenvolvidas", value: "120+", icon: Cpu },
    { label: "Eficiência Operacional Elevada", value: "+45%", icon: Zap },
  ];

  const methodology = [
    {
      title: "Cibersegurança Pró-Ativa",
      description: "Nossos analistas auditam vulnerabilidades antes de codificar, garantindo bases blindadas que protegem dados confidenciais.",
      icon: Shield
    },
    {
      title: "Hiperautomação com n8n",
      description: "Integração plena de ecossistemas para automatizar fluxos complexos, minimizando latências e eliminando erros humanos no processo.",
      icon: Workflow
    },
    {
      title: "Maestria no Design Sensorial",
      description: "Animações cirúrgicas, layouts focados em ultra-conversão e acabamento estético sofisticado sob medida para o público de alto padrão.",
      icon: Cpu
    }
  ];

  const valueProps = [
    {
      title: "Desenvolvimento de Elite",
      subtitle: "Não somos apenas criadores de sites; somos desenvolvedores de ecossistemas. Nossos especialistas trabalham próximos a executivos para sanar atritos de infraestrutura e redefinir margens operacionais."
    },
    {
      title: "Segurança Implacável",
      subtitle: "Com o crescimento de ameaças ao redor do globo, segurança tornou-se o principal pilar corporativo. A Omnicorp implanta arquitetura zero-trust em cada entrega, mitigando riscos continuamente."
    },
    {
      title: "Retorno Mensurável",
      subtitle: "Cada linha de código de automação, cada pixel desenvolvido e cada rota testada servem fundamentalmente a um único propósito de negócio: alta escalabilidade de lucros corporativos."
    }
  ];

  const processSteps = [
    {
      step: "Fase 01",
      title: "Diagnóstico Computacional & Pentest",
      description: "Avaliamos minuciosamente o ecossistema existente e realizamos testes de segurança invasivos para descobrir gargalos."
    },
    {
      step: "Fase 02",
      title: "Modelagem de Fluxo & Engenharia Visual",
      description: "Mapeamos os caminhos de integração dos dados (n8n, APIs) ao mesmo tempo que esculpimos a interface visual exclusiva de alta conversão."
    },
    {
      step: "Fase 03",
      title: "Desenvolvimento Blindado & Produção",
      description: "Codificamos sob metodologias de ponta, acoplamos os sistemas de detecção de intrusos e botamos os servidores para orquestrar na nuvem."
    },
    {
      step: "Fase 04",
      title: "Monitoramento Contínuo",
      description: "Nossos robôs varrem logs e dados operacionais de relatórios em tempo integral, garantindo disponibilidade máxima e atualização imediata."
    }
  ];

  const faqs = [
    {
      q: "Como a Omnicorp assegura que o produto final é resiliente?",
      a: "Unimos testes de intrusão ativos (pentesting) e testes unitários rigorosos desde o dia zero. Seus sistemas rodam isolados, com criptografia ponta a ponta e certificados de alta segurança."
    },
    {
      q: "O que é e como funciona a automação com n8n?",
      a: "O n8n permite interconectar centenas de aplicativos, bancos de dados e inteligências artificiais. Criamos fluxos autônomos que manipulam tarefas repetitivas automaticamente, sincronizando seu ERP, CRM e canais de vendas."
    },
    {
      q: "Quanto tempo leva para construir uma plataforma na Omnicorp?",
      a: "Projetos de alta fidelidade costumam variar entre 4 a 10 semanas, dependendo da escala das integrações industriais e auditoria de segurança requeridas."
    },
    {
      q: "Posso solicitar manutenção e melhorias após a entrega?",
      a: "Sim. Oferecemos pacotes continuados de Operação e Blindagem Inteligente, atualizando dependências, monitorando logs e evoluindo recursos constantemente."
    }
  ];

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-omega-bg text-omega-text text-left">
      {/* 1. Header Navigation Context Info */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,195,0,0.06),transparent_80%)]" />
          <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-omega-gold/5 rounded-full blur-[150px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-2 rounded-full border border-omega-gold/20 bg-omega-gold/5 text-omega-gold text-[9px] font-black tracking-[0.5em] uppercase mb-10"
          >
            Nossa História e Filosofia
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-display font-bold leading-none tracking-tighter mb-10"
          >
            Liderando o Futuro Digital <br />
            <span className="text-transparent bg-clip-text gold-luxury-gradient gold-text-glow italic font-light">
              com Excelência Absoluta.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-2xl text-omega-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed font-light tracking-tight"
          >
            A Omnicorp nasceu para unificar design visual deslumbrante, engenharia de segurança de elite e automações operacionais do mais alto nível de sofisticação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button 
              onClick={onStartProject}
              className="px-10 py-5 bg-omega-gold text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-omega-gold-hover transition-all duration-500 gold-glow hover:scale-105 active:scale-95 cursor-pointer"
            >
              Iniciar Projeto
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

      {/* 2. Bento Stats */}
      <section className="py-20 border-y border-omega-border/40 bg-omega-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="p-8 rounded-[2rem] bg-omega-card/40 border border-omega-border/50 text-center hover:border-omega-gold/20 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-omega-gold/5 flex items-center justify-center text-omega-gold mx-auto mb-4 group-hover:bg-omega-gold group-hover:text-black transition-all duration-500">
                  <stat.icon size={20} />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-1 group-hover:text-omega-gold transition-colors">{stat.value}</h3>
                <p className="text-[9px] font-black text-omega-text-secondary uppercase tracking-[0.3em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Philosophy & Vision/Mission Bento style */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left intro text */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em]">Nossa Filosofia</h2>
              <h3 className="text-4xl md:text-[5.5rem] font-display font-bold leading-none tracking-tighter">
                Orquestrando <br />
                <span className="text-omega-gold italic font-light">Sistemas de Elite.</span>
              </h3>
              <p className="text-lg text-omega-text-secondary leading-relaxed font-light tracking-tight">
                No ambiente corporativo contemporâneo, a estabilidade e a velocidade definem quem lidera as frentes de mercado. Não criamos meros cartões de visita digitais; desenvolvemos plataformas altamente protegidas e síncronas que operam invisivelmente e impulsionam lucros reais de forma autônoma.
              </p>
            </div>

            {/* Right side bento cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Mission Card */}
              <div className="p-10 bg-omega-card border border-omega-border rounded-[2.5rem] flex flex-col justify-between hover:border-omega-gold/20 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-omega-gold/5 flex items-center justify-center text-omega-gold mb-8">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-white mb-4">Nossa Missão</h4>
                  <p className="text-omega-text-secondary font-light tracking-tight leading-relaxed">
                    Blindar, automatizar e emoldurar digitalmente grandes marcas com design futurista de alto nível visual, promovendo escalabilidade, imunidade de dados e fluidez operacional irretocável.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="p-10 bg-omega-card border border-omega-border rounded-[2.5rem] flex flex-col justify-between hover:border-omega-gold/20 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-omega-gold/5 flex items-center justify-center text-omega-gold mb-8">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-white mb-4">Nossa Visão</h4>
                  <p className="text-omega-text-secondary font-light tracking-tight leading-relaxed">
                    Ser a referência definitiva na confluência de cibersegurança e automação web, reconhecida por arquitetar as plataformas corporativas de maior rendimento comercial do mundo.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Visual Studio & Active Operations - Lazy-loaded Elite Image Grid */}
      <section className="py-24 border-t border-omega-border/40 bg-omega-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] block mb-4">OPERAÇÕES DE ALTO NÍVEL</span>
              <h3 className="text-4xl md:text-6xl font-display font-medium leading-none tracking-tighter">Estúdios de <span className="text-omega-gold italic font-light font-sans text-transparent bg-clip-text gold-luxury-gradient">Performance Criativa</span></h3>
            </div>
            <p className="text-omega-text-secondary text-base md:text-lg font-light max-w-md leading-relaxed">
              Cada projeto é executado sob condições ótimas de foco cognitivo. Nossos escritórios centralizados operam sob metodologias ágeis e blindagem ativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Estúdio de Engenharia Lógica",
                desc: "Mapeamento sistemático, integração e automações assíncronas.",
                img: "https://picsum.photos/seed/cyber-studio/800/600"
              },
              {
                title: "Central de Ciberdefesa",
                desc: "Auditoria ativa, testes de intrusão e varreduras de proteção.",
                img: "https://picsum.photos/seed/elite-dev/800/600"
              },
              {
                title: "Laboratório de Ergonomia Visual",
                desc: "Estética sofisticada, emolduração e fluidez sensorial do usuário.",
                img: "https://picsum.photos/seed/defense-security/800/600"
              }
            ].map((studio, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 45 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                 className="group space-y-6 bg-omega-card border border-omega-border rounded-[2.5rem] p-6 hover:border-omega-gold/25 transition-all duration-500 overflow-hidden"
               >
                 <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-omega-border/30">
                   <LazyImage 
                     src={studio.img} 
                     alt={studio.title}
                     className="group-hover:scale-105 transition-transform duration-[1.2s] ease-out opacity-90 group-hover:opacity-100"
                   />
                 </div>
                 <div className="px-2 pb-2">
                   <h4 className="text-lg font-bold text-white mb-2 group-hover:text-omega-gold transition-colors">{studio.title}</h4>
                   <p className="text-sm font-light text-omega-text-secondary leading-relaxed">{studio.desc}</p>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos - Team Showcase */}
      <section className="py-32 bg-[#090909] border-t border-omega-border/40 relative">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-omega-gold/5 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <span className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] block">QUEM SOMOS</span>
            <h3 className="text-4xl md:text-7xl font-display font-medium leading-none tracking-tighter">
              O que faz a Omnicorp ser a <span className="text-transparent bg-clip-text gold-luxury-gradient gold-text-glow font-black italic">Omnicorp?</span>
            </h3>
            <p className="text-omega-text-secondary text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              Soberania técnica, engenhosidade de vanguarda e sensibilidade visual implacável. Conheça a comissão executiva que lidera a redefinição de soluções corporativas de prestígio internacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                name: "Ruan Guedes",
                role: "Chief Executive Officer (CEO)",
                bio: "Estrategista de negócios e visionário por trás da nossa governança corporativa. Ruan lidera a Omnicorp rumo à expansão sustentável, unindo design de alto prestígio e eficiência tecnológica máxima para posicionar nossos clientes no topo absoluto do mercado.",
                image: "https://picsum.photos/seed/ruan_omnicorp/600/800",
                socials: [
                  { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
                  { icon: Mail, url: "mailto:rguedesruan@gmail.com", label: "Email" }
                ]
              },
              {
                name: "Gustavo Ribeiro",
                role: "Chief Information Officer (CIO)",
                bio: "Mente lógica e guardião perimetral encarregado de nossas redes computacionais e blindagem ativa. Gustavo orquestra ecossistemas de cibersegurança impenetráveis, governança de dados robusta e servidores baseados em latência zero.",
                image: "https://picsum.photos/seed/gustavo_omnicorp/600/800",
                socials: [
                  { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Github, url: "https://github.com", label: "GitHub" },
                  { icon: Mail, url: "mailto:contact@omnicorp.dev", label: "Email" }
                ]
              },
              {
                name: "Felipe Mostaço",
                role: "Chief Operating Officer (COO)",
                bio: "Líder implacável focado em metodologias ágeis e operacionalidade impecável. Felipe supervisiona nossos laboratórios de sistemas autônomos de dados, garantindo precisão cronológica absoluta e orquestração assíncrona integrada.",
                image: "https://picsum.photos/seed/felipe_omnicorp/600/800",
                socials: [
                  { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Github, url: "https://github.com", label: "GitHub" },
                  { icon: Mail, url: "mailto:contact@omnicorp.dev", label: "Email" }
                ]
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                className="group relative flex flex-col bg-omega-card border border-omega-border rounded-[3.5rem] p-8 hover:border-omega-gold/30 transition-all duration-700"
              >
                {/* Visual Avatar - Portrait 3:4 aspect-ratio */}
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] mb-8 border border-omega-border/40 bg-omega-bg select-none pointer-events-none">
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-omega-gold/5 mix-blend-overlay" />
                  <LazyImage 
                    src={member.image} 
                    alt={member.name}
                    className="group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-85 group-hover:opacity-100"
                    wrapperClassName="w-full h-full"
                  />
                </div>

                {/* Details context block */}
                <div className="flex-grow space-y-4 text-left">
                  <div>
                    <span className="text-[9px] font-black tracking-widest text-omega-gold uppercase bg-omega-gold/5 border border-omega-gold/10 px-3 py-1.5 rounded-full inline-block mb-3">
                      {member.role}
                    </span>
                    <h4 className="text-3xl font-display font-medium text-white group-hover:text-omega-gold transition-colors duration-500">
                      {member.name}
                    </h4>
                  </div>
                  
                  <p className="text-sm font-light text-omega-text-secondary leading-relaxed tracking-tight min-h-[96px]">
                    {member.bio}
                  </p>
                </div>

                {/* Social icons row */}
                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-omega-border/40">
                  {member.socials.map((soc, sIdx) => (
                    <a
                      key={sIdx}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        // Prevent default if it's generic mailto/web links in preview, simulate beauty
                        if (soc.url.startsWith('https://')) {
                          e.preventDefault();
                          alert(`Abrindo canal oficial de ${member.name} em ${soc.label}`);
                        }
                      }}
                      className="w-10 h-10 rounded-full border border-omega-border/60 bg-omega-bg flex items-center justify-center text-omega-text-secondary hover:text-white hover:border-omega-gold/40 hover:bg-omega-gold/5 transition-all duration-500 cursor-pointer"
                      title={soc.label}
                    >
                      <soc.icon size={16} />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Methodology / Values */}
      <section className="py-40 bg-omega-bg-secondary relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Nossa Metodologia</h2>
            <h3 className="text-4xl md:text-7xl font-display font-bold leading-none tracking-tighter">Como <span className="text-omega-gold italic font-light">Redesenhamos</span> o Jogo</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {methodology.map((col, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                key={index}
                className="group p-10 bg-omega-card border border-omega-border rounded-[3rem] hover:border-omega-gold/40 transition-all duration-500 flex flex-col items-start hover:bg-omega-card/60"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center text-omega-gold mb-8 group-hover:bg-omega-gold group-hover:text-black transition-all duration-500">
                  <col.icon size={26} />
                </div>
                <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-omega-gold transition-colors duration-500">{col.title}</h4>
                <p className="text-omega-text-secondary leading-relaxed font-light text-base">{col.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Roadmap */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 sticky top-40">
              <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Fluxo de Entrega</h2>
              <h3 className="text-4xl md:text-7xl font-display font-bold leading-none tracking-tighter mb-8">Etapas de <span className="text-omega-gold italic font-light">Construção.</span></h3>
              <p className="text-omega-text-secondary text-lg font-light leading-relaxed tracking-tight">
                Processos padronizados e cronogramas claros. Você acompanha cada etapa do planejamento à entrega final do site, através de relatórios transparentes e reuniões ágeis.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pl-16 border-l border-omega-border/60 pb-16 last:pb-0 group">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-omega-gold/30 flex items-center justify-center text-xs font-black text-omega-gold group-hover:bg-omega-gold group-hover:text-black transition-all duration-500">
                    {index + 1}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-omega-gold/60 mb-2 block">{step.step}</span>
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-omega-gold transition-colors duration-500">{step.title}</h4>
                  <p className="text-omega-text-secondary font-light text-lg tracking-tight leading-relaxed max-w-xl">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Us / Core Values Proposition */}
      <section className="py-45 bg-[#0e0e0e] border-t border-omega-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-24">
            <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Vantagens Competitivas</h2>
            <h3 className="text-4xl md:text-7xl font-display font-bold leading-none tracking-tighter">Por Que Grandes Líderes <br />Escolhem a <span className="text-omega-gold italic font-light">Omnicorp?</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {valueProps.map((prop, i) => (
              <div key={i} className="space-y-6">
                <span className="text-omega-gold text-[10px] font-black uppercase tracking-[0.4em] block">
                  🛡️ 0{i+1} / CORPORATE
                </span>
                <h4 className="text-3xl font-display font-bold text-white tracking-tight">{prop.title}</h4>
                <p className="text-omega-text-secondary leading-relaxed font-light text-lg tracking-tight">
                  {prop.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dedicated FAQ Accordion */}
      <section className="py-40 bg-omega-bg-secondary relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8 mx-auto">SUPORTE & PERGUNTAS</h2>
          <h3 className="text-4xl md:text-7xl font-display font-bold mb-20 leading-none tracking-tighter">Perguntas <span className="text-omega-gold italic font-light">Frequentes</span></h3>

          <div className="space-y-6 text-left">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                  className="bg-omega-card border border-omega-border rounded-3xl overflow-hidden transition-all duration-500 hover:border-omega-gold/30"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full flex justify-between items-center p-8 text-left cursor-pointer"
                  >
                    <span className="text-xl md:text-2xl font-display font-bold text-white hover:text-omega-gold transition-colors">{faq.q}</span>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-omega-gold"
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 pt-2 text-omega-text-secondary font-light text-base leading-relaxed border-t border-omega-border/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Dedicated Contact CTA */}
      <section className="py-32 bg-omega-bg relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-omega-card border border-omega-border rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-omega-gold/5 rounded-full blur-[100px]" />
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Sua Empresa nas Mãos <br />Dos Maiores <span className="text-transparent bg-clip-text gold-luxury-gradient italic font-light">Automatizadores.</span>
            </h3>
            <p className="text-omega-text-secondary text-base md:text-xl font-light max-w-2xl mx-auto mb-12">
              Não atrase o seu amanhã operacional. Entre em contato hoje e execute no mais alto patamar de excelência.
            </p>
            <button
              onClick={onStartProject}
              className="px-12 py-5 bg-omega-gold text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-omega-gold-hover transition-all duration-500 gold-glow hover:scale-105 active:scale-95 cursor-pointer"
            >
              Iniciar Projeto Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
