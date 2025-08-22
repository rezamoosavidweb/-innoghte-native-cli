import { StyleSheet, ViewStyle } from 'react-native';

import { translate, TxKeyPath } from '@/translations/utils';

import { SPACING } from '@/lib/theme-config';

import { Text, View } from '../base';

type Props = {
  readonly containerStyle?: ViewStyle;
  readonly icon: React.ReactNode;
  readonly title: TxKeyPath;
  readonly value: React.ReactNode;
};

export default function CardRow({ containerStyle, icon, title, value }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.left}>
        {icon}
        <Text primary>{translate(title)}</Text>
      </View>

      {typeof value === 'string' ? (
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {value}
        </Text>
      ) : (
        value
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.md,
  },
});
