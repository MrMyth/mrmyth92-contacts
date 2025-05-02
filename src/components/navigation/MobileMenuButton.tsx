
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MobileMenuButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: JSX.Element;
}

const MobileMenuButton = ({ active, onClick, label, icon }: MobileMenuButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "px-4 py-3 rounded-md text-left text-sm font-medium transition-colors duration-200 w-full flex items-center gap-3",
        active
          ? "bg-gradient-to-r from-green-600 to-green-800 text-white"
          : "text-gray-700 hover:bg-gray-50"
      )}
      aria-current={active ? "page" : undefined}
      whileHover={{ scale: 1.01, x: 2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{label}</span>
    </motion.button>
  );
};

export default MobileMenuButton;
