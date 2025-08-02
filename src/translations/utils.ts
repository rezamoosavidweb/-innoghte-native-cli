/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
 
/* eslint-disable unicorn/prevent-abbreviations */
import type { Language, resources } from './resources';
import type { RecursiveKeyOf } from './types';
import type TranslateOptions from 'i18next';

import i18n from 'i18next';
import memoize from 'lodash.memoize';
import { useCallback } from 'react';
import { I18nManager, NativeModules } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import RNRestart from 'react-native-restart';

import { SupportedLanguages } from '@/hooks/language/schema';

import { storage } from '../storage';

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;
type DefaultLocale = typeof resources.en.translation;

export const LOCAL = 'local';

export const getLanguage = () => storage.getString(LOCAL); // 'Marc' getItem<Language | undefined>(LOCAL);

export const translate = memoize(
  (key: TxKeyPath, options = undefined) =>
    i18n.t(key, options) as unknown as string,
  (key: TxKeyPath, options: typeof TranslateOptions) =>
    options ? key + JSON.stringify(options) : key,
);

export const changeLanguage = (lang: SupportedLanguages) => {
  i18n.changeLanguage(lang);
  if (lang === SupportedLanguages.FA_IR) {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }
  // if (Platform.OS === 'ios' || Platform.OS === 'android') {
  if (__DEV__) NativeModules.DevSettings.reload();
  else RNRestart.restart();
  // } else if (Platform.OS === 'web') {
  //   globalThis.location.reload();
  // }
};

export const useSelectedLanguage = () => {
  const [language, setLang] = useMMKVString(LOCAL);

  const setLanguage = useCallback(
    (lang: SupportedLanguages) => {
      setLang(lang);
      if (lang !== undefined) changeLanguage(lang);
    },
    [setLang],
  );

  return { language: language as Language, setLanguage };
};

export const toggleLanguage = () => {
  changeLanguage(
    i18n.language === (SupportedLanguages.EN_EN as string)
      ? SupportedLanguages.FA_IR
      : SupportedLanguages.EN_EN,
  );
};
