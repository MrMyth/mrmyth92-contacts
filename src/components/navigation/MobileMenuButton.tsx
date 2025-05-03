
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MobileMenuButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  className?: string;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = React.memo(
  ({ active, onClick, label, className }) => {
    return (
      <motion.button
        onClick={onClick}
        className={cn(
          "px-4 py-3 rounded-md text-left text-sm font-medium transition-colors w-full",
          active
            ? "bg-gradient-to-r from-green-600 to-green-800 text-white"
            : "text-gray-700 hover:bg-gray-50",
          className
        )}
        aria-current={active ? "page" : undefined}
        whileTap={{ scale: 0.98 }}
        whileHover={{ backgroundColor: active ? undefined : "rgba(243, 244, 246, 1)" }}
        role="menuitem"
      >
        {label}
      </motion.button>
    );
  }
);

MobileMenuButton.displayName = "MobileMenuButton";

export default MobileMenuButton;
