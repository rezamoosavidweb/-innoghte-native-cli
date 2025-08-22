import { Dimensions, Image, StyleSheet } from 'react-native';

import Images from '@/lib/images';
import { BORDER_RADIUS } from '@/lib/theme-config';

type Props = {
  readonly imageUrl?: string;
};

const windowHeight = Dimensions.get('window').height;

export default function CardImage({ imageUrl }: Props) {
  return (
    <Image
      source={imageUrl ? { uri: imageUrl } : Images.defaultAvatar}
      style={styles.image}
    />
  );
}

const IMAGE_HEIGHT_RATIO = 0.5;
const styles = StyleSheet.create({
  image: {
    borderRadius: BORDER_RADIUS.full,
    height: IMAGE_HEIGHT_RATIO * windowHeight,
    width: '100%',
  },
});
