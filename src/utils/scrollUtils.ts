
/**
 * Smooth scrolling utility with easing function and improved performance
 */
export const scrollToSection = (href: string, setIsScrolling: (value: boolean) => void, onComplete?: () => void) => {
  setIsScrolling(true);
  
  const sectionId = href.replace('#', '');
  const element = document.querySelector(href);
  
  if (element) {
    // Плавный скролл с requestAnimationFrame для лучшей производительности
    const start = window.pageYOffset;
    const target = element.getBoundingClientRect().top + start - 80; // Учитываем высоту навигации
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
      
      // Exit early if we've stopped scrolling (user interaction)
      if (Math.abs(lastPos - window.pageYOffset) < 1 && timeElapsed > 100) {
        cancelAnimationFrame(rafId);
        setIsScrolling(false);
        window.location.hash = sectionId;
        if (onComplete) onComplete();
        return;
      }
      
      lastPos = window.pageYOffset;
      
      if (timeElapsed < duration) {
        rafId = requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
        window.location.hash = sectionId;
        if (onComplete) onComplete();
      }
    };

    rafId = requestAnimationFrame(animateScroll);
    
    // Add safety timeout in case animation gets stuck
    setTimeout(() => {
      cancelAnimationFrame(rafId);
      setIsScrolling(false);
    }, duration + 100);
  }
};

/**
 * Easing function for smooth animation
 */
export const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
