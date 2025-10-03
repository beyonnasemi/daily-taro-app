// 애니메이션 관련 유틸리티 함수들

/**
 * 요소에 애니메이션 클래스를 추가하고 완료 후 제거
 * @param {HTMLElement} element - 애니메이션을 적용할 요소
 * @param {string} animationClass - 애니메이션 CSS 클래스
 * @param {number} duration - 애니메이션 지속 시간 (ms)
 */
export const addTemporaryAnimation = (element, animationClass, duration = 1000) => {
  if (!element) return;

  element.classList.add(animationClass);

  setTimeout(() => {
    element.classList.remove(animationClass);
  }, duration);
};

/**
 * 지연된 애니메이션 실행
 * @param {Function} callback - 실행할 콜백 함수
 * @param {number} delay - 지연 시간 (ms)
 * @returns {number} 타이머 ID
 */
export const delayedAnimation = (callback, delay = 500) => {
  return setTimeout(callback, delay);
};

/**
 * 스태거 애니메이션 (순차적 애니메이션)
 * @param {NodeList|Array} elements - 애니메이션을 적용할 요소들
 * @param {string} animationClass - 애니메이션 CSS 클래스
 * @param {number} staggerDelay - 각 요소간 지연 시간 (ms)
 */
export const staggerAnimation = (elements, animationClass, staggerDelay = 100) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(animationClass);
    }, index * staggerDelay);
  });
};

/**
 * 카드 셔플 애니메이션 효과
 * @param {HTMLElement} cardElement - 카드 요소
 * @returns {Promise} 애니메이션 완료 프로미스
 */
export const shuffleCardAnimation = (cardElement) => {
  return new Promise((resolve) => {
    if (!cardElement) {
      resolve();
      return;
    }

    const animationClass = 'shuffle-animation';
    cardElement.classList.add(animationClass);

    const handleAnimationEnd = () => {
      cardElement.classList.remove(animationClass);
      cardElement.removeEventListener('animationend', handleAnimationEnd);
      resolve();
    };

    cardElement.addEventListener('animationend', handleAnimationEnd);

    // 애니메이션이 실행되지 않을 경우를 대비한 fallback
    setTimeout(() => {
      if (cardElement.classList.contains(animationClass)) {
        cardElement.classList.remove(animationClass);
        resolve();
      }
    }, 2000);
  });
};

/**
 * 부드러운 스크롤 애니메이션
 * @param {HTMLElement} targetElement - 스크롤할 대상 요소
 * @param {Object} options - 스크롤 옵션
 */
export const smoothScrollTo = (targetElement, options = {}) => {
  if (!targetElement) return;

  const defaultOptions = {
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  };

  targetElement.scrollIntoView({ ...defaultOptions, ...options });
};

/**
 * 요소의 가시성 체크 후 애니메이션 실행
 * @param {HTMLElement} element - 체크할 요소
 * @param {Function} callback - 가시상태일 때 실행할 콜백
 * @param {Object} options - Intersection Observer 옵션
 */
export const animateOnVisible = (element, callback, options = {}) => {
  if (!element || !window.IntersectionObserver) {
    callback();
    return;
  }

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(element);
      }
    });
  }, { ...defaultOptions, ...options });

  observer.observe(element);
};

/**
 * 랜덤 반짝임 효과
 * @param {HTMLElement} element - 반짝임을 적용할 요소
 * @param {number} duration - 반짝임 지속 시간 (ms)
 */
export const sparkleEffect = (element, duration = 2000) => {
  if (!element) return;

  const sparkleClass = 'sparkle-effect';
  element.classList.add(sparkleClass);

  setTimeout(() => {
    element.classList.remove(sparkleClass);
  }, duration);
};

/**
 * 진동 효과 (모바일)
 * @param {number|Array} pattern - 진동 패턴 (ms)
 */
export const vibrateEffect = (pattern = 100) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern);
  }
};