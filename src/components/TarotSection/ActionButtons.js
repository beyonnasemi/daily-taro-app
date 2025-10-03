import React from 'react';
import './ActionButtons.css';

const ActionButtons = ({ onDrawAgain, onReset, hasDrawnToday, isDrawing }) => {
  return (
    <div className="action-buttons">
      <button
        className="action-btn reset-btn"
        onClick={onReset}
      >
        <span className="btn-icon">🔄</span>
        <span className="btn-text">다시 보기</span>
      </button>

      <button
        className={`action-btn draw-btn ${isDrawing ? 'disabled' : ''}`}
        onClick={onDrawAgain}
        disabled={isDrawing}
        title={isDrawing ? '카드를 뽑는 중...' : '새로운 카드 뽑기'}
      >
        <span className="btn-icon">🃏</span>
        <span className="btn-text">
          {isDrawing ? '뽑는 중...' : '다른 카드'}
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;