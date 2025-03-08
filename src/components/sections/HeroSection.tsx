
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "https://i.ibb.co/PG45Qbnk/image.jpg",
    "https://i.ibb.co/sL0YxWD/image.jpg"
  ];

  // Using useCallback to memoize the image transition function
  const rotateImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateImage, 60000);
    return () => clearInterval(interval);
  }, [rotateImage]);

  return (
    <section className="mb-12" aria-label="Header section">
      <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Header image ${currentImageIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
