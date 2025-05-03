
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
  const observedSections = useRef<Element[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionCache = useRef<Map<string, Element>>(new Map());

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleNavigation = useCallback((href: string) => {
    // Only trigger navigation if we're not already scrolling
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

  useEffect(() => {
    const handleHashChange = () => {
      if (!isScrolling) {
        const hash = window.location.hash;
        setActiveSection(hash || "#hero-section");
      }
    };

    // Create the observer only once with improved threshold handling
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (isScrolling) return; // Skip if scrolling is active
          
          // Sort entries by their current y-position to find the one most in view
          const visibleEntries = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => {
              const rectA = a.boundingClientRect;
              const rectB = b.boundingClientRect;
              // Prioritize elements closer to the top of the viewport
              return Math.abs(rectA.top) - Math.abs(rectB.top);
            });
            
          if (visibleEntries.length > 0) {
            const topEntry = visibleEntries[0];
            const id = `#${topEntry.target.id}`;
            
            // Only update if actually changed
            if (id !== activeSection) {
              window.history.replaceState(null, "", id);
              setActiveSection(id);
            }
          }
        },
        { threshold: [0.1, 0.3, 0.5], rootMargin: "-80px 0px 0px 0px" }
      );
    }

    // Optimized section observation setup - only observe new sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      // Cache sections for quicker access
      const id = `#${section.id}`;
      sectionCache.current.set(id, section);
      
      if (!observedSections.current.includes(section)) {
        observerRef.current?.observe(section);
        observedSections.current.push(section);
      }
    });

    // Throttled scroll handler for shadow effect
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Debounce the scroll event for better performance
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const throttleScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = 0 as unknown as ReturnType<typeof setTimeout>;
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', throttleScroll, { passive: true });
    
    // Initial hash handling with fallback
    const initialHash = window.location.hash;
    setActiveSection(initialHash || "#hero-section");

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', throttleScroll);
      
      // Clean up observer
      if (observerRef.current) {
        observedSections.current.forEach((section) => {
          observerRef.current?.unobserve(section);
        });
      }
      
      // Clear any pending timeouts
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling, activeSection]);

  return {
    isMenuOpen,
    activeSection,
    scrollPosition,
    toggleMenu,
    handleNavigation,
    scrollToTop
  };
};
