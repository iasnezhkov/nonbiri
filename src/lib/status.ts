export const STATUS = {
  en: {
    'in-development': 'In development',
    testing: 'Final testing',
    released: 'Available',
  },
  ja: {
    'in-development': '開発中',
    testing: '最終テスト中',
    released: '公開中',
  },
} as const;

export type Status = keyof typeof STATUS.en;
