
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
    // Memoized variants for better animation performance
    const containerAnimation = {
      hidden: { opacity: 0, height: 0 },
      visible: { opacity: 1, height: "auto" },
      exit: { opacity: 0, height: 0 }
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerAnimation}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn("md:hidden overflow-hidden", className)}
          >
            <div className="container mx-auto py-2 px-4 flex flex-col space-y-1 bg-white border-t border-gray-100">
              {items.map((item) => (
                <MobileMenuButton
                  key={item.href}
                  active={activeSection === item.href}
                  onClick={() => onNavigate(item.href)}
                  label={item.label}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
