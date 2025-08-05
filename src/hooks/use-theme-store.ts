import { Appearance } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { create } from 'zustand';

import { THEME } from '@/constants';

export type ThemeVariant = 'dark' | 'light';

const storage = new MMKV();

type ThemeState = {
  initTheme: () => void;
  setTheme: (variant: ThemeVariant) => void;
  theme: ThemeVariant;
};

export const useThemeStore = create<ThemeState>((set) => ({
  initTheme: () => {
    const cached = storage.getString(THEME) as null | ThemeVariant;
    const system = Appearance.getColorScheme() as null | ThemeVariant;
    const fallback = system ?? 'dark';
    set({ theme: cached ?? fallback });
  },

  setTheme: (variant) => {
    storage.set(THEME, variant);
    set({ theme: variant });
  },

  theme: 'dark',
}));
