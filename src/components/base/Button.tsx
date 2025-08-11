import { Theme } from '@react-navigation/native';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  TextProps,
  ViewProps,
} from 'react-native';

import { useTheme } from '@/hooks';

import { SPACING } from '@/lib/theme-config';

import { Text } from './Text';

export type ButtonProps = {
  readonly color?: 'primary' | 'success';
  readonly containerStyle?: ViewProps['style'];
  readonly flex?: number;
  readonly fullWidth?: boolean;
  readonly indicatorColor?: string;
  readonly label: string;
  readonly loading?: boolean;
  readonly rounded?: number;
  readonly textStyle?: TextProps['style'];
  readonly variant?: 'fill' | 'outlined' | 'text';
} & PressableProps;

const getStyles = (
  theme: Theme,
  variant: ButtonProps['variant'],
  color: ButtonProps['color'],
) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        variant === 'fill'
          ? theme.colors[color as keyof Theme['colors']]
          : 'transparent',
      borderColor: theme.colors[color as keyof Theme['colors']],
      borderRadius: SPACING.sm,
      borderWidth: 1,
      padding: 10,
    },
    text: {
      color:
        variant === 'fill'
          ? theme.colors.text
          : theme.colors[color as keyof Theme['colors']],
      textAlign: 'center',
    },
  });

export function Button({
  color = 'primary',
  containerStyle,
  disabled,
  flex,
  fullWidth,
  indicatorColor = '#fff',
  label,
  loading = false,
  rounded,
  textStyle,
  variant = 'fill',
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();
  const generateStyle = getStyles(theme, variant, color);
  const genContainerStyle = generateStyle.container;
  const genTextStyle = generateStyle.text;
  return (
    <Pressable
      disabled={disabled || loading}
      style={[
        genContainerStyle,
        fullWidth && { width: '100%' },
        !!flex && { flex },
        !!rounded && { borderRadius: rounded },
        containerStyle,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={indicatorColor} size="small" />
      ) : (
        <Text style={[genTextStyle, textStyle]}>{label}</Text>
      )}
    </Pressable>
  );
}
