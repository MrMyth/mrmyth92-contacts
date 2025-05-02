
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MenuButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: JSX.Element;
}

const MenuButton = ({ active, onClick, label, icon }: MenuButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
        active
          ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-sm"
          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      )}
      aria-current={active ? "page" : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="w-5 h-5">{icon}</span>}
        <span>{label}</span>
      </div>
    </motion.button>
  );
};

export default MenuButton;
