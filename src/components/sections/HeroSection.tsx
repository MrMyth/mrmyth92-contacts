import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const images = ["https://i.postimg.cc/0QLFg30n/supawork-4e1c22a9ac344e088355ea42eadc1283.png", "https://i.postimg.cc/wB4n23tS/Comfy-UI-00001.png"];
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
  return <section className="mb-12" aria-label="Header section">
      <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl group">
        {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 z-10">
            <Loader2 className="h-12 w-12 animate-spin text-green-500" />
          </div>}
        
        {/* Кнопки переключения */}
        <button onClick={() => rotateImage('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label="Previous image">
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button onClick={() => rotateImage('next')} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label="Next image">
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Индикаторы текущего изображения */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => <button key={index} onClick={() => {
          setIsLoading(true);
          setCurrentImageIndex(index);
          setIsAutoRotate(false);
        }} className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-green-500 w-6' : 'bg-white/50 hover:bg-white/80'}`} aria-label={`Go to image ${index + 1}`} />)}
        </div>

        <AnimatePresence mode="wait">
          <motion.img key={currentImageIndex} src={images[currentImageIndex]} alt="Игровая сцена" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 1
        }} className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchPriority="high" onLoad={handleImageLoad} />
        </AnimatePresence>
      </div>

      <div className="mt-6 text-center">
        <motion.h1 initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.3
      }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-green-800 dark:text-green-600">
          Дмитрий Старчиков
        </motion.h1>
        <motion.p initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.5
      }} className="text-lg md:text-xl text-green-500 mb-4">
          Геймер, стример, создатель контента
        </motion.p>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
          Все изображения в шапке сайта созданы мной и отражают игры, в которые я сейчас играю.
        </p>
        <p className="text-sm font-bold text-red-500 dark:text-red-400 block">Информация на сайте обновлена: 15.06.2025, 13:40 (по Москве)</p>
      </div>
    </section>;
};
export default HeroSection;