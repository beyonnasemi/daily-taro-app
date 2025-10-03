import React, { useState, useEffect } from 'react';
import './DrawnCard.css';

const DrawnCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // 카드가 변경되면 뒤집기 애니메이션 시작
    const timer = setTimeout(() => {
      setIsFlipped(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [card]);

  if (!card) return null;

  return (
    <div className="drawn-card-container">
      <div className="card-reveal-title">
        <h3>🔮 당신의 카드 🔮</h3>
      </div>

      <div className={`drawn-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-inner">
          {/* 카드 뒷면 */}
          <div className="card-back">
            <div className="card-pattern">
              <div className="pattern-circle">✨</div>
              <div className="pattern-text">TAROT</div>
              <div className="pattern-circle">🌙</div>
            </div>
          </div>

          {/* 카드 앞면 */}
          <div className="card-front">
            <div className={`card-orientation ${card.isReversed ? 'reversed' : 'upright'}`}>
              <div className="card-symbol">{card.symbol}</div>
              <div className="card-info">
                <h4 className="card-name">{card.koreanName}</h4>
                <p className="card-english-name">{card.name}</p>
                <div className="card-type">
                  {card.type === 'major' ? '메이저 아르카나' : '마이너 아르카나'}
                </div>
                {card.isReversed && (
                  <div className="reversed-indicator">
                    <span>🔄 역방향</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawnCard;