import { PropsWithChildren } from 'react';
import { StyleSheet, Text as TextComponent } from 'react-native';

export function Text({children}:PropsWithChildren) {
  return <TextComponent style={styles.customText}>{children}</TextComponent>;
}
const styles = StyleSheet.create({
  customText: {
    fontFamily: 'On Regular',
    fontSize: 46,
  },
});
