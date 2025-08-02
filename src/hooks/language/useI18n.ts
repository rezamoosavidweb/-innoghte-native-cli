/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import i18next from 'i18next';
import { I18nManager, NativeModules } from 'react-native';
import RNRestart from 'react-native-restart';

import { SupportedLanguages } from './schema';

const changeLanguage = (lang: SupportedLanguages) => {
  void i18next.changeLanguage(lang);
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

const toggleLanguage = () => {
  void i18next.changeLanguage(
    i18next.language === (SupportedLanguages.EN_EN as string)
      ? SupportedLanguages.FA_IR
      : SupportedLanguages.EN_EN,
  );
};

export const useI18n = () => {
  return { changeLanguage, toggleLanguage };
};
