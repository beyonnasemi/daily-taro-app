import React from 'react';
import CardDeck from './CardDeck';
import DrawnCard from './DrawnCard';
import CardMeaning from './CardMeaning';
import ActionButtons from './ActionButtons';
import './TarotSection.css';

const TarotSection = ({
  currentCard,
  isCardDrawn,
  isDrawing,
  hasDrawnToday,
  drawCard,
  resetCard
}) => {
  return (
    <section className="tarot-section">
      <div className="tarot-container">
        {!isCardDrawn ? (
          <div className="draw-phase">
            <CardDeck
              onDrawCard={drawCard}
              hasDrawnToday={hasDrawnToday}
              isDrawing={isDrawing}
            />
            {hasDrawnToday && (
              <div className="today-notice">
                <p>💫 오늘은 이미 카드를 뽑으셨습니다</p>
                <p>내일 다시 새로운 운세를 확인해보세요!</p>
              </div>
            )}
          </div>
        ) : (
          <div className="result-phase">
            <DrawnCard card={currentCard} />
            <CardMeaning card={currentCard} />
            <ActionButtons
              onDrawAgain={drawCard}
              onReset={resetCard}
              hasDrawnToday={hasDrawnToday}
              isDrawing={isDrawing}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TarotSection;