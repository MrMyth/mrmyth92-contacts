
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MenuButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = React.memo(({ active, onClick, label, className }) => {
  // Memoized animation variants
  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
        active
          ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-sm"
          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        className
      )}
      aria-current={active ? "page" : undefined}
      variants={buttonAnimation}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.button>
  );
});

MenuButton.displayName = "MenuButton";

export default MenuButton;
