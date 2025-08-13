import { ReactNode } from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { translate, TxKeyPath } from '@/translations/utils';

import { Text, View } from '@/components/base';
import { ChevronIcon } from '@/components/icons';

import { SPACING } from '@/lib/theme-config';

export default function ProfileMenuItem({
  containerStyle,
  icon,
  label,
  textStyle,
}: {
  readonly containerStyle?: StyleProp<ViewStyle>;
  readonly icon: ReactNode;
  readonly label: TxKeyPath;
  readonly textStyle?: StyleProp<TextStyle>;
}) {
  return (
    <View style={[styles.row, containerStyle]}>
      <View style={styles.leftRow}>
        {icon}
        <Text style={[styles.label, textStyle]}>{translate(label)}</Text>
      </View>
      <ChevronIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginLeft: 8,
  },
  leftRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.base,
  },
});
