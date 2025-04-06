
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

  // Оптимизированная функция переключения меню
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  // Оптимизированная функция прокрутки к разделу
  const scrollToSection = useCallback((href: string) => {
    setIsMenuOpen(false);
    
    const sectionId = href.replace('#', '');
    window.location.hash = sectionId;
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  
  useEffect(() => {
    // Обработчик изменения хэша
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
    
    // Создание наблюдателя пересечений для отслеживания видимых разделов
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

    // Наблюдение за всеми разделами
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Очистка слушателей событий при размонтировании компонента
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

        {/* Кнопка мобильного меню */}
        <div className="md:hidden">
          <Button 
            onClick={toggleMenu} 
            variant="ghost" 
            size="icon" 
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            className="transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Десктопное меню */}
        <div className="hidden md:flex space-x-4">
          {navigationItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "text-black hover:text-primary transition-colors duration-200",
                activeSection === item.href && "text-primary font-medium"
              )}
              aria-current={activeSection === item.href ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
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
              className={cn(
                "text-black py-2 text-left hover:text-primary transition-colors duration-200",
                activeSection === item.href && "text-primary font-medium"
              )}
              aria-current={activeSection === item.href ? "page" : undefined}
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
