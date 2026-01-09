import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageMenuButton from "./PageMenuButton";
import { PageItem } from "@/data/navigationItems";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface PagesMenuProps {
  items: PageItem[];
  className?: string;
}

const PagesMenu: React.FC<PagesMenuProps> = React.memo(({ items, className }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = (href: string) => {
    navigate(href);
  };
  
  return (
    <nav className={cn("flex space-x-1", className)} role="menubar" aria-label="Pages navigation">
      {items.map((item) => (
        <PageMenuButton
          key={item.href}
          active={location.pathname === item.href}
          onClick={() => handleClick(item.href)}
          label={t.pages[item.labelKey]}
        />
      ))}
    </nav>
  );
});

PagesMenu.displayName = "PagesMenu";

export default PagesMenu;
