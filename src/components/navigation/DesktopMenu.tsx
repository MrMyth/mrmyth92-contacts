
import React from "react";
import MenuButton from "./MenuButton";
import { NavigationItem } from "@/data/navigationItems";

interface DesktopMenuProps {
  items: NavigationItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
}

// Оптимизированное десктопное меню с поддержкой иконок
const DesktopMenu = ({ items, activeSection, onNavigate }: DesktopMenuProps) => {
  return (
    <div className="hidden md:flex flex-wrap gap-1 justify-end">
      {items.map((item) => (
        <MenuButton
          key={item.href}
          active={activeSection === item.href}
          onClick={() => onNavigate(item.href)}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default DesktopMenu;
