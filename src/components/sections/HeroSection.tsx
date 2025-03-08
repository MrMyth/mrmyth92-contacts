
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlipHorizontal, FlipVertical, RotateCcw } from "lucide-react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const [flipVertical, setFlipVertical] = useState(false);
  
  const images = [
    "https://i.ibb.co/PG45Qbnk/image.jpg",
    "https://i.ibb.co/sL0YxWD/image.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 60000); // Change every 60 seconds (1 minute)

    return () => clearInterval(interval);
  }, []);

  const resetFlips = () => {
    setFlipHorizontal(false);
    setFlipVertical(false);
  };

  return (
    <div className="mb-12">
      <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg mb-4">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Header"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              scaleX: flipHorizontal ? -1 : 1,
              scaleY: flipVertical ? -1 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center gap-4 mb-4">
        <Button 
          variant="outline" 
          size="sm" 
          className={`gaming-button ${flipHorizontal ? 'bg-[#8B5CF6]/20' : ''}`}
          onClick={() => setFlipHorizontal(!flipHorizontal)}
        >
          <FlipHorizontal size={18} className="mr-2" />
          Отразить по горизонтали
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className={`gaming-button ${flipVertical ? 'bg-[#8B5CF6]/20' : ''}`}
          onClick={() => setFlipVertical(!flipVertical)}
        >
          <FlipVertical size={18} className="mr-2" />
          Отразить по вертикали
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="gaming-button"
          onClick={resetFlips}
        >
          <RotateCcw size={18} className="mr-2" />
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
