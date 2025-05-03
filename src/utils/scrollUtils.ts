
/**
 * Optimized smooth scrolling utilities with enhanced performance and better user experience
 */

// Type for callback function
type ScrollCallback = () => void;

/**
 * Enhanced smooth scrolling utility with optimized animation and better performance
 */
export const scrollToSection = (
  href: string, 
  setIsScrolling: (value: boolean) => void, 
  onComplete?: ScrollCallback
) => {
  setIsScrolling(true);
  
  const sectionId = href.replace('#', '');
  const element = document.querySelector(href);
  
  if (!element) {
    setIsScrolling(false);
    return;
  }
  
  // Advanced smooth scroll implementation
  const start = window.pageYOffset;
  const target = element.getBoundingClientRect().top + start - 80; // Account for header height
  const duration = 500;
  let startTime: number | null = null;
  let lastPos = window.pageYOffset;
  let rafId: number;
  let manualScroll = false;

  // Enhanced animation function using RAF for better performance
  const animateScroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Better easing function for more natural motion
    const newPos = start + (target - start) * easeInOutCubic(progress);
    window.scrollTo(0, newPos);
    
    // Improved user interruption detection
    if (Math.abs(window.pageYOffset - lastPos) > 3 && Math.abs(window.pageYOffset - newPos) > 3) {
      manualScroll = true;
      completeScroll();
      return;
    }
    
    lastPos = window.pageYOffset;
    
    if (timeElapsed < duration && !manualScroll) {
      rafId = requestAnimationFrame(animateScroll);
    } else {
      completeScroll();
    }
  };

  const completeScroll = () => {
    cancelAnimationFrame(rafId); // Always cancel animation frame first
    setIsScrolling(false);
    
    // Only update history if we've completed the animation correctly
    if (!manualScroll && sectionId) {
      window.history.pushState(null, "", `#${sectionId}`);
    }
    
    if (onComplete) onComplete();
  };

  // Start the animation loop
  rafId = requestAnimationFrame(animateScroll);
  
  // Safety cleanup timeout
  setTimeout(() => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      setIsScrolling(false);
    }
  }, duration + 100);
};

/**
 * Optimized scroll to top function with performance enhancements
 */
export const scrollToTop = (
  setIsScrolling: (value: boolean) => void, 
  onComplete?: ScrollCallback
) => {
  setIsScrolling(true);
  
  const start = window.pageYOffset;
  if (start === 0) {
    setIsScrolling(false);
    if (onComplete) onComplete();
    return;
  }
  
  const duration = Math.min(500, Math.max(300, start * 0.5)); // Adaptive duration based on scroll distance
  let startTime: number | null = null;
  let rafId: number;
  let lastPos = start;
  let manualScroll = false;

  const animateScroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Improved easing for scroll to top
    const newPos = start * (1 - easeOutQuart(progress));
    window.scrollTo(0, newPos);
    
    // Better manual scroll detection
    if (Math.abs(window.pageYOffset - lastPos) > 3 && Math.abs(window.pageYOffset - newPos) > 3) {
      manualScroll = true;
      completeAnimation();
      return;
    }
    
    lastPos = window.pageYOffset;
    
    if (timeElapsed < duration && !manualScroll) {
      rafId = requestAnimationFrame(animateScroll);
    } else {
      completeAnimation();
    }
  };

  const completeAnimation = () => {
    cancelAnimationFrame(rafId);
    setIsScrolling(false);
    if (onComplete) onComplete();
  };

  rafId = requestAnimationFrame(animateScroll);
  
  // Safety cleanup timeout
  setTimeout(() => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      setIsScrolling(false);
    }
  }, duration + 100);
};

/**
 * Enhanced cubic easing function for smoother animations
 */
export const easeInOutCubic = (t: number): number => {
  return t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Additional easing function for better scroll to top experience
 */
export const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4);
};
