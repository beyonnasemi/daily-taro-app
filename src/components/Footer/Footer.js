import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>
            <span className="footer-icon">🔮</span>
            Daily Tarot - 매일 새로운 인사이트를 발견하세요
            <span className="footer-icon">✨</span>
          </p>
        </div>

        <div className="footer-note">
          <p>
            타로는 자기 성찰과 영감을 위한 도구입니다.
            모든 결정과 선택은 본인의 의지와 판단에 따라 하시기 바랍니다.
          </p>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2024 Daily Tarot App. Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;