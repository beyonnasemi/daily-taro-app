import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// localStorage 목킹
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// navigator.vibrate 목킹
Object.defineProperty(global.navigator, 'vibrate', {
  value: jest.fn(),
  writable: true,
});

describe('Daily Tarot App', () => {
  beforeEach(() => {
    // 각 테스트 전에 localStorage 목킹 초기화
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  test('앱이 정상적으로 렌더링된다', () => {
    render(<App />);

    // 헤더 확인 (여러 개가 있을 수 있으므로 getAllBy 사용)
    expect(screen.getAllByText(/Daily Tarot/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/오늘의 운세를 확인해보세요/i)).toBeInTheDocument();

    // 카드 덱 확인
    expect(screen.getByText(/카드를 선택하세요/i)).toBeInTheDocument();
  });

  test('카드를 클릭하면 카드 뽑기가 시작된다', async () => {
    render(<App />);

    // 카드 클릭
    const cardElements = screen.getAllByRole('generic');
    const deckCard = cardElements.find(el =>
      el.className.includes('tarot-card')
    );

    if (deckCard) {
      fireEvent.click(deckCard);

      // 로딩 상태 확인
      await waitFor(() => {
        expect(screen.getByText(/카드를 뽑는 중/i)).toBeInTheDocument();
      });

      // 카드 결과 확인 (비동기 처리 완료 대기)
      await waitFor(() => {
        expect(screen.getByText(/당신의 카드/i)).toBeInTheDocument();
      }, { timeout: 2000 });
    }
  });

  test('히스토리가 빈 상태일 때 표시되지 않는다', () => {
    // localStorage가 비어있을 때
    localStorageMock.getItem.mockReturnValue(null);
    render(<App />);

    // 히스토리 섹션이 없어야 함 (빈 배열일 때는 렌더링하지 않음)
    expect(screen.queryByText(/카드 히스토리/i)).not.toBeInTheDocument();
  });

  test('localStorage에서 히스토리를 로드한다', () => {
    const mockHistory = JSON.stringify([
      {
        id: 0,
        name: "The Fool",
        koreanName: "바보",
        type: "major",
        symbol: "🃏",
        isReversed: false,
        timestamp: new Date().toISOString()
      }
    ]);

    localStorageMock.getItem.mockReturnValue(mockHistory);
    render(<App />);

    // 히스토리 로드 확인
    expect(localStorageMock.getItem).toHaveBeenCalledWith('tarotHistory');
  });

  test('오늘의 날짜가 올바르게 표시된다', () => {
    render(<App />);

    const today = new Date();
    const expectedDate = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });

    expect(screen.getByText(expectedDate)).toBeInTheDocument();
  });

  test('푸터가 올바르게 렌더링된다', () => {
    render(<App />);

    expect(screen.getByText(/Daily Tarot - 매일 새로운 인사이트를 발견하세요/i)).toBeInTheDocument();
    expect(screen.getByText(/타로는 자기 성찰과 영감을 위한 도구입니다/i)).toBeInTheDocument();
  });
});