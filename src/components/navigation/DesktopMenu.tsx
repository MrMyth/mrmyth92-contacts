
import React from "react";
import MenuButton from "./MenuButton";
import { NavigationItem } from "@/data/navigationItems";
import { motion } from "framer-motion";

interface DesktopMenuProps {
  items: NavigationItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
}

// Оптимизированное десктопное меню с поддержкой иконок и анимациями
const DesktopMenu = ({ items, activeSection, onNavigate }: DesktopMenuProps) => {
  return (
    <motion.div 
      className="hidden md:flex flex-wrap gap-1 justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <MenuButton
            active={activeSection === item.href}
            onClick={() => onNavigate(item.href)}
            label={item.label}
            icon={item.icon}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DesktopMenu;
