import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, CheckCircle2, ArrowRight, Check, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const ProjectModal = ({ isOpen, onClose, onSuccess }: ProjectModalProps) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hasBusiness, setHasBusiness] = useState(true);
  const [companyName, setCompanyName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');

  // Real-time validations
  const isNameValid = fullName.trim().length >= 3;
  const isPhoneValid = phone.trim().replace(/\D/g, '').length >= 10 || phone.trim().length >= 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isCompanyValid = !hasBusiness || companyName.trim().length >= 2;

  const canSubmit = isNameValid && isPhoneValid && isEmailValid && isCompanyValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    // Simulate API request and call onSuccess
    setTimeout(() => {
      onSuccess();
      // Reset form
      setFullName('');
      setPhone('');
      setEmail('');
      setCompanyName('');
      setBusinessDescription('');
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#111111] border border-omega-border rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh] z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-omega-text-secondary hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/5"
            >
              <X size={24} />
            </button>

            {/* Title / Header */}
            <div className="mb-10 text-left">
              <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-none">
                Iniciar seu <span className="text-transparent bg-clip-text gold-luxury-gradient gold-text-glow font-black italic">Projeto</span>
              </h2>
              <p className="text-omega-text-secondary mt-3 font-light text-base">
                Conte-nos brevemente sobre sua visão.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              {/* Full Name */}
              <div className="space-y-3">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-omega-gold block">
                    Nome Completo
                  </label>
                  {fullName.length > 0 && (
                    <span className={`text-[10px] font-medium flex items-center gap-1 ${isNameValid ? 'text-emerald-500' : 'text-omega-gold/50'}`}>
                      {isNameValid ? (
                        <>Excelente <Check size={10} /></>
                      ) : (
                        `Mínimo 3 caract.`
                      )}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    required
                    type="text"
                    placeholder="Como devemos te chamar?"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full bg-[#171717] border rounded-2xl px-6 py-5 text-omega-text placeholder:text-omega-text-secondary/40 focus:ring-1 outline-none transition-all duration-300 font-light text-base ${
                      fullName.length === 0 
                        ? 'border-omega-border focus:border-omega-gold focus:ring-omega-gold'
                        : isNameValid 
                          ? 'border-emerald-500/40 focus:border-emerald-500 focus:ring-emerald-500' 
                          : 'border-omega-gold/30 focus:border-omega-gold focus:ring-omega-gold'
                    }`}
                  />
                </div>
              </div>

              {/* Email & Phone side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-omega-gold block">
                      WhatsApp / Telefone
                    </label>
                    {phone.length > 0 && (
                      <span className={`text-[10px] font-medium flex items-center gap-1 ${isPhoneValid ? 'text-emerald-500' : 'text-omega-gold/50'}`}>
                        {isPhoneValid ? <>Válido <Check size={10} /></> : <>Ex: (11) 99999-9999</>}
                      </span>
                    )}
                  </div>
                  <input
                    required
                    type="text"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full bg-[#171717] border rounded-2xl px-6 py-5 text-omega-text placeholder:text-omega-text-secondary/40 focus:ring-1 outline-none transition-all duration-300 font-light text-base ${
                      phone.length === 0 
                        ? 'border-omega-border focus:border-omega-gold focus:ring-omega-gold'
                        : isPhoneValid 
                          ? 'border-emerald-500/40 focus:border-emerald-500 focus:ring-emerald-500' 
                          : 'border-omega-gold/30 focus:border-omega-gold focus:ring-omega-gold'
                    }`}
                  />
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-omega-gold block">
                      Email
                    </label>
                    {email.length > 0 && (
                      <span className={`text-[10px] font-medium flex items-center gap-1 ${isEmailValid ? 'text-emerald-500' : 'text-red-400'}`}>
                        {isEmailValid ? <>E-mail OK <Check size={10} /></> : <>E-mail inválido <AlertCircle size={10} /></>}
                      </span>
                    )}
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-[#171717] border rounded-2xl px-6 py-5 text-omega-text placeholder:text-omega-text-secondary/40 focus:ring-1 outline-none transition-all duration-300 font-light text-base ${
                      email.length === 0 
                        ? 'border-omega-border focus:border-omega-gold focus:ring-omega-gold'
                        : isEmailValid 
                          ? 'border-emerald-500/40 focus:border-emerald-500 focus:ring-emerald-500' 
                          : 'border-red-400/40 focus:border-red-400 focus:ring-red-400'
                    }`}
                  />
                </div>
              </div>

              {/* Toggle Has Business */}
              <div className="flex items-center justify-between py-2 border-b border-omega-border/40">
                <div className="flex items-center gap-3">
                  <span className="text-white font-medium text-base">Possui um negócio?</span>
                  <div className="group relative">
                    <Info size={16} className="text-omega-text-secondary cursor-help hover:text-omega-gold transition-colors" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-omega-card border border-omega-border rounded-xl text-xs text-omega-text-secondary opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-2xl">
                      Ative se você já tem uma empresa estruturada para o projeto.
                    </div>
                  </div>
                </div>

                {/* Custom Toggle Switch */}
                <button
                  type="button"
                  onClick={() => setHasBusiness(!hasBusiness)}
                  className={`w-14 h-8 rounded-full transition-colors duration-300 relative focus:outline-none flex items-center ${
                    hasBusiness ? 'bg-omega-gold' : 'bg-omega-border'
                  }`}
                >
                  <motion.div
                    layout
                    className="w-6 h-6 rounded-full bg-black shadow-lg absolute"
                    style={{ left: hasBusiness ? '1.8rem' : '0.25rem' }}
                  />
                </button>
              </div>

              {/* Conditional Company Name Input */}
              <AnimatePresence initial={false}>
                {hasBusiness && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: '1.25rem' }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 pb-1">
                      <div className="flex justify-between items-center ml-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-omega-gold block">
                          Nome da Empresa
                        </label>
                        {companyName.length > 0 && (
                          <span className={`text-[10px] font-medium flex items-center gap-1 ${isCompanyValid ? 'text-emerald-500' : 'text-omega-gold/50'}`}>
                            {isCompanyValid ? <>OK <Check size={10} /></> : <>Inválido</>}
                          </span>
                        )}
                      </div>
                      <input
                        required={hasBusiness}
                        type="text"
                        placeholder="Qual o nome do seu negócio?"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className={`w-full bg-[#171717] border rounded-2xl px-6 py-5 text-omega-text placeholder:text-omega-text-secondary/40 focus:ring-1 outline-none transition-all duration-300 font-light text-base ${
                          companyName.length === 0 
                            ? 'border-omega-border focus:border-omega-gold focus:ring-omega-gold'
                            : isCompanyValid 
                              ? 'border-emerald-500/40 focus:border-emerald-500 focus:ring-emerald-500' 
                              : 'border-omega-gold/30 focus:border-omega-gold focus:ring-omega-gold'
                        }`}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Optional Description Textarea */}
              <div className="space-y-3">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-omega-gold block">
                    Diga-nos brevemente o seu objetivo
                  </label>
                  <span className="text-omega-text-secondary font-light text-[10px]">
                    {businessDescription.length} caracteres
                  </span>
                </div>
                <textarea
                  rows={4}
                  placeholder="Seu objetivo com o novo site, integração, automação, etc..."
                  value={businessDescription}
                  onChange={(e) => setBusinessDescription(e.target.value)}
                  className="w-full bg-[#171717] border border-omega-border rounded-2xl px-6 py-5 text-omega-text placeholder:text-omega-text-secondary/40 focus:border-omega-gold focus:ring-1 focus:ring-omega-gold outline-none transition-all duration-300 font-light text-base resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!canSubmit}
                className={`w-full py-6 font-black uppercase tracking-[0.3em] text-xs rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 hover:scale-[1.01] active:scale-95 cursor-pointer mt-10 ${
                  canSubmit 
                    ? 'bg-omega-gold text-black gold-glow hover:bg-omega-gold-hover' 
                    : 'bg-omega-border text-omega-text-secondary opacity-50 cursor-not-allowed'
                }`}
              >
                ENVIAR SOLICITAÇÃO <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />

          {/* Success Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg bg-[#111111] border border-omega-gold/20 rounded-[3.5rem] p-12 py-16 text-center shadow-3xl z-10"
          >
            {/* Elegant glowing icon */}
            <div className="w-24 h-24 bg-omega-gold/10 border border-omega-gold/30 rounded-full flex items-center justify-center text-omega-gold mx-auto mb-10 gold-glow animate-bounce">
              <CheckCircle2 size={48} className="text-omega-gold" />
            </div>

            <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight leading-none">
              Solicitação <span className="text-transparent bg-clip-text gold-luxury-gradient italic font-light">Enviada!</span>
            </h3>

            <p className="text-omega-text-secondary text-base font-light leading-relaxed max-w-md mx-auto mb-12">
              Os desenvolvedores estruturais da Omnicorp receberam seu sinal. Analisaremos seu perfil e entraremos em contato nas próximas 24 horas.
            </p>

            <button
              onClick={onClose}
              className="w-full py-5 bg-omega-gold text-black font-black uppercase tracking-[0.3em] text-xs rounded-2xl hover:bg-omega-gold-hover transition-all duration-500 gold-glow flex items-center justify-center gap-3 cursor-pointer"
            >
              Voltar para o Início <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
