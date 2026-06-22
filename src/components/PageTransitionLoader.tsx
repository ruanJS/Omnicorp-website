import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageTransitionLoaderProps {
  isActive: boolean;
}

export const PageTransitionLoader = ({ isActive }: PageTransitionLoaderProps) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#090909] text-white"
        >
          {/* Elegant background particles / subtle ambient radial glow */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-omega-gold/5 rounded-full blur-[120px] animate-[pulse_6s_infinite]" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Spinning/shimmer ring surrounding the logo logo */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.8, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-omega-border/10 border-t-omega-gold"
              />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
                className="absolute inset-2 rounded-full border border-dashed border-omega-gold/20"
              />
              <div className="w-4 h-4 rounded-full bg-omega-gold gold-glow absolute animate-ping duration-1000" />
            </div>

            {/* Premium Gold Typography Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-display font-black tracking-[0.3em] overflow-hidden whitespace-nowrap">
                OMNI<span className="text-transparent bg-clip-text gold-luxury-gradient italic">CORP</span>
              </h2>
              
              <div className="mt-4 flex items-center justify-center gap-1.5 overflow-hidden">
                <span className="text-[7px] font-black tracking-[0.5em] text-omega-gold uppercase">
                  CARREGANDO EXCELÊNCIA
                </span>
                <span className="inline-flex w-1 h-1 bg-omega-gold rounded-full animate-bounce delay-100" />
                <span className="inline-flex w-1 h-1 bg-omega-gold rounded-full animate-bounce delay-200" />
                <span className="inline-flex w-1 h-1 bg-omega-gold rounded-full animate-bounce delay-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
