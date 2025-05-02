
/**
 * Smooth scrolling utility with easing function
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

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, start + (target - start) * easeInOutCubic(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
        window.location.hash = sectionId;
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(animateScroll);
  }
};

/**
 * Easing function for smooth animation
 */
export const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
