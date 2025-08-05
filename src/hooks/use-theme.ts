// src/hooks/useTheme.ts
import {
    DarkTheme as _DarkTheme,
    DefaultTheme,
    type Theme,
} from '@react-navigation/native';

import colors from '@/lib/colors';

import { useThemeStore } from './use-theme-store';

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    background: colors.dark[5],
    border: colors.charcoal[500],
    card: colors.charcoal[850],
    primary: colors.primary[800],
    text: colors.charcoal[100],
  },
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    primary: colors.primary[800],
  },
};

export function useTheme() {
  const variant = useThemeStore((state) => state.theme);

  return {
    navigationTheme: variant === 'dark' ? DarkTheme : LightTheme,
    variant,
  };
}
