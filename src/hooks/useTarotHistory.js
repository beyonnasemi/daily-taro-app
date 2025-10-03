import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'tarotHistory';
const MAX_HISTORY_SIZE = 10;

export const useTarotHistory = () => {
  const [history, setHistory] = useState([]);

  // 히스토리 로드
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(STORAGE_KEY);
      if (savedHistory) {
        const parsedHistory = JSON.parse(savedHistory);
        setHistory(parsedHistory);
      }
    } catch (error) {
      console.error('히스토리 로드 실패:', error);
      setHistory([]);
    }
  }, []);

  // 히스토리 저장
  const saveHistory = useCallback((newHistory) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    } catch (error) {
      console.error('히스토리 저장 실패:', error);
    }
  }, []);

  // 카드 추가
  const addCardToHistory = useCallback((card) => {
    setHistory(prevHistory => {
      const newHistory = [card, ...prevHistory].slice(0, MAX_HISTORY_SIZE);
      saveHistory(newHistory);
      return newHistory;
    });
  }, [saveHistory]);

  // 히스토리 클리어
  const clearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('히스토리 삭제 실패:', error);
    }
  }, []);

  // 오늘 뽑은 카드 확인
  const getTodaysCard = useCallback(() => {
    if (history.length === 0) return null;

    const today = new Date().toDateString();
    const lastCard = history[0];
    const lastCardDate = new Date(lastCard.timestamp).toDateString();

    return today === lastCardDate ? lastCard : null;
  }, [history]);

  // 오늘 이미 뽑았는지 확인
  const hasDrawnToday = useCallback(() => {
    return getTodaysCard() !== null;
  }, [getTodaysCard]);

  // 통계 정보
  const getStats = useCallback(() => {
    const totalCards = history.length;
    const majorArcana = history.filter(card => card.type === 'major').length;
    const minorArcana = history.filter(card => card.type === 'minor').length;
    const reversedCards = history.filter(card => card.isReversed).length;

    return {
      total: totalCards,
      majorArcana,
      minorArcana,
      reversedCards,
      reversedPercentage: totalCards > 0 ? ((reversedCards / totalCards) * 100).toFixed(1) : 0
    };
  }, [history]);

  return {
    history,
    addCardToHistory,
    clearHistory,
    getTodaysCard,
    hasDrawnToday,
    getStats
  };
};