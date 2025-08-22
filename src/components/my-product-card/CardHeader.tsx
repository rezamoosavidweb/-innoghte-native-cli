import { Image, StyleSheet } from 'react-native';

import Images from '@/lib/images';
import { BORDER_RADIUS, FONT_SIZES, SPACING } from '@/lib/theme-config';

import { Text, View } from '../base';
import Rate from '../Rate';

type Props = {
  readonly imageUrl?: string;
  readonly title: string;
};

export default function CardHeader({ imageUrl, title }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
        <Rate rating={5} starSize={16} />
      </View>

      <Image
        source={imageUrl ? { uri: imageUrl } : Images.defaultAvatar}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle:"dashed",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SPACING.md,
  },
  image: {
    borderRadius: BORDER_RADIUS.md,
    height: 64,
    width: 64,
  },
  left: {
    flexDirection: 'column',
    gap: SPACING.md,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
  },
});
