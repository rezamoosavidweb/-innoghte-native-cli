// src/hooks/useTheme.ts
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
  type Theme,
} from '@react-navigation/native';

import { colors } from '@/lib/theme-config';

import { useThemeStore } from './use-theme-store';

type CustomColors = {
  success: Theme['colors']['background'];
} & Theme['colors'];

type CustomFonts = {
  semibold: Theme['fonts']['bold'];
} & Theme['fonts'];

type CustomTheme = {
  colors: CustomColors;
  fonts: CustomFonts;
} & Omit<Theme, 'colors' | 'fonts'>;

const fonts: CustomFonts = {
  bold: { fontFamily: 'On Regular', fontWeight: '700' },
  heavy: { fontFamily: 'On Regular', fontWeight: '900' },
  medium: { fontFamily: 'On Regular', fontWeight: '500' },
  regular: { fontFamily: 'On Regular', fontWeight: '400' },
  semibold: { fontFamily: 'On Regular', fontWeight: '600' },
};

const DarkTheme: CustomTheme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    background: colors.dark[5],
    border: colors.dark[1],
    card: colors.dark[3],
    primary: colors.primary[800],
    success: colors.success[800],
    text: 'white',
  },
  fonts,
};

const LightTheme: CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    primary: colors.primary[800],
    success: colors.success[800],
  },
  fonts,
};

export function useTheme() {
  const variant = useThemeStore((state) => state.theme);

  return {
    // theme: variant === 'dark' ? DarkTheme : LightTheme,
    theme: DarkTheme,
    variant,
  };
}
