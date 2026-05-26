
/**
 * Утилиты плавной прокрутки
 */

type ScrollCallback = () => void;

/**
 * Плавно прокручивает к указанной секции
 */
export const scrollToSection = (href: string, onComplete?: ScrollCallback) => {
  const element = document.querySelector(href);
  
  if (!element) return;
  
  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });

  if (onComplete) {
    // Ждем окончания прокрутки (примерно)
    setTimeout(onComplete, 800);
  }
};

/**
 * Плавно прокручивает в начало страницы
 */
export const scrollToTop = (onComplete?: ScrollCallback) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (onComplete) {
    setTimeout(onComplete, 800);
  }
};
