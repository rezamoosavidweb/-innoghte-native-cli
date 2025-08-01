import { I18nManager, NativeModules, Platform } from "react-native";
import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";

import { resources } from "./resources";
import { getLanguage } from "./utils";
export * from "./utils";

// Get device locale
const deviceLanguage =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager?.settings?.AppleLocale ||
      NativeModules.SettingsManager?.settings?.AppleLanguages?.[0]
    : NativeModules.I18nManager?.localeIdentifier;

// Normalize locale (e.g., 'en_US' → 'en')
const locale = deviceLanguage?.split(/[_-]/)?.[0] || "en";

// i18next init options
const options: InitOptions = {
  resources,
  lng: getLanguage() || locale,
  fallbackLng: "fa",
  compatibilityJSON: "v4", // use "v4", not "v3"
  interpolation: {
    escapeValue: false,
  },
};

// Initialize i18n
i18n.use(initReactI18next).init(options);

// Is it a RTL language?
export const isRTL: boolean = i18n.dir() === "rtl";

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export default i18n;
