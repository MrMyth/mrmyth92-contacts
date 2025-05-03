
import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import BrandLogo from "./navigation/BrandLogo";
import MenuToggleButton from "./navigation/MenuToggleButton";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";
import { navigationItems } from "../data/navigationItems";
import { useNavigation } from "../hooks/useNavigation";
import { cn } from "@/lib/utils";

const NavigationMenu: React.FC = memo(() => {
  const { 
    isMenuOpen, 
    activeSection, 
    scrollPosition, 
    toggleMenu, 
    handleNavigation, 
    scrollToTop 
  } = useNavigation();

  // Используем useMemo для стилей заголовка, чтобы избежать лишних перерисовок
  const headerStyle = useMemo(() => 
    cn(
      "sticky top-0 bg-white/90 backdrop-blur-sm z-50 py-2 px-4 transition-all duration-300",
      scrollPosition > 10 ? "shadow-md" : ""
    ), 
    [scrollPosition]
  );

  return (
    <motion.header 
      className={headerStyle}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      role="banner"
    >
      <div className="container mx-auto flex justify-between items-center">
        <BrandLogo onClick={scrollToTop} />

        {/* Переключатель мобильного меню */}
        <div className="md:hidden">
          <MenuToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Десктопное меню */}
        <DesktopMenu 
          items={navigationItems} 
          activeSection={activeSection} 
          onNavigate={handleNavigation} 
        />
      </div>

      {/* Выпадающее мобильное меню */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        items={navigationItems} 
        activeSection={activeSection} 
        onNavigate={(href) => {
          handleNavigation(href);
          // Всегда закрываем мобильное меню после навигации
          toggleMenu();
        }} 
      />
    </motion.header>
  );
});

NavigationMenu.displayName = "NavigationMenu";

export default NavigationMenu;
