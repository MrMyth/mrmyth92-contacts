import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MobileMenuButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  variant?: "page" | "section";
  className?: string;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = React.memo(
  ({ active, onClick, label, variant = "section", className }) => {
    const isPage = variant === "page";
    
    return (
      <motion.button
        onClick={onClick}
        className={cn(
          "px-4 py-3 rounded-md text-left text-sm font-medium transition-colors w-full",
          isPage
            ? active
              ? "bg-primary text-primary-foreground"
              : "bg-primary/80 text-primary-foreground hover:bg-primary"
            : active
              ? "bg-gradient-to-r from-green-600 to-green-800 text-white"
              : "text-foreground hover:bg-muted",
          className
        )}
        aria-current={active ? "page" : undefined}
        whileTap={{ scale: 0.98 }}
        role="menuitem"
      >
        {label}
      </motion.button>
    );
  }
);

MobileMenuButton.displayName = "MobileMenuButton";

export default MobileMenuButton;
