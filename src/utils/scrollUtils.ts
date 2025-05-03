
/**
 * Optimized smooth scrolling utility with requestAnimationFrame and easing
 */
export const scrollToSection = (
  href: string, 
  setIsScrolling: (value: boolean) => void, 
  onComplete?: () => void
) => {
  setIsScrolling(true);
  
  const sectionId = href.replace('#', '');
  const element = document.querySelector(href);
  
  if (!element) {
    setIsScrolling(false);
    return;
  }
  
  // Performance-optimized smooth scroll implementation
  const start = window.pageYOffset;
  const target = element.getBoundingClientRect().top + start - 80; // Account for header height
  const duration = 500;
  let startTime: number | null = null;
  let lastPos = window.pageYOffset;
  let rafId: number;

  const animateScroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Use optimized easing function for smooth animation
    const newPos = start + (target - start) * easeInOutCubic(progress);
    window.scrollTo(0, newPos);
    
    // Check if user manually scrolled
    if (Math.abs(lastPos - window.pageYOffset) > 1 || timeElapsed <= 100) {
      lastPos = window.pageYOffset;
      
      if (timeElapsed < duration) {
        rafId = requestAnimationFrame(animateScroll);
      } else {
        completeScroll();
      }
    } else {
      // User manually scrolled, cancel animation
      cancelAnimationFrame(rafId);
      completeScroll();
    }
  };

  const completeScroll = () => {
    setIsScrolling(false);
    if (sectionId) window.history.pushState(null, "", `#${sectionId}`);
    if (onComplete) onComplete();
  };

  rafId = requestAnimationFrame(animateScroll);
  
  // Safety cleanup timeout
  setTimeout(() => {
    cancelAnimationFrame(rafId);
    setIsScrolling(false);
  }, duration + 100);
};

/**
 * Optimized scroll to top function
 */
export const scrollToTop = (
  setIsScrolling: (value: boolean) => void, 
  onComplete?: () => void
) => {
  setIsScrolling(true);
  
  const start = window.pageYOffset;
  if (start === 0) {
    setIsScrolling(false);
    if (onComplete) onComplete();
    return;
  }
  
  const duration = 500;
  let startTime: number | null = null;
  let rafId: number;

  const animateScroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const newPos = start * (1 - easeInOutCubic(progress));
    window.scrollTo(0, newPos);
    
    if (timeElapsed < duration) {
      rafId = requestAnimationFrame(animateScroll);
    } else {
      setIsScrolling(false);
      if (onComplete) onComplete();
    }
  };

  rafId = requestAnimationFrame(animateScroll);
  
  // Safety cleanup timeout
  setTimeout(() => {
    cancelAnimationFrame(rafId);
    setIsScrolling(false);
  }, duration + 100);
};

/**
 * Optimized cubic easing function for smooth animation
 */
export const easeInOutCubic = (t: number): number => {
  return t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
