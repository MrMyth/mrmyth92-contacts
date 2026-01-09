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
  const buttonAnimation = {
    rest: { scale: 1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 17 } },
    hover: { scale: 1.05, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 17 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } }
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-primary/80 text-primary-foreground hover:bg-primary",
        className
      )}
      aria-current={active ? "page" : undefined}
      variants={buttonAnimation}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      role="menuitem"
    >
      {label}
    </motion.button>
  );
});

PageMenuButton.displayName = "PageMenuButton";

export default PageMenuButton;
