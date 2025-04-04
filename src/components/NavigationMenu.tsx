import React, { useState, useCallback, memo, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Обо мне", href: "#about-me-section" },
  { label: "Ubisoft Connect", href: "#contacts-section" },
  { label: "Помочь проекту", href: "#donation-section" },
  { label: "YouTube", href: "#youtube-section" },
  { label: "Twitch", href: "#twitch-section" },
  { label: "VK", href: "#vk-section" },
  { label: "Discord", href: "#discord-section" },
  { label: "Контакты", href: "#contact-section" },
  { label: "Обои на рабочий стол", href: "#ai-craft-section" },
];

const NavigationMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    setIsMenuOpen(false);
    
    window.location.hash = href.replace('#', '');
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("#hero-section");
      }
    };

    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            if (id !== window.location.hash) {
              history.replaceState(null, "", id);
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50 py-2 px-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004d00] to-[#006400]">
          MrMyth92 Dmitry Starchikov
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
              className="text-black"
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
              className="text-black py-2 text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default memo(NavigationMenu);