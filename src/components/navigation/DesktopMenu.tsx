
import React from "react";
import MenuButton from "./MenuButton";

interface NavigationItem {
  label: string;
  href: string;
}

interface DesktopMenuProps {
  items: NavigationItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
}

const DesktopMenu = ({ items, activeSection, onNavigate }: DesktopMenuProps) => {
  return (
    <div className="hidden md:flex space-x-1">
      {items.map((item) => (
        <MenuButton
          key={item.href}
          active={activeSection === item.href}
          onClick={() => onNavigate(item.href)}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default DesktopMenu;
