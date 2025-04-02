
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Главная", href: "#hero-section" },
  { label: "Обо мне", href: "#about-me-section" },
  { label: "Контакты", href: "#contacts-section" },
  { label: "Донаты", href: "#donation-section" },
  { label: "YouTube", href: "#youtube-section" },
  { label: "Twitch", href: "#twitch-section" },
  { label: "ВКонтакте", href: "#vk-section" },
  { label: "Discord", href: "#discord-section" },
  { label: "AI Craft", href: "#ai-craft-section" },
];

const NavigationMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50 py-2 px-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004d00] to-[#006400]">
          MrMyth92
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            onClick={toggleMenu} 
            variant="ghost" 
            size="icon" 
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {navigationItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-black hover:text-[#8B5CF6] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={cn(
          "fixed inset-x-0 top-14 bg-white shadow-md md:hidden transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="container mx-auto py-2 px-4 flex flex-col space-y-3">
          {navigationItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-black hover:text-[#8B5CF6] py-2 transition-colors text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
