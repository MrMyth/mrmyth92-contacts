
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  return (
    <div className="text-center mb-12 relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="sync">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
