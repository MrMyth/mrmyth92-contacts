import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenuButton from "./MobileMenuButton";
import { SectionItem, PageItem } from "@/data/navigationItems";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  sectionItems: SectionItem[];
  pageItems: PageItem[];
  activeSection: string;
  currentPath: string;
  onNavigate: (href: string) => void;
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = React.memo(
  ({ isOpen, sectionItems, pageItems, activeSection, currentPath, onNavigate, className }) => {
    const { t } = useLanguage();
    
    const containerAnimation = {
      hidden: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeInOut" } },
      visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
      exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeInOut" } }
    };

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
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto py-2 px-4 flex flex-col space-y-1 bg-background border-t border-border">
              {/* Меню страниц */}
              <div className="pb-2 mb-2 border-b border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">
                  {t.pages.home === "Home" ? "Pages" : "Страницы"}
                </span>
                {pageItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    variants={itemAnimation}
                    initial="hidden"
                    animate="visible"
                  >
                    <MobileMenuButton
                      active={currentPath === item.href}
                      onClick={() => onNavigate(item.href)}
                      label={t.pages[item.labelKey]}
                      variant="page"
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Меню разделов (только на главной) */}
              {currentPath === "/" && (
                <>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">
                    {t.pages.home === "Home" ? "Sections" : "Разделы"}
                  </span>
                  {sectionItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      custom={index + pageItems.length}
                      variants={itemAnimation}
                      initial="hidden"
                      animate="visible"
                    >
                      <MobileMenuButton
                        active={activeSection === item.href}
                        onClick={() => onNavigate(item.href)}
                        label={t.nav[item.labelKey]}
                        variant="section"
                      />
                    </motion.div>
                  ))}
                </>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
