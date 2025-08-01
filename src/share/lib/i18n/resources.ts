import en from "@/share/translations/en.json";
import fa from "@/share/translations/fa.json";

export const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

export type Language = keyof typeof resources;
