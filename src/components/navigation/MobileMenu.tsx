
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenuButton from "./MobileMenuButton";
import { NavigationItem } from "@/data/navigationItems";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  items: NavigationItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = React.memo(
  ({ isOpen, items, activeSection, onNavigate, className }) => {
    // Улучшенные варианты анимации
    const containerAnimation = {
      hidden: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeInOut" } },
      visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
      exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeInOut" } }
    };

    // Анимация для отдельных пунктов меню
    const itemAnimation = {
      hidden: { opacity: 0, y: -10 },
      visible: (i: number) => ({ 
        opacity: 1, 
        y: 0,
        transition: { delay: i * 0.05, duration: 0.2 }
      })
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerAnimation}
            className={cn("md:hidden overflow-hidden", className)}
            role="menu"
            aria-label="Мобильная навигация"
          >
            <div className="container mx-auto py-2 px-4 flex flex-col space-y-1 bg-white border-t border-gray-100">
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={itemAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <MobileMenuButton
                    active={activeSection === item.href}
                    onClick={() => onNavigate(item.href)}
                    label={item.label}
                  />
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
