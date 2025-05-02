
import React, { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import BrandLogo from "./navigation/BrandLogo";
import MenuToggleButton from "./navigation/MenuToggleButton";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";
import { navigationItems } from "../data/navigationItems";
import { useNavigation } from "../hooks/useNavigation";

/**
 * Основной компонент навигации с улучшенной производительностью
 */
const NavigationMenu: React.FC = () => {
  const { isMenuOpen, activeSection, toggleMenu, handleNavigation } = useNavigation();
  const controls = useAnimation();

  // Добавляем эффект тени при скролле
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        controls.start({ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" });
      } else {
        controls.start({ boxShadow: "none" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.nav 
      className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 py-2 px-4 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0, ...controls }}
      transition={{ duration: 0.5 }}
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
  );
};

export default memo(NavigationMenu);
