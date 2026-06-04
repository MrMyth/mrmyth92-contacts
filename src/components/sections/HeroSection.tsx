import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const images = ["/images/hero-1.jpg", "/images/hero-2.jpg"];
  
  const rotateImage = useCallback((direction: 'next' | 'prev') => {
    setIsLoading(true);
    setCurrentImageIndex(prevIndex => {
      if (direction === 'next') {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
    });
    setIsAutoRotate(false);
  }, [images.length]);
  
  useEffect(() => {
    if (!isAutoRotate) return;
    const interval = setInterval(() => {
      setIsLoading(true);
      setCurrentImageIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [isAutoRotate, images.length]);
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  
  return (
    <section className="mb-24" aria-label="Header section">
      <div className="relative h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img 
              src={images[currentImageIndex]} 
              alt={t.hero.gameScene} 
              className="w-full h-full object-cover" 
              loading="eager" 
              fetchPriority="high" 
              onLoad={handleImageLoad} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm z-10">
            <Loader2 className="h-12 w-12 animate-spin text-green-500" />
          </div>
        )}
        
        {/* Navigation */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-6 pointer-events-none">
          <button 
            onClick={() => rotateImage('prev')} 
            className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/20" 
            aria-label={t.hero.previousImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => rotateImage('next')} 
            className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/20" 
            aria-label={t.hero.nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-lg shadow-green-500/20">
              M
            </div>
            <span className="px-3 py-1 bg-green-600/10 text-green-600 rounded-full text-sm font-black uppercase tracking-widest border border-green-600/20">
              MrMyth92
            </span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.1, duration: 0.5 }} 
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-gradient-primary"
          >
            {t.hero.name}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.5 }} 
            className="text-xl md:text-2xl text-gradient-secondary font-bold tracking-tight"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button 
                key={index} 
                onClick={() => {
                  setIsLoading(true);
                  setCurrentImageIndex(index);
                  setIsAutoRotate(false);
                }} 
                className={`h-1 rounded-full transition-all duration-500 ${index === currentImageIndex ? 'bg-green-500 w-12' : 'bg-muted-foreground/30 w-6 hover:bg-muted-foreground/60'}`} 
                aria-label={`${t.hero.goToImage} ${index + 1}`} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-green-600 pl-6">
          {t.hero.imageDescription}
        </p>
        
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex items-start gap-4">
          <div className="p-2 bg-amber-500/20 rounded-lg text-amber-600">
            <AlertCircle className="h-5 w-5" />
          </div>
          <p className="text-sm font-bold text-amber-700 dark:text-amber-300 leading-tight">
            {t.hero.updateNotice}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
