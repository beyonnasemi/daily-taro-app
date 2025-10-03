import React from 'react';
import './HistoryItem.css';

const HistoryItem = ({ card, index }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('ko-KR', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const meaning = card.isReversed ? card.reversed : card.upright;

  return (
    <div className={`history-item ${index === 0 ? 'latest' : ''}`}>
      <div className="item-header">
        <div className="item-info">
          <span className="item-symbol">{card.symbol}</span>
          <div className="item-details">
            <h4 className="item-name">
              {card.koreanName}
              {card.isReversed && <span className="reversed-tag">역방향</span>}
            </h4>
            <p className="item-date">{formatDate(card.timestamp)}</p>
          </div>
        </div>
        {index === 0 && <span className="latest-badge">최신</span>}
      </div>

      <div className="item-meaning">
        <p className="meaning-summary">{meaning.meaning}</p>
      </div>
    </div>
  );
};

export default HistoryItem;