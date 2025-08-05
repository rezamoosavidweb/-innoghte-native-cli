import en from '@/translations/en.json';
import fa from '@/translations/fa.json';

export const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

export type Language = keyof typeof resources;
