
import React, { memo } from "react";
import { motion } from "framer-motion";
import BrandLogo from "./navigation/BrandLogo";
import MenuToggleButton from "./navigation/MenuToggleButton";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";
import { navigationItems } from "../data/navigationItems";
import { useNavigation } from "../hooks/useNavigation";
import { cn } from "@/lib/utils";

/**
 * Main navigation component that handles both desktop and mobile navigation
 */
const NavigationMenu: React.FC = memo(() => {
  const { 
    isMenuOpen, 
    activeSection, 
    scrollPosition, 
    toggleMenu, 
    handleNavigation, 
    scrollToTop 
  } = useNavigation();

  return (
    <motion.nav 
      className={cn(
        "sticky top-0 bg-white/90 backdrop-blur-sm z-50 py-2 px-4 transition-shadow duration-300",
        scrollPosition > 10 ? "shadow-md" : ""
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <BrandLogo onClick={scrollToTop} />

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <MenuToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Desktop menu */}
        <DesktopMenu 
          items={navigationItems} 
          activeSection={activeSection} 
          onNavigate={handleNavigation} 
        />
      </div>

      {/* Mobile menu dropdown */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        items={navigationItems} 
        activeSection={activeSection} 
        onNavigate={handleNavigation} 
      />
    </motion.nav>
  );
});

NavigationMenu.displayName = "NavigationMenu";

export default NavigationMenu;
