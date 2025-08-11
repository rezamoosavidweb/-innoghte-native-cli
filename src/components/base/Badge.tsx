import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Text } from './Text';
import { View } from './View';

type Props = {
  readonly containerStyle?: ViewStyle;
  readonly textStyle?: TextStyle;
  readonly title: string;
};

export function Badge({ containerStyle, textStyle, title }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(248, 147, 0, 0.08)', // #F8930014 with alpha ~0.08
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
