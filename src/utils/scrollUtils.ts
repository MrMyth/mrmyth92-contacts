
/**
 * Optimized smooth scrolling utility with easing function and improved performance
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
  
  // Improved smooth scroll with requestAnimationFrame for better performance
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
    
    const newPos = start + (target - start) * easeInOutCubic(progress);
    window.scrollTo(0, newPos);
    
    // Exit early if user manually scrolled (detected by comparing positions)
    if (Math.abs(lastPos - window.pageYOffset) < 1 && timeElapsed > 100) {
      cancelAnimationFrame(rafId);
      setIsScrolling(false);
      if (sectionId) window.history.pushState(null, "", `#${sectionId}`);
      if (onComplete) onComplete();
      return;
    }
    
    lastPos = window.pageYOffset;
    
    if (timeElapsed < duration) {
      rafId = requestAnimationFrame(animateScroll);
    } else {
      setIsScrolling(false);
      if (sectionId) window.history.pushState(null, "", `#${sectionId}`);
      if (onComplete) onComplete();
    }
  };

  rafId = requestAnimationFrame(animateScroll);
  
  // Safety timeout in case animation gets stuck
  setTimeout(() => {
    cancelAnimationFrame(rafId);
    setIsScrolling(false);
  }, duration + 100);
};

/**
 * Smooth scroll to top function
 */
export const scrollToTop = (
  setIsScrolling: (value: boolean) => void, 
  onComplete?: () => void
) => {
  setIsScrolling(true);
  
  const start = window.pageYOffset;
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
  
  setTimeout(() => {
    cancelAnimationFrame(rafId);
    setIsScrolling(false);
  }, duration + 100);
};

/**
 * Optimized easing function for smooth animation
 */
export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
