import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@/hooks';

import { BORDER_RADIUS, SPACING } from '@/lib/theme-config';

import { View } from './View';

export default function Card({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    padding: SPACING.md,
  },
});
