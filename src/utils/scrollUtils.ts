
/**
 * Улучшенный scrolling utility с плавными переходами и более точными анимациями
 */
export const scrollToSection = (
  href: string, 
  setIsScrolling: (value: boolean) => void, 
  onComplete?: () => void
) => {
  setIsScrolling(true);
  
  const sectionId = href.replace('#', '');
  const element = document.querySelector(href);
  
  if (element) {
    // Улучшенный плавный скролл с requestAnimationFrame для оптимальной производительности
    const start = window.scrollY;
    const target = element.getBoundingClientRect().top + start - 100; // Учитываем высоту навигации + небольшой отступ
    const duration = 600; // Более длительная анимация для плавности
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, start + (target - start) * easeInOutQuart(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
        window.location.hash = sectionId;
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(animateScroll);
    return true; // Возвращаем успех для обработки ошибок
  }
  
  setIsScrolling(false);
  return false; // Возвращаем ошибку если элемент не найден
};

/**
 * Улучшенная easing function для более приятной анимации
 */
export const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Более плавная easing функция для более естественных движений
 */
export const easeInOutQuart = (t: number) => {
  return t < 0.5 
    ? 8 * t * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 4) / 2;
};
