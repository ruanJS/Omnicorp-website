import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export const LazyImage = ({ src, alt, className = "", wrapperClassName = "" }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#161616] ${wrapperClassName}`}>
      {/* Skeleton / Shimmer Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#161616] flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-omega-gold/20 border-t-omega-gold rounded-full animate-spin" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      )}
      
      <motion.img
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ 
          opacity: isLoaded ? 1 : 0, 
          scale: isLoaded ? 1 : 1.05 
        }}
        viewport={{ once: true, margin: "150px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        onLoad={() => setIsLoaded(true)}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover select-none pointer-events-none transition-all duration-1000 ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
        } ${className}`}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
