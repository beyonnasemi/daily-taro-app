import React from 'react';
import './CardDeck.css';

const CardDeck = ({ onDrawCard, hasDrawnToday, isDrawing }) => {
  const handleCardClick = () => {
    if (hasDrawnToday || isDrawing) return;
    onDrawCard();
  };

  return (
    <div className="card-deck">
      <div className="deck-title">
        <h2>🃏 카드를 선택하세요 🃏</h2>
        <p>마음을 비우고 직감으로 카드를 클릭해주세요</p>
      </div>

      <div className="cards-container">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`tarot-card ${isDrawing ? 'animating' : ''} ${
              hasDrawnToday ? 'disabled' : ''
            }`}
            onClick={handleCardClick}
            style={{
              transform: `translateX(${index * -5}px) rotate(${index * 2 - 4}deg)`,
              zIndex: 5 - index
            }}
          >
            <div className="card-back">
              <div className="card-pattern">
                <div className="pattern-circle">✨</div>
                <div className="pattern-text">TAROT</div>
                <div className="pattern-circle">🌙</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!hasDrawnToday && (
        <div className="deck-instructions">
          <p>✨ 카드를 클릭하여 오늘의 운세를 확인하세요 ✨</p>
        </div>
      )}

      {isDrawing && (
        <div className="drawing-animation">
          <div className="sparkles">✨ 카드를 뽑는 중... ✨</div>
        </div>
      )}
    </div>
  );
};

export default CardDeck;