import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MenuButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = React.memo(({ active, onClick, label, icon: Icon, className }) => {
  const buttonAnimation = {
    rest: { scale: 1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 17 } },
    hover: { scale: 1.05, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 17 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } }
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5",
        active
          ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-sm"
          : "text-foreground/90 hover:bg-muted hover:text-foreground",
        className
      )}
      aria-current={active ? "page" : undefined}
      variants={buttonAnimation}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      role="menuitem"
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {label}
    </motion.button>
  );
});

MenuButton.displayName = "MenuButton";

export default MenuButton;
