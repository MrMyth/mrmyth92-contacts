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
      "relative bg-background/90 backdrop-blur-sm z-50 py-2 px-4 transition-all duration-300",
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
      {/* Row for Switchers - Moved above menu */}
      <div className="container mx-auto flex justify-end items-center py-2 border-b border-border/10">
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>

      <div className="container mx-auto flex items-center h-16 relative">
        <div className="absolute left-0">
          <BrandLogo onClick={() => handleNavigation("/")} />
        </div>
        
        <div className="hidden md:flex flex-1 justify-center">
          <PagesMenu items={pageNavigationItems} />
        </div>

        <div className="md:hidden absolute right-0 flex items-center gap-2">
          <MenuToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        sectionItems={[]}
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
