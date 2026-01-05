
import React from "react";
import MenuButton from "./MenuButton";
import { NavigationItem } from "@/data/navigationItems";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface DesktopMenuProps {
  items: NavigationItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
  className?: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = React.memo(
  ({ items, activeSection, onNavigate, className }) => {
    const { t } = useLanguage();
    
    return (
      <nav className={cn("hidden md:flex space-x-1", className)} role="menubar" aria-label="Site navigation">
        {items.map((item) => (
          <MenuButton
            key={item.href}
            active={activeSection === item.href}
            onClick={() => onNavigate(item.href)}
            label={t.nav[item.labelKey]}
          />
        ))}
      </nav>
    );
  }
);

DesktopMenu.displayName = "DesktopMenu";

export default DesktopMenu;
