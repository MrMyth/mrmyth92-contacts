import React, { useState, useCallback, memo, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    setIsMenuOpen(false);
    setIsScrolling(true);
    
    const sectionId = href.replace('#', '');
    const element = document.querySelector(href);
    
    if (element) {
      // Плавный скролл с requestAnimationFrame для лучшей производительности
      const start = window.pageYOffset;
      const target = element.getBoundingClientRect().top + start - 80; // Учитываем высоту навигации
      const duration = 500;
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, start + (target - start) * easeInOutCubic(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          setIsScrolling(false);
          window.location.hash = sectionId;
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }, []);

  // Функция для плавного скролла
  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (!isScrolling) {
        const hash = window.location.hash;
        setActiveSection(hash || "#hero-section");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            const id = `#${entry.target.id}`;
            if (id !== window.location.hash) {
              history.replaceState(null, "", id);
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" } // Учитываем высоту навигации
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        document.querySelector('nav')?.classList.add('shadow-md');
      } else {
        document.querySelector('nav')?.classList.remove('shadow-md');
      }
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, [isScrolling]);

  return (
    <motion.nav 
      className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 py-2 px-4 transition-shadow duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004d00] to-[#006400]"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          MrMyth92 Dmitry Starchikov
        </motion.div>

        {/* Кнопка мобильного меню */}
        <div className="md:hidden">
          <Button 
            onClick={toggleMenu} 
            variant="ghost" 
            size="icon" 
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            className="transition-all duration-200 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </Button>
        </div>

        {/* Десктопное меню */}
        <div className="hidden md:flex space-x-1">
          {navigationItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeSection === item.href 
                  ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
              aria-current={activeSection === item.href ? "page" : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="container mx-auto py-2 px-4 flex flex-col space-y-1 bg-white border-t border-gray-100">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "px-4 py-3 rounded-md text-left text-sm font-medium transition-colors duration-200",
                    activeSection === item.href
                      ? "bg-gradient-to-r from-green-600 to-green-800 text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                  aria-current={activeSection === item.href ? "page" : undefined}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default memo(NavigationMenu);