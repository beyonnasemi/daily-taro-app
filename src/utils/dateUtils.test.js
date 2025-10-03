import {
  formatKoreanDate,
  formatSimpleDate,
  isSameDay,
  isToday,
  getRelativeTime,
  getTimeUntilMidnight
} from './dateUtils';

describe('Date Utils', () => {
  const testDate = new Date('2024-01-15T14:30:00');

  test('formatKoreanDate가 올바른 한국어 형식을 반환한다', () => {
    const result = formatKoreanDate(testDate);
    expect(typeof result).toBe('string');
    expect(result).toContain('2024');
    expect(result).toContain('1월');
    expect(result).toContain('15일');
  });

  test('formatSimpleDate가 간단한 형식을 반환한다', () => {
    const result = formatSimpleDate(testDate);
    expect(typeof result).toBe('string');
    expect(result).toContain('1월');
    expect(result).toContain('15');
    // 시간 형식은 로케일에 따라 다를 수 있으므로 일반적으로 확인
    expect(result).toMatch(/\d{1,2}:\d{2}|\d{1,2}시|\d{1,2}:\d{2}|오후|오전/);
  });

  test('isSameDay가 같은 날짜를 올바르게 판단한다', () => {
    const date1 = new Date('2024-01-15T10:00:00');
    const date2 = new Date('2024-01-15T20:00:00');
    const date3 = new Date('2024-01-16T10:00:00');

    expect(isSameDay(date1, date2)).toBe(true);
    expect(isSameDay(date1, date3)).toBe(false);

    // 문자열 형태도 테스트
    expect(isSameDay(date1.toISOString(), date2.toISOString())).toBe(true);
  });

  test('isToday가 오늘 날짜를 올바르게 판단한다', () => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    expect(isToday(today)).toBe(true);
    expect(isToday(yesterday)).toBe(false);
  });

  test('getRelativeTime이 상대적 시간을 올바르게 반환한다', () => {
    const now = new Date();

    // 1분 전
    const oneMinuteAgo = new Date(now - 60 * 1000);
    expect(getRelativeTime(oneMinuteAgo)).toBe('1분 전');

    // 30초 전
    const thirtySecondsAgo = new Date(now - 30 * 1000);
    expect(getRelativeTime(thirtySecondsAgo)).toBe('방금 전');

    // 2시간 전
    const twoHoursAgo = new Date(now - 2 * 60 * 60 * 1000);
    expect(getRelativeTime(twoHoursAgo)).toBe('2시간 전');

    // 1일 전
    const yesterday = new Date(now - 24 * 60 * 60 * 1000);
    expect(getRelativeTime(yesterday)).toBe('어제');
  });

  test('getTimeUntilMidnight이 올바른 시간 객체를 반환한다', () => {
    const result = getTimeUntilMidnight();

    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('hours');
    expect(result).toHaveProperty('minutes');
    expect(result).toHaveProperty('seconds');

    expect(typeof result.hours).toBe('number');
    expect(typeof result.minutes).toBe('number');
    expect(typeof result.seconds).toBe('number');

    expect(result.hours).toBeGreaterThanOrEqual(0);
    expect(result.hours).toBeLessThan(24);
    expect(result.minutes).toBeGreaterThanOrEqual(0);
    expect(result.minutes).toBeLessThan(60);
    expect(result.seconds).toBeGreaterThanOrEqual(0);
    expect(result.seconds).toBeLessThan(60);
  });
});