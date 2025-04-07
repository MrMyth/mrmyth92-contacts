import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const images = [
    "https://i.ibb.co/LXpmDhzp/supawork-4e1c22a9ac344e088355ea42eadc1283.png",
    "https://i.ibb.co/Y44xWNJ6/Comfy-UI-00001.png"
  ];

  const rotateImage = useCallback(() => {
    setIsLoading(true);
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateImage, 10000);
    return () => clearInterval(interval);
  }, [rotateImage]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="mb-12" aria-label="Header section">
      <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20">
            <Loader2 className="h-12 w-12 animate-spin text-green-500" />
          </div>
        )}
        
        <div className="absolute top-4 right-4 z-10 text-white text-xs md:text-sm italic">
          Изображения созданы мной и отражают мои текущие игры
        </div>
        
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Игровая сцена"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            onLoad={handleImageLoad}
          />
        </AnimatePresence>
      </div>

      <div className="mt-6 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
        >
          Дмитрий Старчиков
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-green-500"
        >
          Геймер, стример, создатель контента
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;