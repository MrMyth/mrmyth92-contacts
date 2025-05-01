
import React, { useState, useCallback, memo, useEffect } from "react";
import { motion } from "framer-motion";
import BrandLogo from "./navigation/BrandLogo";
import MenuToggleButton from "./navigation/MenuToggleButton";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";

const navigationItems = [
  { label: "Обо мне", href: "#about-me-section" },
  { label: "Ubisoft Connect", href: "#contacts-section" },
  { label: "Поддержка проектов", href: "#donation-section" },
  { label: "YouTube", href: "#youtube-section" },
  { label: "Twitch", href: "#twitch-section" },
  { label: "Trovo", href: "#trovo-section" },
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
        <BrandLogo />

        {/* Кнопка мобильного меню */}
        <div className="md:hidden">
          <MenuToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Десктопное меню */}
        <DesktopMenu 
          items={navigationItems} 
          activeSection={activeSection} 
          onNavigate={scrollToSection} 
        />
      </div>

      {/* Выпадающее мобильное меню */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        items={navigationItems} 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
    </motion.nav>
  );
};

export default memo(NavigationMenu);
