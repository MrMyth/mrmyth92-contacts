
import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuToggleButton = ({ isOpen, onClick }: MenuToggleButtonProps) => {
  return (
    <Button 
      onClick={onClick} 
      variant="ghost" 
      size="icon" 
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      className="transition-all duration-200 hover:bg-gray-100"
    >
      {isOpen ? (
        <X className="h-6 w-6 text-gray-800" />
      ) : (
        <Menu className="h-6 w-6 text-gray-800" />
      )}
    </Button>
  );
};

export default MenuToggleButton;
