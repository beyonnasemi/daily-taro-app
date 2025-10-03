// 날짜 관련 유틸리티 함수들

/**
 * 날짜를 한국어 형식으로 포맷팅
 * @param {Date} date - 포맷팅할 날짜
 * @returns {string} 포맷팅된 날짜 문자열
 */
export const formatKoreanDate = (date) => {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
};

/**
 * 날짜를 간단한 형식으로 포맷팅 (히스토리용)
 * @param {string|Date} timestamp - 포맷팅할 타임스탬프
 * @returns {string} 포맷팅된 날짜 문자열
 */
export const formatSimpleDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('ko-KR', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * 두 날짜가 같은 날인지 확인
 * @param {Date|string} date1 - 첫 번째 날짜
 * @param {Date|string} date2 - 두 번째 날짜
 * @returns {boolean} 같은 날인지 여부
 */
export const isSameDay = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

/**
 * 오늘 날짜인지 확인
 * @param {Date|string} date - 확인할 날짜
 * @returns {boolean} 오늘인지 여부
 */
export const isToday = (date) => {
  return isSameDay(date, new Date());
};

/**
 * 상대적 시간 표시 (예: "2시간 전", "어제")
 * @param {Date|string} date - 기준 날짜
 * @returns {string} 상대적 시간 문자열
 */
export const getRelativeTime = (date) => {
  const now = new Date();
  const targetDate = new Date(date);
  const diffInMs = now - targetDate;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) {
    return '방금 전';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays === 1) {
    return '어제';
  } else if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  } else {
    return formatSimpleDate(date);
  }
};

/**
 * 다음 자정까지 남은 시간 계산
 * @returns {Object} 시, 분, 초 객체
 */
export const getTimeUntilMidnight = () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const diff = tomorrow - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
};