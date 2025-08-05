import 'intl-pluralrules';

import type { Language } from './schema';
import type { InitOptions } from 'i18next'; // ✅ renamed to avoid type conflict

import * as i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import en from './en.json';
import fa from './fa.json';
import { getLanguage } from './utils';

export const defaultNS = 'translation';

export const resources = {
  en: { translation: en },
  fa: { translation: fa },
} as const satisfies Record<Language, unknown>;

// i18n options
const options: InitOptions = {
  compatibilityJSON: 'v4',
  debug: __DEV__,
  defaultNS,
  fallbackLng: 'fa',
  interpolation: {
    escapeValue: false,
  },
  lng: getLanguage() ?? 'fa',
  resources,
};

void i18next.use(initReactI18next).init(options);

const isRTL = i18next.dir() === 'rtl';

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export { isRTL };

export default i18next;
