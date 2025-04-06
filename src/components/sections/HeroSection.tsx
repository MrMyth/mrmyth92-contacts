import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const images = [
    "https://i.ibb.co/PG45Qbnk/image.jpg",
    "https://i.ibb.co/sL0YxWD/image.jpg"
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
            <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
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
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              Дмитрий Старчиков
            </h1>
            <p className="text-xl md:text-2xl text-purple-300">
              Геймер, стример, создатель контента
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;