
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-12 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            © {currentYear} MrMyth92. Все права защищены.
          </div>
          
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            Сделано с <Heart className="h-4 w-4 text-red-500 fill-red-500" /> для сообщества
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
