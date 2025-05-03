
/**
 * Оптимизированные утилиты плавной прокрутки с улучшенной производительностью
 */

// Тип для функций обратного вызова
type ScrollCallback = () => void;

/**
 * Улучшенная утилита плавной прокрутки с оптимизированной анимацией
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
  
  // Улучшенная реализация плавной прокрутки
  const start = window.pageYOffset;
  const elementRect = element.getBoundingClientRect();
  const headerOffset = 80; // Учитываем высоту шапки
  const target = elementRect.top + start - headerOffset;
  
  // Адаптивное время анимации в зависимости от дистанции
  const distance = Math.abs(target - start);
  const duration = Math.min(1000, Math.max(500, distance * 0.4));
  
  let startTime: number | null = null;
  let lastPos = window.pageYOffset;
  let rafId: number;
  let manualScroll = false;

  // Улучшенная функция анимации с использованием RAF для плавности
  const animateScroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Улучшенная функция плавности для более естественного движения
    const newPos = start + (target - start) * easeOutQuint(progress);
    window.scrollTo(0, newPos);
    
    // Улучшенное определение ручного вмешательства пользователя
    if (Math.abs(window.pageYOffset - lastPos) > 5 && Math.abs(window.pageYOffset - newPos) > 5) {
      manualScroll = true;
      completeScroll();
      return;
    }
    
    lastPos = window.pageYOffset;
    
    // Проверяем близость к цели для более точного завершения
    const isCloseToTarget = Math.abs(window.pageYOffset - target) < 2;
    
    if ((timeElapsed < duration && !manualScroll && !isCloseToTarget)) {
      rafId = requestAnimationFrame(animateScroll);
    } else {
      // Последний скролл точно к цели
      if (!manualScroll && !isCloseToTarget) {
        window.scrollTo(0, target);
      }
      completeScroll();
    }
  };

  const completeScroll = () => {
    cancelAnimationFrame(rafId); // Всегда отменяем анимацию первым делом
    setIsScrolling(false);
    
    // Обновляем историю только если анимация завершилась корректно
    if (!manualScroll && sectionId) {
      window.history.pushState(null, "", `#${sectionId}`);
    }
    
    if (onComplete) onComplete();
  };

  // Запускаем цикл анимации
  rafId = requestAnimationFrame(animateScroll);
  
  // Таймаут безопасности для гарантированной отмены анимации
  setTimeout(() => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      setIsScrolling(false);
    }
  }, duration + 100);
};

/**
 * Оптимизированная функция прокрутки в начало с улучшениями производительности
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
  
  // Адаптивная продолжительность на основе расстояния прокрутки
  const duration = Math.min(800, Math.max(400, start * 0.4));
  let startTime: number | null = null;
  let rafId: number;
  let lastPos = start;
  let manualScroll = false;

  const animateScroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Улучшенная функция плавности для прокрутки вверх
    const newPos = start * (1 - easeOutQuint(progress));
    window.scrollTo(0, newPos);
    
    // Улучшенное определение ручного скролла
    if (Math.abs(window.pageYOffset - lastPos) > 5 && Math.abs(window.pageYOffset - newPos) > 5) {
      manualScroll = true;
      completeAnimation();
      return;
    }
    
    lastPos = window.pageYOffset;
    
    // Проверка близости к верху для точного завершения
    const isCloseToTop = window.pageYOffset < 2;
    
    if (timeElapsed < duration && !manualScroll && !isCloseToTop) {
      rafId = requestAnimationFrame(animateScroll);
    } else {
      // Финальное перемещение в самый верх
      if (!manualScroll && !isCloseToTop) {
        window.scrollTo(0, 0);
      }
      completeAnimation();
    }
  };

  const completeAnimation = () => {
    cancelAnimationFrame(rafId);
    setIsScrolling(false);
    if (onComplete) onComplete();
  };

  rafId = requestAnimationFrame(animateScroll);
  
  // Таймаут безопасности
  setTimeout(() => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      setIsScrolling(false);
    }
  }, duration + 100);
};

/**
 * Улучшенная кубическая функция плавности для более плавных анимаций
 */
export const easeInOutCubic = (t: number): number => {
  return t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Квинтическая функция плавности для улучшенного опыта прокрутки
 */
export const easeOutQuint = (t: number): number => {
  return 1 - Math.pow(1 - t, 5);
};

/**
 * Экспоненциальная функция плавности для более естественного начала движения
 */
export const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};
