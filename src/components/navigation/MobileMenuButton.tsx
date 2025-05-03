
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MobileMenuButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = React.memo(({ active, onClick, label }) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "px-4 py-3 rounded-md text-left text-sm font-medium transition-colors duration-200",
        active
          ? "bg-gradient-to-r from-green-600 to-green-800 text-white"
          : "text-gray-700 hover:bg-gray-50"
      )}
      aria-current={active ? "page" : undefined}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.button>
  );
});

MobileMenuButton.displayName = "MobileMenuButton";

export default MobileMenuButton;
