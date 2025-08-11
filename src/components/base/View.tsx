import { View as ViewComponent, ViewProps } from 'react-native';

import { useTheme } from '@/hooks';

export function View({ children, style, ...rest }: ViewProps) {
  const { theme } = useTheme();
  return (
    <ViewComponent
      style={[{ borderColor: theme.colors.border }, style]}
      {...rest}
    >
      {children}
    </ViewComponent>
  );
}
