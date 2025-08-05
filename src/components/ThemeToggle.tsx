import { Button } from 'react-native';

import { useThemeStore } from '@/hooks';

export default function ThemeToggleButton() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  return (
    <Button
      onPress={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    />
  );
}
