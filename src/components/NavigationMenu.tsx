
import React, { memo, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import BrandLogo from "./navigation/BrandLogo";
import MenuToggleButton from "./navigation/MenuToggleButton";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";
import { navigationItems } from "@/data/navigationItems";
import { useNavigation } from "@/hooks/useNavigation";

/**
 * Основной компонент навигации с улучшенной производительностью и анимациями
 */
const NavigationMenu: React.FC = () => {
  const { isMenuOpen, activeSection, toggleMenu, handleNavigation } = useNavigation();
  const controls = useAnimation();

  // Добавляем эффект тени при скролле с плавным переходом
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        controls.start({ 
          boxShadow: "0 4px 20px -1px rgba(0, 0, 0, 0.1), 0 2px 10px -1px rgba(0, 0, 0, 0.06)",
          backdropFilter: "blur(8px)",
          background: "rgba(255, 255, 255, 0.9)"
        });
      } else {
        controls.start({ 
          boxShadow: "none",
          backdropFilter: "blur(4px)", 
          background: "rgba(255, 255, 255, 0.8)"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Вызываем сразу для установки начального состояния
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <AnimatePresence>
      <motion.nav 
        className="sticky top-0 z-50 py-3 px-4 transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0,
          opacity: 1,
          ...controls
        }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <BrandLogo />

          {/* Десктопное меню */}
          <DesktopMenu 
            items={navigationItems} 
            activeSection={activeSection} 
            onNavigate={handleNavigation} 
          />
          
          {/* Кнопка мобильного меню */}
          <div className="md:hidden">
            <MenuToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>

        {/* Выпадающее мобильное меню */}
        <MobileMenu 
          isOpen={isMenuOpen} 
          items={navigationItems} 
          activeSection={activeSection} 
          onNavigate={handleNavigation} 
        />
      </motion.nav>
    </AnimatePresence>
  );
};

export default memo(NavigationMenu);
