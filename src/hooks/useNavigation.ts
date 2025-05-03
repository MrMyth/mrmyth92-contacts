
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
  
  // Use refs for performance optimization and to avoid recreating on each render
  const observedSections = useRef<Element[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionCache = useRef<Map<string, Element>>(new Map());
  const scrollTimeout = useRef<number | null>(null);
  const isScrollingRef = useRef<boolean>(false);

  // Update ref whenever state changes to avoid stale closures in event listeners
  useEffect(() => {
    isScrollingRef.current = isScrolling;
  }, [isScrolling]);

  // Memoize callbacks to prevent unnecessary re-renders and event handler recreations
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleNavigation = useCallback((href: string) => {
    if (!isScrollingRef.current) {
      setIsMenuOpen(false);
      scrollToSection(href, setIsScrolling);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    if (!isScrollingRef.current) {
      setIsMenuOpen(false);
      scrollToTopUtil(setIsScrolling, () => {
        window.history.pushState("", document.title, window.location.pathname);
        setActiveSection("");
      });
    }
  }, []);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (scrollTimeout.current === null) {
      scrollTimeout.current = window.setTimeout(() => {
        setScrollPosition(window.scrollY);
        scrollTimeout.current = null;
      }, 50); // Reduced from 100ms to 50ms for more responsive UI updates
    }
  }, []);

  useEffect(() => {
    // Create intersection observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (isScrollingRef.current) return;
          
          const visibleEntries = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => {
              const rectA = a.boundingClientRect;
              const rectB = b.boundingClientRect;
              // Better sorting logic: prioritize elements closest to the top of the viewport
              return (Math.abs(rectA.top) - Math.abs(rectB.top));
            });
            
          if (visibleEntries.length > 0) {
            const topEntry = visibleEntries[0];
            const id = `#${topEntry.target.id}`;
            
            if (id !== activeSection) {
              // Use replaceState instead of pushState to avoid polluting history
              window.history.replaceState(null, "", id);
              setActiveSection(id);
            }
          }
        },
        { 
          // More granular thresholds for better accuracy
          threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
          rootMargin: "-80px 0px 0px 0px" 
        }
      );
    }

    // Optimize section observation with better caching
    const sections = document.querySelectorAll('section[id]');
    const allSections: Element[] = [];
    
    sections.forEach((section) => {
      const id = `#${section.id}`;
      sectionCache.current.set(id, section);
      allSections.push(section);
      
      if (!observedSections.current.includes(section)) {
        observerRef.current?.observe(section);
      }
    });
    
    // Update observed sections reference
    observedSections.current = allSections;

    // Passive event listener for better scrolling performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial hash handling
    const initialHash = window.location.hash;
    if (initialHash && document.querySelector(initialHash)) {
      setActiveSection(initialHash);
    } else {
      // Default to first section if no hash or invalid hash
      setActiveSection("#hero-section");
    }

    return () => {
      // Comprehensive cleanup
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
      
      if (observerRef.current) {
        observedSections.current.forEach(section => {
          observerRef.current?.unobserve(section);
        });
        observerRef.current.disconnect();
      }
      
      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [activeSection, handleScroll]);

  // Handle hash changes separately
  const handleHashChange = useCallback(() => {
    if (!isScrollingRef.current) {
      const hash = window.location.hash;
      if (hash && document.querySelector(hash)) {
        setActiveSection(hash);
      }
    }
  }, []);

  return {
    isMenuOpen,
    activeSection,
    scrollPosition,
    toggleMenu,
    handleNavigation,
    scrollToTop
  };
};
