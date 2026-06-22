/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ProjectModal, SuccessModal } from './components/ProjectModal';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { PortfolioPage } from './components/PortfolioPage';
import { ProcessPage } from './components/ProcessPage';
import { LazyImage } from './components/LazyImage';
import { PageTransitionLoader } from './components/PageTransitionLoader';
import { 
  ArrowRight, 
  Globe, 
  Zap, 
  Layout, 
  ShoppingBag, 
  Layers, 
  Monitor, 
  Cpu, 
  CheckCircle2, 
  Menu, 
  X,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Palette,
  Code2,
  Sparkles,
  BrainCircuit,
  Plus,
  Minus,
  Trophy,
  Users,
  Briefcase,
  Clock,
  Sun,
  Moon,
  Shield,
  Workflow
} from 'lucide-react';

// --- Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="custom-cursor hidden lg:block"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isPointer ? 3 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

const Marquee = ({ items }: { items: string[] }) => (
  <div className="relative w-full overflow-hidden bg-omega-bg-secondary py-10 border-y border-omega-border">
    <div className="marquee-content whitespace-nowrap">
      {[...items, ...items, ...items].map((item, i) => (
        <span key={i} className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-omega-text/20 mx-12 hover:text-omega-gold transition-colors duration-500">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs = [
    { q: "Quanto tempo leva para criar um site?", a: "O prazo varia conforme a complexidade, mas projetos corporativos levam em média de 4 a 8 semanas para atingir a perfeição absoluta." },
    { q: "Vocês fazem manutenção após o lançamento?", a: "Sim, oferecemos suporte contínuo e planos de evolução para garantir que sua plataforma permaneça no topo do desempenho global." },
    { q: "O design é exclusivo?", a: "Absolutamente. Não usamos templates. Cada pixel é projetado do zero para refletir a identidade única e o luxo da sua marca." },
    { q: "Como funciona o processo de pagamento?", a: "Trabalhamos com etapas claras de entrega. Geralmente dividimos em entrada, aprovação do design e entrega final." },
  ];

  return (
    <section className="py-40 bg-omega-bg relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Dúvidas</h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Perguntas <span className="text-omega-gold italic font-light">Frequentes</span></h3>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
              className="border border-omega-border rounded-3xl overflow-hidden bg-omega-card/30 backdrop-blur-xl"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-10 py-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-display font-bold tracking-tight">{faq.q}</span>
                {activeIndex === i ? <Minus size={20} className="text-omega-gold" /> : <Plus size={20} className="text-omega-gold" />}
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-8 text-omega-text-secondary font-light leading-relaxed text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Logo = ({ className = "", onClick }: { className?: string, onClick?: () => void }) => (
  <div onClick={onClick} className={`flex items-center gap-3 group cursor-pointer ${className}`}>
    <span className="text-xl md:text-2xl font-display font-black tracking-[0.25em] text-omega-text bg-clip-text transition-all duration-500 hover:opacity-90">
      OMNI<span className="text-omega-gold">CORP</span>
    </span>
  </div>
);

interface NavbarProps {
  onStartProject: () => void;
  currentPage: 'home' | 'about' | 'services' | 'portfolio' | 'process';
  setCurrentPage: (page: 'home' | 'about' | 'services' | 'portfolio' | 'process') => void;
}

const Navbar = ({ onStartProject, currentPage, setCurrentPage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#inicio', action: 'home' },
    { name: 'Sobre', href: '#sobre', action: 'about' },
    { name: 'Serviços', href: '#servicos', action: 'services' },
    { name: 'Portfólio', href: '#portfolio', action: 'portfolio' },
    { name: 'Processo', href: '#processo', action: 'process' }
  ];

  const handleNavClick = (item: { name: string, href: string, action: string }) => {
    setIsMobileMenuOpen(false);
    if (item.action === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.action === 'services') {
      setCurrentPage('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.action === 'portfolio') {
      setCurrentPage('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.action === 'process') {
      setCurrentPage('process');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        if (item.href === '#inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-omega-bg/95 backdrop-blur-2xl border-b border-omega-border py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => {
            const isActive = 
              (item.action === 'about' && currentPage === 'about') || 
              (item.action === 'services' && currentPage === 'services') ||
              (item.action === 'portfolio' && currentPage === 'portfolio') ||
              (item.action === 'process' && currentPage === 'process') ||
              (item.action === 'home' && currentPage === 'home' && item.name !== 'Sobre' && item.name !== 'Serviços' && item.name !== 'Portfólio' && item.name !== 'Processo');
            return (
              <button 
                key={item.name} 
                onClick={() => handleNavClick(item)} 
                className={`text-[10px] font-black uppercase tracking-[0.3em] cursor-pointer transition-all duration-500 relative group ${isActive ? 'text-omega-gold' : 'text-omega-text-secondary hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 h-px bg-omega-gold transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            );
          })}
          
          <button 
            onClick={onStartProject}
            className="px-8 py-3 bg-omega-gold text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-omega-gold-hover transition-all duration-500 gold-glow hover:scale-105 active:scale-95 cursor-pointer"
          >
            Iniciar Projeto
          </button>
        </div>

        {/* Mobile Toggle & Mobile Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={onStartProject}
            className="px-5 py-2.5 bg-omega-gold text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-omega-gold-hover transition-all duration-300 gold-glow"
          >
            Começar
          </button>
          <button className="text-omega-text p-2 hover:text-omega-gold transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-omega-bg/98 backdrop-blur-3xl z-50 lg:hidden flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <Logo onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-omega-text p-2 rounded-full hover:bg-white/5">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-left">
              {navItems.map((item, i) => (
                <motion.button 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name} 
                  onClick={() => handleNavClick(item)} 
                  className={`text-4xl font-display font-medium text-left cursor-pointer ${
                    (item.action === 'about' && currentPage === 'about') || 
                    (item.action === 'services' && currentPage === 'services') ||
                    (item.action === 'portfolio' && currentPage === 'portfolio') ||
                    (item.action === 'process' && currentPage === 'process') ||
                    (item.action === 'home' && currentPage === 'home' && item.name !== 'Sobre' && item.name !== 'Serviços' && item.name !== 'Portfólio' && item.name !== 'Processo')
                      ? 'text-omega-gold' 
                      : 'text-omega-text hover:text-omega-gold'
                  } transition-colors`}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => { setIsMobileMenuOpen(false); onStartProject(); }}
                className="w-full py-5 bg-omega-gold text-black font-black uppercase tracking-[0.3em] rounded-2xl mt-8 cursor-pointer text-xs gold-glow"
              >
                Iniciar Projeto
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onStartProject }: { onStartProject: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handlePortfolioClick = () => {
    const portfolioEl = document.querySelector('#portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,195,0,0.08),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-omega-gold/5 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-omega-gold/3 rounded-full blur-[180px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-omega-bg/20 to-omega-bg" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-6 py-2 rounded-full border border-omega-gold/20 bg-omega-gold/5 text-omega-gold text-[9px] font-black tracking-[0.5em] uppercase mb-10"
          >
            O Estágio Final da Criação Digital
          </motion.span>
          <h1 className="text-6xl md:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter mb-12">
            Além de Sites. <br />
            <span className="text-transparent gold-luxury-gradient gold-text-glow italic font-light">
              Experiências Surreais.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-omega-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed font-light tracking-tight">
            A Omnicorp projeta plataformas poderosas e jornadas digitais imersivas que elevam marcas através da maestria, excelência e design inovador.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button 
              onClick={onStartProject}
              className="group px-12 py-6 bg-omega-gold text-black font-black uppercase tracking-[0.2em] text-xs rounded-full flex items-center gap-4 hover:bg-omega-gold-hover transition-all duration-500 gold-glow hover:scale-105 active:scale-95 cursor-pointer"
            >
              Iniciar Projeto
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <button 
              onClick={handlePortfolioClick}
              className="px-12 py-6 border border-omega-border text-omega-text font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white/5 transition-all duration-500 hover:border-omega-gold/40 cursor-pointer"
            >
              Ver Portfólio
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <span className="text-[8px] uppercase tracking-[0.6em] text-omega-text-secondary font-black">Explorar</span>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-20 bg-gradient-to-b from-omega-gold via-omega-gold/50 to-transparent" 
        />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Bento Item */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-12 bg-omega-card/30 border border-omega-border rounded-[3rem] backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-omega-gold/5 blur-[100px] group-hover:bg-omega-gold/10 transition-colors duration-1000" />
            <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Nosso Legado</h2>
            <h3 className="text-5xl md:text-8xl font-display font-bold mb-10 leading-[0.9] tracking-tighter">
              Não Apenas Criamos. <br />
              <span className="text-omega-gold italic font-light">Nós Dominamos.</span>
            </h3>
            <p className="text-xl text-omega-text-secondary leading-relaxed font-light tracking-tight max-w-2xl">
              A Omnicorp nasceu de uma visão para transcender o comum. Acreditamos que cada ponto de contato digital é uma oportunidade para criar uma obra-prima. Nossa filosofia está enraizada no nome Omnicorp — representando a unificação de design, segurança e automação inteligente de processos no mais alto nível de complexidade e excelência absoluta.
            </p>
          </motion.div>

          {/* Image Bento Item */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 rounded-[3rem] overflow-hidden border border-omega-border relative group shadow-2xl min-h-[400px]"
          >
            <LazyImage 
              src="https://picsum.photos/seed/studio-premium/1200/1500" 
              alt="Omnicorp Studio" 
              className="grayscale group-hover:grayscale-0"
              wrapperClassName="w-full h-full min-h-[400px]"
            />
            <div className="absolute inset-0 bg-omega-gold/5 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
          </motion.div>

          {/* Philosophy Bento Item */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 p-12 bg-omega-card border border-omega-border rounded-[3rem] hover:border-omega-gold/20 transition-all duration-700 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-omega-gold/5 flex items-center justify-center text-omega-gold mb-8 group-hover:bg-omega-gold group-hover:text-black transition-all duration-500">
              <Sparkles size={24} />
            </div>
            <h4 className="text-2xl font-display font-bold text-omega-gold mb-6 tracking-tight">A Filosofia</h4>
            <p className="text-omega-text-secondary text-lg leading-relaxed font-light">Criando experiências digitais que conectam marcas e pessoas em um nível visceral e emocional.</p>
          </motion.div>

          {/* Team Bento Item */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 p-12 bg-omega-gold text-black rounded-[3rem] gold-glow relative overflow-hidden group"
          >
            <div className="absolute -bottom-10 -right-10 text-[15rem] font-display font-bold text-black/5 select-none">O</div>
            <h4 className="text-2xl font-display font-bold mb-6 tracking-tight">O Time</h4>
            <p className="text-black/80 text-lg leading-relaxed font-bold relative z-10">Um coletivo de desenvolvedores cibernéticos, automatizadores de processos, designers de elite e estrategistas focados em resultados extraordinários.</p>
          </motion.div>

          {/* Approach Bento Item */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 p-12 bg-omega-card border border-omega-border rounded-[3rem] hover:border-omega-gold/20 transition-all duration-700 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-omega-gold/5 flex items-center justify-center text-omega-gold mb-8 group-hover:bg-omega-gold group-hover:text-black transition-all duration-500">
              <BrainCircuit size={24} />
            </div>
            <h4 className="text-2xl font-display font-bold text-omega-gold mb-6 tracking-tight">A Abordagem</h4>
            <p className="text-omega-text-secondary text-lg leading-relaxed font-light">Fundindo segurança cibernética, automação avançada e psicologia de produto para gerar eficiência incomparável.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon: Icon, index }: { title: string, description: string, icon: any, index: number, [key: string]: any }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group p-12 bg-omega-card border border-omega-border rounded-[3rem] hover:border-omega-gold/40 transition-all duration-700 relative overflow-hidden flex flex-col items-start hover:bg-omega-card/60"
    >
      <div className="absolute -bottom-12 -right-12 p-4 opacity-[0.01] group-hover:opacity-[0.04] transition-opacity duration-1000 group-hover:scale-150 group-hover:-rotate-12 transition-transform">
        <Icon size={240} />
      </div>
      
      <motion.div 
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 3, 0, -3, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.4
        }}
        className="w-20 h-20 rounded-3xl bg-omega-gold/5 flex items-center justify-center text-omega-gold mb-10 group-hover:bg-omega-gold group-hover:text-black transition-all duration-700 gold-glow"
      >
        <Icon size={36} />
      </motion.div>
      
      <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-omega-gold transition-colors duration-700 tracking-tight">{title}</h3>
      <p className="text-omega-text-secondary leading-relaxed font-light text-lg group-hover:text-omega-text transition-colors duration-700 tracking-tight">{description}</p>
      
      <div className="mt-12 pt-10 border-t border-omega-border w-full opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
        <button className="text-omega-gold text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3 group/btn">
          Explorar Maestria 
          <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    { title: "Sites Corporativos", description: "Presença digital de alto nível projetada para representar sua marca com autoridade, precisão e estética premium.", icon: Globe },
    { title: "Landing Pages", description: "Páginas de conversão estratégica que transformam visitantes em clientes através de narrativas imersivas.", icon: Zap },
    { title: "E-commerce", description: "Lojas online de luxo projetadas para crescimento, escalabilidade e experiências de compra fluidas.", icon: ShoppingBag },
    { title: "Plataformas SaaS", description: "Sistemas escaláveis personalizados construídos com tecnologia de ponta para alta performance e retenção.", icon: Layers },
    { title: "Pentest", description: "Auditoria de segurança cibernética e testes de intrusão rigorosos para identificar riscos e blindar sistemas de alta complexidade contra ameaças avançadas.", icon: Shield },
    { title: "Automação de Processos (n8n)", description: "Integração inteligente de sistemas e fluxos de trabalho avançados n8n para otimizar operações, reduzir custos e acelerar tarefas repetitivas.", icon: Workflow },
    { title: "Sites Institucionais", description: "Identidade digital profissional para empresas que buscam liderar seus respectivos setores com excelência.", icon: Monitor },
    { title: "Experiências Digitais", description: "Interações web únicas e sensoriais que criam memórias inesquecíveis para sua audiência global.", icon: Cpu },
  ];

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  return (
    <section id="servicos" className="py-40 bg-omega-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Expertise</h2>
          <h3 className="text-5xl md:text-[7rem] font-display font-bold leading-none tracking-tighter">O Que <span className="text-omega-gold italic font-light">Criamos</span></h3>
        </div>
        
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyOmnicorp = ({ onReadMore }: { onReadMore: () => void }) => {
  const points = [
    "Experiências de design únicas e surreais",
    "Identidade visual de alto padrão",
    "Arquitetura de performance extrema",
    "Design focado em conversão e luxo",
    "Plataformas escaláveis e seguras",
    "Experiências centradas no usuário final"
  ];

  return (
    <section className="py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Filosofia</h2>
          <h3 className="text-5xl md:text-8xl font-display font-bold mb-12 leading-[0.9] tracking-tighter">Por que a <br /><span className="text-omega-gold italic font-light">Omnicorp?</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-5 group">
                <div className="mt-1 text-omega-gold group-hover:scale-125 transition-transform duration-500">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-omega-text-secondary font-light text-lg tracking-tight group-hover:text-white transition-colors duration-500">{point}</p>
              </div>
            ))}
          </div>

          <button
            onClick={onReadMore}
            className="mt-12 group px-10 py-5 border border-omega-border hover:border-omega-gold/40 text-omega-text hover:text-white rounded-full transition-all duration-500 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Saber Mais <ArrowRight size={16} className="text-omega-gold group-hover:translate-x-1.5 transition-transform duration-500" />
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-omega-gold/5 rounded-full blur-[150px]" />
          <div className="text-[25rem] md:text-[40rem] font-display font-bold text-omega-gold/[0.03] select-none drop-shadow-2xl">O</div>
          <div className="absolute inset-0 flex items-center justify-center">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="w-[80%] h-[80%] border border-omega-gold/10 rounded-full border-dashed"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
               className="absolute w-[60%] h-[60%] border border-omega-gold/5 rounded-full border-dashed"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, title, description, index }: { step: string, title: string, description: string, index: number, [key: string]: any }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="relative pl-20 border-l border-omega-border pb-20 last:pb-0 group"
  >
    <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-omega-card border border-omega-gold/30 flex items-center justify-center text-sm font-black text-omega-gold group-hover:bg-omega-gold group-hover:text-black transition-all duration-500 gold-glow">
      {index + 1}
    </div>
    <h4 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.4em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">{step}</h4>
    <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tighter group-hover:text-omega-gold transition-colors duration-500">{title}</h3>
    <p className="text-omega-text-secondary text-lg max-w-xl font-light leading-relaxed tracking-tight group-hover:text-omega-text transition-colors duration-500">{description}</p>
  </motion.div>
);

const Process = () => {
  const steps = [
    { step: "Descoberta", title: "Imersão Profunda", description: "Mergulhamos no DNA da sua marca, objetivos e público para criar uma base estratégica para a excelência absoluta." },
    { step: "Design", title: "Visuais Surreais", description: "Nossos designers criam interfaces imersivas e únicas que fundem estética de luxo com funcionalidade de alto nível." },
    { step: "Construção", title: "Engenharia de Elite", description: "Desenvolvemos plataformas escaláveis e de alta performance utilizando as tecnologias mais avançadas do mercado global." },
    { step: "Lançamento", title: "Impacto Global", description: "Garantimos uma implementação impecável e suporte contínuo para manter sua experiência digital no ápice do desempenho." },
  ];

  return (
    <section id="processo" className="py-40 bg-omega-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,195,0,0.03),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Metodologia</h2>
            <h3 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-12">Nosso Processo de <span className="text-omega-gold italic font-light">Criação</span></h3>
            <p className="text-xl text-omega-text-secondary font-light leading-relaxed tracking-tight max-w-md">
              Uma jornada meticulosa do conceito à realidade, onde cada detalhe é refinado para atingir a perfeição digital.
            </p>
          </div>
          <div className="pt-12">
            {steps.map((step, i) => (
              <ProcessStep key={step.step} {...step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ onViewAll }: { onViewAll: () => void }) => {
  const projects = [
    { title: "Lumina Digital", category: "Plataforma SaaS", image: "https://picsum.photos/seed/tech1/1200/900" },
    { title: "Aetheria Luxury", category: "E-commerce de Luxo", image: "https://picsum.photos/seed/luxury/1200/900" },
    { title: "Aegis Secure", category: "Pentest e Segurança Cibernética", image: "https://picsum.photos/seed/security/1200/900" },
    { title: "Synapse Automations", category: "Automação de Processos", image: "https://picsum.photos/seed/automation/1200/900" },
  ];

  return (
    <section id="portfolio" className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Showcase</h2>
            <h3 className="text-5xl md:text-[8rem] font-display font-bold leading-[0.85] tracking-tighter">Trabalhos <span className="text-omega-gold italic font-light">Selecionados</span></h3>
          </div>
          <button 
            onClick={onViewAll}
            className="group text-omega-gold font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-4 hover:gap-6 transition-all duration-700 border-b border-omega-gold/20 pb-2 cursor-pointer"
          >
            Ver Todos os Projetos <ArrowRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              onClick={onViewAll}
              className="group relative overflow-hidden rounded-[4rem] aspect-[4/3] cursor-pointer border border-omega-border bg-omega-card"
            >
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-omega-gold/10 mix-blend-overlay" />
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-1000 shadow-[inset_0_0_150px_rgba(255,195,0,0.2)]" />
              
              <LazyImage 
                src={project.image} 
                alt={project.title} 
                className="group-hover:scale-110 transition-transform duration-[1.5s]"
              />
              
              <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/100 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="absolute bottom-0 left-0 p-16 z-40 transform group-hover:-translate-y-4 transition-transform duration-1000">
                <p className="text-omega-gold text-[9px] font-black uppercase tracking-[0.5em] mb-6">{project.category}</p>
                <h4 className="text-4xl md:text-6xl font-display font-bold text-white group-hover:text-omega-gold transition-colors duration-700 tracking-tighter">{project.title}</h4>
              </div>
              
              <div className="absolute top-16 right-16 w-20 h-20 rounded-full bg-omega-gold flex items-center justify-center text-black opacity-0 group-hover:opacity-100 -translate-y-12 group-hover:translate-y-0 transition-all duration-1000 z-40 gold-glow">
                <ArrowRight size={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="py-40 bg-omega-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-omega-gold/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-10">A Experiência</h2>
          <h3 className="text-4xl md:text-7xl font-display font-bold mb-12 leading-tight tracking-tighter">
            Onde o Design Encontra a <span className="text-omega-gold italic font-light">Psicologia</span> e a Tecnologia.
          </h3>
          <p className="text-xl text-omega-text-secondary font-light leading-relaxed tracking-tight mb-16">
            Não criamos apenas interfaces; projetamos jornadas emocionais. Cada pixel é posicionado com intenção, cada animação é coreografada para encantar, e cada linha de código é otimizada para a perfeição técnica.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Design Imersivo", icon: Palette },
              { label: "Tecnologia de Ponta", icon: Code2 },
              { label: "Storytelling", icon: Sparkles },
              { label: "Psicologia do Usuário", icon: BrainCircuit }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-omega-card border border-omega-border flex items-center justify-center text-omega-gold group-hover:bg-omega-gold group-hover:text-black transition-all duration-500 gold-glow">
                  <item.icon size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-omega-text-secondary group-hover:text-omega-gold transition-colors">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Ricardo Santos", role: "CEO, Lumina Digital", text: "A Omega transformou nossa visão em algo que nunca imaginamos ser possível. O design é simplesmente de outro mundo." },
    { name: "Ana Oliveira", role: "Diretora de Marketing, Aetheria", text: "Trabalhar com a Omega foi a melhor decisão estratégica que tomamos este ano. Nossa conversão aumentou em 300%." },
    { name: "Marcus Viana", role: "Fundador, Nexus Core", text: "Excelência técnica e estética impecável. Eles realmente entendem o que significa criar uma experiência de luxo." },
  ];

  return (
    <section className="py-40 bg-omega-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-black text-omega-gold uppercase tracking-[0.6em] mb-8">Depoimentos</h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">O Que Dizem Nossos <span className="text-omega-gold italic font-light">Parceiros</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-45px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: "easeOut" }}
              className="p-12 bg-omega-card/30 border border-omega-border rounded-[3rem] backdrop-blur-xl hover:border-omega-gold/20 transition-all duration-700"
            >
              <p className="text-xl text-omega-text-secondary font-light italic leading-relaxed mb-10">"{t.text}"</p>
              <div>
                <h4 className="text-lg font-display font-bold text-white tracking-tight">{t.name}</h4>
                <p className="text-omega-gold text-[9px] font-black uppercase tracking-[0.3em] mt-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-20 text-left">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form 
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit} 
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-omega-gold ml-2">Nome</label>
                <input 
                  required
                  type="text" 
                  placeholder="Seu Nome"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-omega-bg border border-omega-border rounded-2xl px-8 py-5 text-omega-text focus:border-omega-gold outline-none transition-all duration-500 font-light"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-omega-gold ml-2">Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="seu@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-omega-bg border border-omega-border rounded-2xl px-8 py-5 text-omega-text focus:border-omega-gold outline-none transition-all duration-500 font-light"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-omega-gold ml-2">Mensagem</label>
              <textarea 
                required
                rows={5}
                placeholder="Conte-nos sobre seu projeto extraordinário..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-omega-bg border border-omega-border rounded-2xl px-8 py-5 text-omega-text focus:border-omega-gold outline-none transition-all duration-500 resize-none font-light"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-6 bg-omega-gold text-black font-black uppercase tracking-[0.3em] text-xs rounded-2xl hover:bg-omega-gold-hover transition-all duration-700 gold-glow flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95"
            >
              Enviar Solicitação <ArrowRight size={20} />
            </button>
          </motion.form>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-16 bg-omega-gold/5 border border-omega-gold/20 rounded-[3rem] text-center backdrop-blur-xl"
          >
            <div className="w-24 h-24 bg-omega-gold rounded-full flex items-center justify-center text-black mx-auto mb-8 gold-glow">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-4xl font-display font-bold text-white mb-6 tracking-tighter">Mensagem Recebida</h3>
            <p className="text-omega-text-secondary text-lg font-light leading-relaxed">Nossa equipe entrará em contato em até 24 horas para discutir seu projeto extraordinário.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTA = () => {
  return (
    <section id="contato" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-omega-card border border-omega-border rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden">
          <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-omega-gold/10 rounded-full blur-[150px]" />
          <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-omega-gold/5 rounded-full blur-[150px]" />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-[8rem] font-display font-bold mb-10 leading-[0.85] tracking-tighter">
              Vamos Criar Algo <br />
              <span className="text-transparent bg-clip-text gold-luxury-gradient gold-text-glow italic font-light">Extraordinário.</span>
            </h2>
            <p className="text-omega-text-secondary text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light tracking-tight">
              Pronto para elevar sua marca ao estágio final de excelência? Nossos mestres criadores estão prontos para dar vida à sua visão.
            </p>
            
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-omega-bg border-t border-omega-border pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <Logo className="mb-12" />
            <p className="text-omega-text-secondary mb-12 leading-relaxed font-light text-lg tracking-tight">
              A Omnicorp cria experiências digitais surreais que unificam design de alta performance, automação avançada e segurança de elite.
            </p>
            <div className="flex gap-8">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl border border-omega-border flex items-center justify-center text-omega-text-secondary hover:text-omega-gold hover:border-omega-gold transition-all duration-700 hover:scale-110 hover:bg-omega-gold/5">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-12 uppercase tracking-[0.4em] text-[10px]">Expertise</h4>
            <ul className="flex flex-col gap-8">
              {['Sites Corporativos', 'Landing Pages', 'E-commerce', 'Plataformas SaaS', 'Pentest', 'Automação (n8n)'].map((item) => (
                <li key={item}><a href="#" className="text-omega-text-secondary hover:text-omega-gold transition-all duration-500 text-base font-light tracking-tight">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-12 uppercase tracking-[0.4em] text-[10px]">Estúdio</h4>
            <ul className="flex flex-col gap-8">
              {['Sobre Nós', 'Trabalhos Selecionados', 'Nosso Processo', 'Carreiras', 'Contato'].map((item) => (
                <li key={item}><a href="#" className="text-omega-text-secondary hover:text-omega-gold transition-all duration-500 text-base font-light tracking-tight">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-12 uppercase tracking-[0.4em] text-[10px]">Contato</h4>
            <ul className="flex flex-col gap-8">
              <li className="text-omega-text-secondary text-base font-light tracking-tight">hello@omnicorp.studio</li>
              <li className="text-omega-text-secondary text-base font-light tracking-tight">+55 (11) 99999-9999</li>
              <li className="text-omega-text-secondary text-base font-light tracking-tight">São Paulo, Brasil</li>
              <li className="mt-8">
                <div className="p-8 bg-omega-card border border-omega-border rounded-[2rem] gold-glow">
                  <p className="text-omega-gold text-[9px] font-black uppercase tracking-[0.4em] mb-3">Disponibilidade</p>
                  <p className="text-white text-sm font-bold tracking-tight">Aceitando 2 novos projetos para o Q2 de 2026.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-16 border-t border-omega-border flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-omega-text-secondary text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Omnicorp. Maestria em cada pixel.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-omega-text-secondary text-[10px] font-black uppercase tracking-[0.4em] hover:text-omega-gold transition-colors">Privacidade</a>
            <a href="#" className="text-omega-text-secondary text-[10px] font-black uppercase tracking-[0.4em] hover:text-omega-gold transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPageRaw] = useState<'home' | 'about' | 'services' | 'portfolio' | 'process'>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const setCurrentPage = (page: 'home' | 'about' | 'services' | 'portfolio' | 'process') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPageRaw(page);
      window.scrollTo({ top: 0 });
    }, 600);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  // Smooth Scroll implementation using CSS and Framer Motion
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative bg-omega-bg selection:bg-omega-gold selection:text-black min-h-screen flex flex-col">
      {/* Scroll Progress Bar */}
      {currentPage === 'home' && (
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-omega-gold origin-left z-[150] shadow-[0_0_8px_rgba(255,195,0,0.6)]"
          style={{ scaleX: scrollYProgress }}
        />
      )}
      
      <CustomCursor />
      <Navbar 
        onStartProject={() => setIsProjectModalOpen(true)} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      {/* Sophisticated Page Transition Loader Overlay */}
      <PageTransitionLoader isActive={isTransitioning} />
      
      <main className="relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Hero onStartProject={() => setIsProjectModalOpen(true)} />
              <Marquee items={["Design de Luxo", "Segurança Extrema", "E-commerce Premium", "Automação", "SaaS Escalável", "Pentesting de Elite", "Maestria Digital"]} />
              <About />
              <WhyOmnicorp onReadMore={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
              <Services />
              <Portfolio onViewAll={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
              <Experience />
              <Testimonials />
              <Process />
              <FAQ />
              <CTA />
            </motion.div>
          ) : currentPage === 'about' ? (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <AboutPage 
                onStartProject={() => setIsProjectModalOpen(true)} 
                onNavigateHome={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              />
            </motion.div>
          ) : currentPage === 'services' ? (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <ServicesPage 
                onStartProject={() => setIsProjectModalOpen(true)} 
                onNavigateHome={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              />
            </motion.div>
          ) : currentPage === 'portfolio' ? (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <PortfolioPage 
                onStartProject={() => setIsProjectModalOpen(true)} 
                onNavigateHome={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <ProcessPage 
                onStartProject={() => setIsProjectModalOpen(true)} 
                onNavigateHome={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      
      {/* Modals */}
      <ProjectModal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)} 
        onSuccess={() => {
          setIsProjectModalOpen(false);
          setIsSuccessModalOpen(true);
        }} 
      />
      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)} 
      />
      
      {/* Global Grain Overlay for Cinematic Feel */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
