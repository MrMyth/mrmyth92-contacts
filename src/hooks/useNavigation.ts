
import { useState, useEffect, useCallback, useRef } from "react";
import { scrollToSection, scrollToTop as scrollToTopUtil } from "../utils/scrollUtils";

/**
 * Optimized hook for managing navigation state and section tracking
 */
export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Use refs for performance optimization
  const observedSections = useRef<Element[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionCache = useRef<Map<string, Element>>(new Map());
  const scrollTimeout = useRef<number | null>(null);

  // Memoize callbacks to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleNavigation = useCallback((href: string) => {
    if (!isScrolling) {
      setIsMenuOpen(false);
      scrollToSection(href, setIsScrolling);
    }
  }, [isScrolling]);

  const scrollToTop = useCallback(() => {
    if (!isScrolling) {
      setIsMenuOpen(false);
      scrollToTopUtil(setIsScrolling, () => {
        window.history.pushState("", document.title, window.location.pathname);
        setActiveSection("");
      });
    }
  }, [isScrolling]);

  // Optimized scroll handler with proper cleanup
  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    // Optimize by creating observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (isScrolling) return;
          
          const visibleEntries = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => {
              const rectA = a.boundingClientRect;
              const rectB = b.boundingClientRect;
              return Math.abs(rectA.top) - Math.abs(rectB.top);
            });
            
          if (visibleEntries.length > 0) {
            const topEntry = visibleEntries[0];
            const id = `#${topEntry.target.id}`;
            
            if (id !== activeSection) {
              window.history.replaceState(null, "", id);
              setActiveSection(id);
            }
          }
        },
        { threshold: [0.1, 0.3, 0.5], rootMargin: "-80px 0px 0px 0px" }
      );
    }

    // Optimized section observation
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      const id = `#${section.id}`;
      sectionCache.current.set(id, section);
      
      if (!observedSections.current.includes(section)) {
        observerRef.current?.observe(section);
        observedSections.current.push(section);
      }
    });

    // More efficient scroll listener with throttling
    const throttleScroll = () => {
      if (scrollTimeout.current === null) {
        scrollTimeout.current = window.setTimeout(() => {
          handleScroll();
          scrollTimeout.current = null;
        }, 100);
      }
    };

    const handleHashChange = () => {
      if (!isScrolling) {
        const hash = window.location.hash;
        setActiveSection(hash || "#hero-section");
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', throttleScroll, { passive: true });
    
    // Initial hash handling
    const initialHash = window.location.hash;
    setActiveSection(initialHash || "#hero-section");

    return () => {
      // Proper cleanup
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', throttleScroll);
      
      if (observerRef.current) {
        observedSections.current.forEach((section) => {
          observerRef.current?.unobserve(section);
        });
      }
      
      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isScrolling, activeSection, handleScroll]);

  return {
    isMenuOpen,
    activeSection,
    scrollPosition,
    toggleMenu,
    handleNavigation,
    scrollToTop
  };
};
