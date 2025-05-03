
import { useState, useEffect, useCallback, useRef } from "react";
import { scrollToSection } from "../utils/scrollUtils";

/**
 * Hook that manages navigation state and section tracking with improved performance
 */
export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const observedSections = useRef<Element[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  useEffect(() => {
    const handleHashChange = () => {
      if (!isScrolling) {
        const hash = window.location.hash;
        setActiveSection(hash || "#hero-section");
      }
    };

    // Create the observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (isScrolling) return; // Skip if scrolling is active
          
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = `#${entry.target.id}`;
              
              // Only update if actually changed
              if (id !== activeSection) {
                history.replaceState(null, "", id);
                setActiveSection(id);
              }
            }
          });
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );
    }

    // Set up observers
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (!observedSections.current.includes(section)) {
        observerRef.current?.observe(section);
        observedSections.current.push(section);
      }
    });

    // Shadow effect on scroll (debounced)
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const nav = document.querySelector('nav');
        if (nav) {
          if (window.scrollY > 10) {
            nav.classList.add('shadow-md');
          } else {
            nav.classList.remove('shadow-md');
          }
        }
      }, 10);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);
    
    // Initial hash handling
    const initialHash = window.location.hash;
    if (initialHash) {
      setActiveSection(initialHash);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
      
      // Clean up observer
      if (observerRef.current) {
        observedSections.current.forEach((section) => {
          observerRef.current?.unobserve(section);
        });
      }
    };
  }, [isScrolling, activeSection]);

  return {
    isMenuOpen,
    activeSection,
    toggleMenu,
    handleNavigation
  };
};
