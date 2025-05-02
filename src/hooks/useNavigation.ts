
import { useState, useEffect, useCallback, useRef } from "react";
import { scrollToSection } from "../utils/scrollUtils";
import { toast } from "@/hooks/use-toast";

/**
 * Hook that manages navigation state and section tracking with improved performance
 */
export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleNavigation = useCallback((href: string) => {
    setIsMenuOpen(false);
    
    try {
      scrollToSection(href, setIsScrolling, () => {
        // Callback после завершения скролла
        toast({
          title: "Навигация",
          description: `Перемещение к секции ${href.replace('#', '')} завершено`,
          duration: 2000,
        });
      });
    } catch (error) {
      console.error('Ошибка навигации:', error);
    }
  }, []);

  // Отслеживание секций на странице и обновление активного раздела
  useEffect(() => {
    // Обработчик изменения хэша в URL
    const handleHashChange = () => {
      if (!isScrolling) {
        const hash = window.location.hash;
        setActiveSection(hash || "#hero-section");
      }
    };

    // Создание и настройка IntersectionObserver
    observerRef.current = new IntersectionObserver(
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
      { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" } // Оптимизированные параметры для более точного определения
    );

    // Наблюдение за всеми секциями
    document.querySelectorAll('section[id]').forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // События
    window.addEventListener('hashchange', handleHashChange);
    
    // Установка начального активного раздела
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isScrolling]);

  return {
    isMenuOpen,
    activeSection,
    toggleMenu,
    handleNavigation
  };
};
