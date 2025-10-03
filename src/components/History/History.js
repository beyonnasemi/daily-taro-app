import React, { useState } from 'react';
import HistoryItem from './HistoryItem';
import './History.css';

const History = ({ history, stats, onClearHistory }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (history.length === 0) return null;

  return (
    <section className="history-section">
      <div className="history-header">
        <h3>
          <span className="history-icon">📜</span>
          카드 히스토리
          <span className="history-count">({history.length})</span>
        </h3>
        <button
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '접기 ▲' : '펼치기 ▼'}
        </button>
      </div>

      {isExpanded && (
        <div className="history-content">
          <div className="history-list">
            {history.map((card, index) => (
              <HistoryItem
                key={`${card.id}-${card.timestamp}`}
                card={card}
                index={index}
              />
            ))}
          </div>

          <div className="history-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">총 카드</span>
                <span className="stat-value">{stats.total}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">메이저 아르카나</span>
                <span className="stat-value">{stats.majorArcana}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">역방향</span>
                <span className="stat-value">{stats.reversedPercentage}%</span>
              </div>
            </div>
            <button className="clear-history-btn" onClick={onClearHistory}>
              🗑️ 히스토리 삭제
            </button>
          </div>

          <div className="history-note">
            <p>💡 최근 10개의 카드만 저장됩니다</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default History;