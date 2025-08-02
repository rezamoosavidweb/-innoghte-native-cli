import 'intl-pluralrules';

import type { Language } from '@/hooks/language/schema';

import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import en from './en-EN.json';
import fa from './fa-IR.json';
import { getLanguage } from './utils';

export const defaultNS = 'boilerplate';

export const resources = {
  'en-EN': en,
  'fa-IR': fa,
} as const satisfies Record<Language, unknown>;

// i18n options
const options: InitOptions = {
  compatibilityJSON: 'v4',
  defaultNS,
  fallbackLng: 'fa-IR',
  interpolation: {
    escapeValue: false,
  },
  lng: getLanguage() ?? 'fa-IR',
  resources,
};

void i18n.use(initReactI18next).init(options);

i18n.services.formatter?.add(
  'capitalize',
  (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
);

const isRTL = i18n.dir() === 'rtl';
console.warn({ isRTL });

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export { isRTL };

export { default } from 'i18next';
