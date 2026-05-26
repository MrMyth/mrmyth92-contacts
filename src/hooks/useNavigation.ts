
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { scrollToSection, scrollToTop as scrollToTopUtil } from "../utils/scrollUtils";

/**
 * Оптимизированный хук для управления навигацией и отслеживания секций
 */
export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scrollTimeout = useRef<number | null>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleNavigation = useCallback((href: string) => {
    scrollToSection(href);
  }, []);

  const scrollToTop = useCallback(() => {
    scrollToTopUtil(() => {
      window.history.pushState("", document.title, window.location.pathname);
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollTimeout.current === null) {
      scrollTimeout.current = window.setTimeout(() => {
        setScrollPosition(window.scrollY);
        scrollTimeout.current = null;
      }, 50);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  return useMemo(() => ({
    isMenuOpen,
    scrollPosition,
    toggleMenu,
    handleNavigation,
    scrollToTop
  }), [isMenuOpen, scrollPosition, toggleMenu, handleNavigation, scrollToTop]);
};
