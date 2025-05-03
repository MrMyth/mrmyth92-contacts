
import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MenuToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = React.memo(
  ({ isOpen, onClick, className }) => {
    return (
      <Button 
        onClick={onClick} 
        variant="ghost" 
        size="icon" 
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={cn("transition-all duration-200 hover:bg-gray-100 relative", className)}
      >
        <AnimatePresence initial={false} mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-800" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6 text-gray-800" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    );
  }
);

MenuToggleButton.displayName = "MenuToggleButton";

export default MenuToggleButton;
