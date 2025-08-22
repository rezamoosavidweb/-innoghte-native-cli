import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { useTheme } from '@/hooks';
import { translate, TxKeyPath } from '@/translations/utils';

import { FONT_SIZES, SPACING } from '@/lib/theme-config';

export default function Divider({
  borderColor,
  containerStyle,
  label,
}: {
  readonly borderColor?: string;
  readonly containerStyle?: StyleProp<ViewStyle>;
  readonly label?: TxKeyPath;
}) {
  const { theme } = useTheme();
  return (
    <View style={containerStyle}>
      <View style={styles.row}>
        {label ? <Text style={styles.text}>{translate(label)}</Text> : null}
        <View
          style={[
            styles.line,
            { borderColor: borderColor || theme?.colors?.border },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    borderTopWidth: 1,
    flex: 1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#888',
    fontSize: FONT_SIZES.md,
    marginRight: SPACING.sm,
  },
});
