
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenuButton from "./MobileMenuButton";
import { NavigationItem } from "@/data/navigationItems";

interface MobileMenuProps {
  isOpen: boolean;
  items: NavigationItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
}

// Анимации для выпадающего меню
const menuVariants = {
  hidden: { 
    opacity: 0,
    height: 0,
    transition: { 
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  visible: { 
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.05,
      staggerDirection: 1
    }
  }
};

// Оптимизированное мобильное меню с плавными анимациями
const MobileMenu = ({ isOpen, items, activeSection, onNavigate }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="md:hidden overflow-hidden"
        >
          <div className="container mx-auto py-2 px-4 flex flex-col space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg rounded-b-lg">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <MobileMenuButton
                  active={activeSection === item.href}
                  onClick={() => onNavigate(item.href)}
                  label={item.label}
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
