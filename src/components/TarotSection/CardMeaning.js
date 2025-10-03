import React from 'react';
import './CardMeaning.css';

const CardMeaning = ({ card }) => {
  if (!card) return null;

  const meaning = card.isReversed ? card.reversed : card.upright;

  return (
    <div className="card-meaning">
      <div className="meaning-header">
        <h3>
          {card.isReversed ? '🔄 역방향 해석' : '⬆️ 정방향 해석'}
        </h3>
      </div>

      <div className="meaning-content">
        <div className="meaning-keywords">
          <h4>🔑 핵심 키워드</h4>
          <p className="keywords">{meaning.meaning}</p>
        </div>

        <div className="meaning-message">
          <h4>💬 오늘의 메시지</h4>
          <p className="message">{meaning.message}</p>
        </div>

        <div className="meaning-advice">
          <h4>✨ 조언</h4>
          <p className="advice">
            {card.isReversed
              ? "역방향 카드는 내면을 돌아보고 균형을 찾으라는 신호입니다."
              : "정방향 카드는 긍정적인 에너지와 함께 앞으로 나아가라는 메시지입니다."
            }
          </p>
        </div>
      </div>

      <div className="meaning-footer">
        <p className="footer-text">
          🌟 타로는 참고용이며, 최종 선택은 본인의 의지에 달려있습니다 🌟
        </p>
      </div>
    </div>
  );
};

export default CardMeaning;