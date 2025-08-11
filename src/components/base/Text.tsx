import { Text as TextComponent, TextProps } from 'react-native';

import { useTheme } from '@/hooks';

import { FONT_SIZES } from '@/lib/theme-config';

type Props = {
  readonly primary?: boolean;
  readonly weight?: 'bold' | 'heavy' | 'medium' | 'regular' | 'semibold';
} & TextProps;
export function Text({
  children,
  primary = false,
  style,
  weight = 'regular',
  ...rest
}: Props) {
  const { theme } = useTheme();
  return (
    <TextComponent
      style={[
        { ...theme.fonts[weight], fontSize: FONT_SIZES.base },
        { color: primary ? theme.colors.primary : theme.colors.text },
        style,
      ]}
      {...rest}
    >
      {children}
    </TextComponent>
  );
}
