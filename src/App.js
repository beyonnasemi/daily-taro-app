import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header';
import TarotSection from './components/TarotSection/TarotSection';
import History from './components/History/History';
import Footer from './components/Footer/Footer';
import { getRandomCard } from './data/tarotCards';
import { useTarotHistory } from './hooks/useTarotHistory';
import { useLocalStorage } from './hooks/useLocalStorage';
import { vibrateEffect } from './utils/animationUtils';
import './App.css';

function App() {
  const [currentCard, setCurrentCard] = useState(null);
  const [isCardDrawn, setIsCardDrawn] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [appSettings, setAppSettings] = useLocalStorage('tarotAppSettings', {
    soundEnabled: true,
    vibrateEnabled: true,
    animationsEnabled: true
  });

  // 커스텀 훅으로 히스토리 관리
  const {
    history,
    addCardToHistory,
    clearHistory,
    getTodaysCard,
    hasDrawnToday,
    getStats
  } = useTarotHistory();

  // 앱 초기화 시 오늘의 카드 확인
  useEffect(() => {
    const todaysCard = getTodaysCard();
    if (todaysCard) {
      setCurrentCard(todaysCard);
      setIsCardDrawn(true);
    }
  }, [getTodaysCard]);

  // 카드 뽑기 애니메이션 및 로직
  const drawCard = useCallback(async () => {
    if (isDrawing) return;

    setIsDrawing(true);

    // 진동 효과 (모바일)
    if (appSettings.vibrateEnabled) {
      vibrateEffect([50, 100, 50]);
    }

    try {
      // 애니메이션 지연
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newCard = getRandomCard();
      setCurrentCard(newCard);
      setIsCardDrawn(true);

      // 히스토리에 추가
      addCardToHistory(newCard);

      // 카드 뽑기 완료 진동
      if (appSettings.vibrateEnabled) {
        setTimeout(() => vibrateEffect(200), 500);
      }

    } catch (error) {
      console.error('카드 뽑기 오류:', error);
    } finally {
      setIsDrawing(false);
    }
  }, [isDrawing, appSettings.vibrateEnabled, addCardToHistory]);

  // 리셋 기능
  const resetCard = useCallback(() => {
    setCurrentCard(null);
    setIsCardDrawn(false);
    setIsDrawing(false);
  }, []);

  // 새로운 카드 뽑기 (하루 제한 무시)
  const drawNewCard = useCallback(async () => {
    if (hasDrawnToday()) {
      const confirmDraw = window.confirm(
        '오늘 이미 카드를 뽑으셨습니다.\n' +
        '새로운 카드를 뽑으시겠습니까?\n' +
        '(일일 운세의 정확성을 위해 하루에 한 번만 뽑는 것을 권장합니다)'
      );

      if (!confirmDraw) return;
    }

    await drawCard();
  }, [hasDrawnToday, drawCard]);

  // 히스토리 클리어 확인
  const handleClearHistory = useCallback(() => {
    const confirmClear = window.confirm(
      '모든 카드 히스토리를 삭제하시겠습니까?\n' +
      '이 작업은 되돌릴 수 없습니다.'
    );

    if (confirmClear) {
      clearHistory();
      // 현재 카드도 리셋할지 확인
      const resetCurrent = window.confirm('현재 카드도 리셋하시겠습니까?');
      if (resetCurrent) {
        resetCard();
      }
    }
  }, [clearHistory, resetCard]);

  // 설정 변경 핸들러
  const updateSettings = useCallback((newSettings) => {
    setAppSettings(prev => ({ ...prev, ...newSettings }));
  }, [setAppSettings]);

  // 키보드 단축키
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Escape: 리셋
      if (event.key === 'Escape') {
        resetCard();
      }
      // Space: 카드 뽑기/새 카드
      else if (event.key === ' ' && !isDrawing) {
        event.preventDefault();
        if (isCardDrawn) {
          drawNewCard();
        } else {
          drawCard();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isCardDrawn, isDrawing, drawCard, drawNewCard, resetCard]);

  // 앱 상태 객체
  const appState = {
    currentCard,
    isCardDrawn,
    isDrawing,
    hasDrawnToday: hasDrawnToday(),
    stats: getStats(),
    settings: appSettings
  };

  // 액션 객체
  const actions = {
    drawCard: isCardDrawn ? drawNewCard : drawCard,
    resetCard,
    clearHistory: handleClearHistory,
    updateSettings
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <TarotSection
          {...appState}
          {...actions}
        />

        <History
          history={history}
          stats={appState.stats}
          onClearHistory={actions.clearHistory}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;