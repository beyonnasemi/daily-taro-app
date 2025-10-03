export const tarotCards = [
  // 메이저 아르카나
  {
    id: 0,
    name: "The Fool",
    koreanName: "바보",
    type: "major",
    symbol: "🃏",
    upright: {
      meaning: "새로운 시작, 순수함, 모험",
      message: "새로운 여행을 시작할 때입니다. 순수한 마음으로 도전해보세요."
    },
    reversed: {
      meaning: "경솔함, 무모함, 준비 부족",
      message: "조금 더 신중하게 계획을 세우고 행동하세요."
    }
  },
  {
    id: 1,
    name: "The Magician",
    koreanName: "마법사",
    type: "major",
    symbol: "🎭",
    upright: {
      meaning: "창조력, 의지력, 실행력",
      message: "당신의 능력을 믿고 목표를 향해 나아가세요."
    },
    reversed: {
      meaning: "자만, 허세, 실행력 부족",
      message: "겸손함을 잃지 말고 실제 행동으로 보여주세요."
    }
  },
  {
    id: 2,
    name: "The High Priestess",
    koreanName: "여교황",
    type: "major",
    symbol: "🌙",
    upright: {
      meaning: "직감, 지혜, 내적 평화",
      message: "내면의 목소리에 귀 기울이고 직감을 따르세요."
    },
    reversed: {
      meaning: "직감 무시, 혼란, 외적 영향",
      message: "너무 외부의 의견에만 의존하지 말고 내면을 살펴보세요."
    }
  },
  {
    id: 3,
    name: "The Empress",
    koreanName: "여황제",
    type: "major",
    symbol: "👑",
    upright: {
      meaning: "창조성, 풍요로움, 모성",
      message: "풍요와 창조의 에너지가 당신을 감싸고 있습니다."
    },
    reversed: {
      meaning: "의존성, 과보호, 창조력 부족",
      message: "독립성을 기르고 자신의 창조력을 발휘해보세요."
    }
  },
  {
    id: 4,
    name: "The Emperor",
    koreanName: "황제",
    type: "major",
    symbol: "⚔️",
    upright: {
      meaning: "권위, 안정성, 리더십",
      message: "강한 의지와 리더십으로 상황을 주도하세요."
    },
    reversed: {
      meaning: "독재, 경직성, 권위 남용",
      message: "유연성을 가지고 타인의 의견도 수용하세요."
    }
  },
  {
    id: 5,
    name: "The Hierophant",
    koreanName: "교황",
    type: "major",
    symbol: "⛪",
    upright: {
      meaning: "전통, 지혜, 멘토",
      message: "전통과 규칙을 존중하며 배움의 자세를 가지세요."
    },
    reversed: {
      meaning: "반항, 독단적, 규칙 거부",
      message: "때로는 기존의 틀을 벗어나는 것도 필요합니다."
    }
  },
  {
    id: 6,
    name: "The Lovers",
    koreanName: "연인",
    type: "major",
    symbol: "💕",
    upright: {
      meaning: "사랑, 조화, 선택",
      message: "마음으로 느끼는 것을 따르며 조화로운 관계를 만드세요."
    },
    reversed: {
      meaning: "불화, 선택의 어려움, 관계 문제",
      message: "관계에서 소통의 중요성을 잊지 마세요."
    }
  },
  {
    id: 7,
    name: "The Chariot",
    koreanName: "전차",
    type: "major",
    symbol: "🏇",
    upright: {
      meaning: "승리, 의지력, 전진",
      message: "강한 의지로 목표를 향해 나아가면 승리할 수 있습니다."
    },
    reversed: {
      meaning: "통제력 상실, 방향성 혼란",
      message: "목표를 명확히 하고 감정을 조절하세요."
    }
  },
  {
    id: 8,
    name: "Strength",
    koreanName: "힘",
    type: "major",
    symbol: "🦁",
    upright: {
      meaning: "내적 힘, 용기, 인내",
      message: "부드러운 힘으로 어려움을 극복할 수 있습니다."
    },
    reversed: {
      meaning: "약함, 의심, 자신감 부족",
      message: "자신을 믿고 내면의 힘을 발휘하세요."
    }
  },
  {
    id: 9,
    name: "The Hermit",
    koreanName: "은둔자",
    type: "major",
    symbol: "🕯️",
    upright: {
      meaning: "성찰, 지혜, 내적 탐구",
      message: "혼자만의 시간을 가지며 내면을 돌아보세요."
    },
    reversed: {
      meaning: "고립, 외로움, 내향성 과다",
      message: "때로는 외부와의 소통도 필요합니다."
    }
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    koreanName: "운명의 수레바퀴",
    type: "major",
    symbol: "🎰",
    upright: {
      meaning: "운명, 변화, 기회",
      message: "변화의 바람이 불고 있습니다. 기회를 놓치지 마세요."
    },
    reversed: {
      meaning: "불운, 정체, 외부 통제",
      message: "어려운 시기이지만 곧 좋은 변화가 올 것입니다."
    }
  },
  // 컵(성배) 수트 - 감정과 관련
  {
    id: 11,
    name: "Ace of Cups",
    koreanName: "컵 에이스",
    type: "minor",
    symbol: "🏆",
    upright: {
      meaning: "새로운 감정, 사랑의 시작",
      message: "마음을 열고 새로운 감정을 받아들이세요."
    },
    reversed: {
      meaning: "감정 차단, 사랑의 상실",
      message: "감정을 억누르지 말고 표현해보세요."
    }
  },
  {
    id: 12,
    name: "Two of Cups",
    koreanName: "컵 2",
    type: "minor",
    symbol: "🥂",
    upright: {
      meaning: "파트너십, 조화, 상호 이해",
      message: "좋은 관계가 형성되고 있습니다."
    },
    reversed: {
      meaning: "불화, 소통 문제",
      message: "서로의 마음을 이해하려고 노력하세요."
    }
  },
  // 지팡이 수트 - 열정과 창조
  {
    id: 13,
    name: "Ace of Wands",
    koreanName: "지팡이 에이스",
    type: "minor",
    symbol: "🔥",
    upright: {
      meaning: "새로운 시작, 창조적 에너지",
      message: "열정적으로 새로운 프로젝트를 시작하세요."
    },
    reversed: {
      meaning: "에너지 부족, 지연",
      message: "동기를 되찾고 다시 시작하세요."
    }
  },
  // 검 수트 - 사고와 의사소통
  {
    id: 14,
    name: "Ace of Swords",
    koreanName: "검 에이스",
    type: "minor",
    symbol: "⚔️",
    upright: {
      meaning: "명확한 사고, 진실, 새로운 아이디어",
      message: "명확한 사고로 문제를 해결할 수 있습니다."
    },
    reversed: {
      meaning: "혼란, 잘못된 정보",
      message: "정보를 다시 확인하고 신중하게 판단하세요."
    }
  },
  // 펜타클 수트 - 물질과 현실
  {
    id: 15,
    name: "Ace of Pentacles",
    koreanName: "펜타클 에이스",
    type: "minor",
    symbol: "💰",
    upright: {
      meaning: "새로운 기회, 물질적 성공",
      message: "좋은 기회가 찾아올 것입니다."
    },
    reversed: {
      meaning: "기회 상실, 물질적 어려움",
      message: "새로운 관점으로 기회를 찾아보세요."
    }
  }
];

export const getRandomCard = () => {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const isReversed = Math.random() < 0.3; // 30% 확률로 역방향
  return {
    ...tarotCards[randomIndex],
    isReversed,
    timestamp: new Date().toISOString()
  };
};