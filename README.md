# 🔮 Daily Taro - 데일리 타로 웹앱

매일 새로운 타로카드로 오늘의 운세를 확인할 수 있는 React 웹애플리케이션입니다.

![Daily Tarot App](https://img.shields.io/badge/React-18.2.0-blue)
![Status](https://img.shields.io/badge/Status-Complete-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ 주요 기능

### 🃏 타로카드 시스템
- **16장의 타로카드** (메이저/마이너 아르카나)
- **정방향/역방향** 해석 (30% 확률로 역방향)
- **카드별 상세 해석** 및 오늘의 메시지

### 📅 일일 운세 시스템
- **하루 한 번** 카드 뽑기 제한
- **오늘의 카드** 자동 복원
- **날짜별 운세** 관리

### 📊 히스토리 & 통계
- **최근 10개 카드** 히스토리 저장
- **카드 타입별 통계** (메이저/마이너 아르카나)
- **역방향 비율** 계산
- **히스토리 관리** (삭제 기능)

### 🎨 사용자 경험
- **반응형 디자인** (모바일/데스크톱)
- **다크 테마** + 골드 악센트
- **부드러운 애니메이션** (카드 뒤집기, 페이드 효과)
- **키보드 단축키** (Space: 카드뽑기, Escape: 리셋)
- **모바일 진동 피드백**

## 🚀 시작하기

### 필수 조건
- Node.js 14.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm start

# 빌드
npm run build

# 테스트 실행
npm test
```

### 배포
```bash
# 프로덕션 빌드
npm run build

# build 폴더를 웹 서버에 배포
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header/         # 헤더 (제목, 날짜)
│   ├── TarotSection/   # 메인 타로 기능
│   ├── History/        # 카드 히스토리
│   └── Footer/         # 푸터
├── data/               # 데이터
│   └── tarotCards.js   # 타로카드 정보
├── hooks/              # 커스텀 훅
│   ├── useTarotHistory.js
│   └── useLocalStorage.js
├── utils/              # 유틸리티 함수
│   ├── dateUtils.js    # 날짜 관련
│   └── animationUtils.js # 애니메이션 관련
└── styles/             # CSS 스타일
```

## 🎯 주요 컴포넌트

### `App.js`
- 전역 상태 관리
- 카드 뽑기 로직
- 키보드 단축키 처리

### `TarotSection`
- 카드 덱 표시
- 카드 뽑기 애니메이션
- 결과 표시

### `History`
- 카드 히스토리 관리
- 통계 표시
- 히스토리 삭제

## 🔧 기술 스택

- **Frontend**: React 18, CSS3
- **상태관리**: React Hooks (useState, useEffect, useCallback)
- **스토리지**: localStorage
- **테스팅**: Jest, React Testing Library
- **스타일링**: CSS Modules, CSS Variables

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: `#0f0f23` (다크 네이비)
- **Secondary**: `#1a1a2e` (미드나잇 블루)
- **Accent**: `#ffd700` (골드)
- **Purple**: `#6a4c93` (미스틱 퍼플)

### 애니메이션
- **카드 뒤집기**: 3D 플립 효과
- **페이드인**: 순차적 등장 애니메이션
- **호버 효과**: 부드러운 변환

## 🧪 테스트

```bash
# 전체 테스트 실행
npm test

# 테스트 커버리지
npm test -- --coverage

# 특정 파일 테스트
npm test App.test.js
```

### 테스트 범위
- 컴포넌트 렌더링 테스트
- 사용자 인터랙션 테스트
- 데이터 유틸리티 함수 테스트
- localStorage 기능 테스트

## 📱 브라우저 지원

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 🔮 사용법

1. **카드 뽑기**: 카드 더미를 클릭하여 오늘의 카드를 뽑습니다
2. **해석 보기**: 뽑힌 카드의 의미와 메시지를 확인합니다
3. **히스토리 확인**: 과거에 뽑은 카드들과 통계를 확인합니다
4. **키보드 사용**:
   - `Space`: 카드 뽑기/새 카드
   - `Escape`: 리셋

## 📋 주의사항

- 타로는 참고용이며, 최종 선택은 본인의 의지에 달려있습니다
- 일일 운세의 정확성을 위해 하루에 한 번만 뽑는 것을 권장합니다
- 모든 데이터는 브라우저의 localStorage에 저장됩니다

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처
nabyy@naver.com
---

