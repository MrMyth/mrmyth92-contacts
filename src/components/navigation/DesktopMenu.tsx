
import React from "react";
import MenuButton from "./MenuButton";
import { NavigationItem } from "@/data/navigationItems";

interface DesktopMenuProps {
  items: NavigationItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
  className?: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = React.memo(
  ({ items, activeSection, onNavigate, className }) => {
    return (
      <div className={cn("hidden md:flex space-x-1", className)}>
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
  }
);

DesktopMenu.displayName = "DesktopMenu";

export default DesktopMenu;
