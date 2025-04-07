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

  const imageDescriptions = [
    "Gaming-themed header image showing game environment",
    "Scenic game landscape with atmospheric lighting"
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
    <section className="mb-12 relative" aria-label="Header section">
      <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20">
            <Loader2 className="h-12 w-12 animate-spin text-green-500" />
          </div>
        )}
        
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={imageDescriptions[currentImageIndex]}
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
        
        <div className="absolute inset-0 flex items-center p-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white max-w-md bg-gray-900/70 p-6 rounded-xl backdrop-blur-sm"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              Дмитрий Старчиков
            </h1>
            <p className="text-xl md:text-2xl text-green-300">
              Геймер, стример, создатель контента
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;