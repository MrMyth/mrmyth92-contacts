
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { scrollToSection, scrollToTop as scrollToTopUtil } from "../utils/scrollUtils";

/**
 * Оптимизированный хук для управления навигацией и отслеживания секций
 */
export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Используем рефы для оптимизации и предотвращения пересоздания при каждом рендере
  const observedSections = useRef<Element[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionCache = useRef<Map<string, Element>>(new Map());
  const scrollTimeout = useRef<number | null>(null);
  const isScrollingRef = useRef<boolean>(false);
  const activePositions = useRef<Map<string, number>>(new Map());
  const lastScrollY = useRef<number>(0);

  // Обновляем реф при изменении состояния для избежания устаревших значений в обработчиках событий
  useEffect(() => {
    isScrollingRef.current = isScrolling;
  }, [isScrolling]);

  // Мемоизируем функции для предотвращения ненужных повторных рендеров
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleNavigation = useCallback((href: string) => {
    if (!isScrollingRef.current) {
      scrollToSection(href, setIsScrolling);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    if (!isScrollingRef.current) {
      scrollToTopUtil(setIsScrolling, () => {
        window.history.pushState("", document.title, window.location.pathname);
        setActiveSection("");
      });
    }
  }, []);

  // Оптимизированный обработчик прокрутки с throttling
  const handleScroll = useCallback(() => {
    // Определяем направление прокрутки
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY.current;
    lastScrollY.current = currentScrollY;

    // Используем throttling для улучшения производительности
    if (scrollTimeout.current === null) {
      scrollTimeout.current = window.setTimeout(() => {
        setScrollPosition(window.scrollY);
        
        // Проверяем, не находимся ли мы в процессе программной прокрутки
        if (!isScrollingRef.current) {
          // Находим активный раздел на основе сохраненных позиций и направления прокрутки
          let bestSection = "";
          let bestDistance = Infinity;
          
          activePositions.current.forEach((position, section) => {
            const distance = Math.abs(currentScrollY - position);
            
            // Используем направление прокрутки для улучшения определения секции
            if (distance < bestDistance ||
                (isScrollingDown && currentScrollY >= position && position > (activePositions.current.get(bestSection) || 0)) ||
                (!isScrollingDown && currentScrollY <= position && position < (activePositions.current.get(bestSection) || Infinity))) {
              bestDistance = distance;
              bestSection = section;
            }
          });
          
          // Обновляем URL только если есть значимое изменение
          if (bestSection && bestSection !== activeSection) {
            window.history.replaceState(null, "", bestSection);
            setActiveSection(bestSection);
          }
        }
        
        scrollTimeout.current = null;
      }, 50);
    }
  }, [activeSection]);

  // Мемоизированная функция для обработки изменений хэша
  const handleHashChange = useCallback(() => {
    if (!isScrollingRef.current) {
      const hash = window.location.hash;
      if (hash && document.querySelector(hash)) {
        setActiveSection(hash);
      }
    }
  }, []);

  // Используем useEffect для настройки наблюдателя пересечений и обработчиков событий
  useEffect(() => {
    // Создаем наблюдатель пересечения только один раз
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (isScrollingRef.current) return;
          
          const visibleEntries = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => {
              const rectA = a.boundingClientRect;
              const rectB = b.boundingClientRect;
              // Улучшенная логика сортировки: приоритет секциям ближе к верху области просмотра
              return (Math.abs(rectA.top) - Math.abs(rectB.top));
            });
            
          if (visibleEntries.length > 0) {
            const topEntry = visibleEntries[0];
            const id = `#${topEntry.target.id}`;
            
            // Сохраняем позицию секции для улучшения отслеживания
            activePositions.current.set(id, topEntry.target.getBoundingClientRect().top + window.scrollY - 80);
            
            if (id !== activeSection && !isScrollingRef.current) {
              // Используем replaceState вместо pushState, чтобы не засорять историю
              window.history.replaceState(null, "", id);
              setActiveSection(id);
            }
          }
        },
        { 
          // Более детальные пороги для лучшей точности
          threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
          rootMargin: "-80px 0px 0px 0px" 
        }
      );
    }

    // Оптимизируем наблюдение за секциями с улучшенным кэшированием
    const sections = document.querySelectorAll('section[id]');
    const allSections: Element[] = [];
    
    sections.forEach((section) => {
      const id = `#${section.id}`;
      sectionCache.current.set(id, section);
      allSections.push(section);
      
      // Сохраняем начальные позиции для более точного отслеживания
      activePositions.current.set(id, section.getBoundingClientRect().top + window.scrollY - 80);
      
      if (!observedSections.current.includes(section)) {
        observerRef.current?.observe(section);
      }
    });
    
    // Обновляем ссылку на наблюдаемые секции
    observedSections.current = allSections;

    // Пассивный прослушиватель событий для улучшения производительности прокрутки
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    
    // Обработка начального хэша
    const initialHash = window.location.hash;
    if (initialHash && document.querySelector(initialHash)) {
      setActiveSection(initialHash);
    } else {
      // По умолчанию используем первую секцию, если нет хэша или он недействителен
      setActiveSection("#hero-section");
    }

    return () => {
      // Полная очистка ресурсов
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
  }, [activeSection, handleScroll, handleHashChange]);

  // Мемоизируем возвращаемый объект, чтобы избежать пересоздания на каждом рендере
  return useMemo(() => ({
    isMenuOpen,
    activeSection,
    scrollPosition,
    toggleMenu,
    handleNavigation,
    scrollToTop
  }), [isMenuOpen, activeSection, scrollPosition, toggleMenu, handleNavigation, scrollToTop]);
};
