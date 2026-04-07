import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageMenuButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  className?: string;
}

const PageMenuButton: React.FC<PageMenuButtonProps> = React.memo(({ active, onClick, label, className }) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors",
        active
          ? "text-green-600"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
      aria-current={active ? "page" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      role="menuitem"
    >
      {label}
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 mx-4"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.button>
  );
});

PageMenuButton.displayName = "PageMenuButton";

export default PageMenuButton;
