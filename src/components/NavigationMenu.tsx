import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import BrandLogo from "./navigation/BrandLogo";
import MenuToggleButton from "./navigation/MenuToggleButton";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";
import PagesMenu from "./navigation/PagesMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { pageNavigationItems, sectionNavigationItems } from "../data/navigationItems";
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
  
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const headerStyle = useMemo(() => 
    cn(
      "sticky top-0 bg-background/90 backdrop-blur-sm z-50 py-2 px-4 transition-all duration-300",
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
      {/* Десктопная версия - пирамида */}
      <div className="hidden md:flex flex-col items-center gap-2 container mx-auto">
        {/* Первый ряд: переключатели языка и темы */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
        
        {/* Второй ряд: меню страниц */}
        <PagesMenu items={pageNavigationItems} />
        
        {/* Третий ряд: меню разделов (только на главной) */}
        {isHomePage && (
          <DesktopMenu 
            items={sectionNavigationItems} 
            activeSection={activeSection} 
            onNavigate={handleNavigation} 
            className="flex"
          />
        )}
      </div>

      {/* Мобильная версия */}
      <div className="md:hidden container mx-auto flex justify-between items-center">
        <BrandLogo onClick={scrollToTop} />
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <MenuToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        sectionItems={sectionNavigationItems}
        pageItems={pageNavigationItems}
        activeSection={activeSection}
        currentPath={location.pathname}
        onNavigate={(href) => {
          handleNavigation(href);
          toggleMenu();
        }} 
      />
    </motion.header>
  );
});

NavigationMenu.displayName = "NavigationMenu";

export default NavigationMenu;
