
import { useState, useEffect, useCallback } from "react";
import { scrollToSection } from "../utils/scrollUtils";

/**
 * Hook that manages navigation state and section tracking
 */
export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleNavigation = useCallback((href: string) => {
    setIsMenuOpen(false);
    scrollToSection(href, setIsScrolling);
  }, []);

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
    
    // Shadow effect on scroll
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

  return {
    isMenuOpen,
    activeSection,
    toggleMenu,
    handleNavigation
  };
};
