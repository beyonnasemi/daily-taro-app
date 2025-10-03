import { tarotCards, getRandomCard } from './tarotCards';

describe('Tarot Cards Data', () => {
  test('타로카드 데이터가 올바른 구조를 가진다', () => {
    expect(Array.isArray(tarotCards)).toBe(true);
    expect(tarotCards.length).toBeGreaterThan(0);

    // 첫 번째 카드 구조 검증
    const firstCard = tarotCards[0];
    expect(firstCard).toHaveProperty('id');
    expect(firstCard).toHaveProperty('name');
    expect(firstCard).toHaveProperty('koreanName');
    expect(firstCard).toHaveProperty('type');
    expect(firstCard).toHaveProperty('symbol');
    expect(firstCard).toHaveProperty('upright');
    expect(firstCard).toHaveProperty('reversed');

    // upright/reversed 구조 검증
    expect(firstCard.upright).toHaveProperty('meaning');
    expect(firstCard.upright).toHaveProperty('message');
    expect(firstCard.reversed).toHaveProperty('meaning');
    expect(firstCard.reversed).toHaveProperty('message');
  });

  test('모든 카드가 고유한 ID를 가진다', () => {
    const ids = tarotCards.map(card => card.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  test('카드 타입이 major 또는 minor이다', () => {
    tarotCards.forEach(card => {
      expect(['major', 'minor']).toContain(card.type);
    });
  });

  test('getRandomCard 함수가 올바른 구조의 카드를 반환한다', () => {
    const randomCard = getRandomCard();

    // 기본 카드 속성 확인
    expect(randomCard).toHaveProperty('id');
    expect(randomCard).toHaveProperty('name');
    expect(randomCard).toHaveProperty('koreanName');
    expect(randomCard).toHaveProperty('type');
    expect(randomCard).toHaveProperty('symbol');

    // 추가된 속성 확인
    expect(randomCard).toHaveProperty('isReversed');
    expect(randomCard).toHaveProperty('timestamp');
    expect(typeof randomCard.isReversed).toBe('boolean');
    expect(typeof randomCard.timestamp).toBe('string');

    // 타임스탬프가 유효한 날짜인지 확인
    expect(new Date(randomCard.timestamp)).toBeInstanceOf(Date);
    expect(isNaN(new Date(randomCard.timestamp).getTime())).toBe(false);
  });

  test('getRandomCard가 매번 다른 결과를 반환할 수 있다', () => {
    const results = [];
    // 100번 실행해서 적어도 하나는 다른 결과가 나와야 함
    for (let i = 0; i < 100; i++) {
      results.push(getRandomCard().id);
    }

    const uniqueResults = new Set(results);
    expect(uniqueResults.size).toBeGreaterThan(1);
  });

  test('역방향 카드가 확률적으로 나온다', () => {
    const results = [];
    // 1000번 실행해서 역방향 비율 확인
    for (let i = 0; i < 1000; i++) {
      results.push(getRandomCard().isReversed);
    }

    const reversedCount = results.filter(Boolean).length;
    const reversedRatio = reversedCount / results.length;

    // 30% ± 10% 범위 내에서 역방향이 나와야 함
    expect(reversedRatio).toBeGreaterThan(0.1);
    expect(reversedRatio).toBeLessThan(0.5);
  });
});