import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showCredit, setShowCredit] = useState(true);
  
  const images = [
    "https://i.ibb.co/LXpmDhzp/supawork-4e1c22a9ac344e088355ea42eadc1283.png",
    "https://i.ibb.co/Y44xWNJ6/Comfy-UI-00001.png"
  ];

  const imageDescriptions = [
    "Киберспортивная сцена с игровым setup",
    "Футуристический игровой ландшафт"
  ];

  const rotateImage = useCallback(() => {
    setIsLoading(true);
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateImage, 10000);
    return () => clearInterval(interval);
  }, [rotateImage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCredit(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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
        
        <AnimatePresence>
          {showCredit && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-4 right-4 bg-black/70 text-white text-xs md:text-sm px-3 py-2 rounded-lg backdrop-blur-sm z-10"
            >
              Изображения созданы мной и отражают игры, в которые я играю
            </motion.div>
          )}
        </AnimatePresence>
        
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
        
        <div className="absolute inset-0 flex items-end">
          <div className="w-full bg-gray-900/80 p-6 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-end">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  Дмитрий Старчиков
                </h1>
                <p className="text-lg md:text-xl text-green-300">
                  Геймер, стример, создатель контента
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="hidden md:block text-gray-300 text-sm italic"
              >
                {imageDescriptions[currentImageIndex]}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;