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
      <div className="container mx-auto flex justify-between items-center">
        <BrandLogo onClick={scrollToTop} />
        
        {/* Меню страниц (залитые кнопки) */}
        <PagesMenu items={pageNavigationItems} className="hidden md:flex" />
        
        {/* Language switcher and theme toggle for desktop */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Переключатель мобильного меню */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <MenuToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Десктопное меню разделов (только на главной) */}
        {isHomePage && (
          <DesktopMenu 
            items={sectionNavigationItems} 
            activeSection={activeSection} 
            onNavigate={handleNavigation} 
          />
        )}
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
