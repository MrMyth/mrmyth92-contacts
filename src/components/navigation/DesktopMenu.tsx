
import React from "react";
import MenuButton from "./MenuButton";
import { NavigationItem } from "@/data/navigationItems";

interface DesktopMenuProps {
  items: NavigationItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = React.memo(({ items, activeSection, onNavigate }) => {
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
});

DesktopMenu.displayName = "DesktopMenu";

export default DesktopMenu;
