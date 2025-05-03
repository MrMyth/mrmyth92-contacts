
import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = React.memo(
  ({ isOpen, onClick, className }) => {
    return (
      <Button 
        onClick={onClick} 
        variant="ghost" 
        size="icon" 
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        className={cn("transition-all duration-200 hover:bg-gray-100", className)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-800" />
        ) : (
          <Menu className="h-6 w-6 text-gray-800" />
        )}
      </Button>
    );
  }
);

MenuToggleButton.displayName = "MenuToggleButton";

export default MenuToggleButton;
