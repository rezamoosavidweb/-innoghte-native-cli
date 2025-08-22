import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@/hooks';

import { BORDER_RADIUS, SPACING } from '@/lib/theme-config';

import { View } from '../View';

type Props = {
  readonly bgColor?: string;
  readonly borderColor?: string;
  readonly children: ReactNode;
};

export default function Card({ bgColor, borderColor, children }: Props) {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor || theme.colors.card,
          borderColor: borderColor || theme.colors.border,
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
