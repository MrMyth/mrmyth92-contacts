
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
        "px-4 py-3 rounded-md text-left text-sm font-medium transition-colors duration-200 w-full",
        active
          ? "bg-gradient-to-r from-green-600 to-green-800 text-white"
          : "text-gray-700 hover:bg-gray-50"
      )}
      aria-current={active ? "page" : undefined}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="w-5 h-5">{icon}</span>}
        <span>{label}</span>
      </div>
    </motion.button>
  );
};

export default MobileMenuButton;
