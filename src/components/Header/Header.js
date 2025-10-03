import React from 'react';
import './Header.css';

const Header = () => {
  const today = new Date();
  const formatDate = (date) => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">
          <span className="title-icon">🔮</span>
          Daily Tarot
          <span className="title-icon">✨</span>
        </h1>
        <p className="subtitle">오늘의 운세를 확인해보세요</p>
        <div className="date-display">
          <span className="date-icon">📅</span>
          <span className="date-text">{formatDate(today)}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;