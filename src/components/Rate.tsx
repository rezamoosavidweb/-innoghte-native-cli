import { useId, useState } from 'react';
import { I18nManager, Pressable, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { View } from './base';

type StarRatingProps = {
  readonly activeColor?: string;
  readonly dir?: 'ltr' | 'rtl';
  readonly inactiveColor?: string;
  readonly onChange?: (rate: number) => void;
  readonly rating: number;
  readonly starSize?: number;
  readonly totalStars?: number;
};

const FULL_PERCENTAGE = 100;
const DEFAULT_STAR_SIZE = 20;
export default function StarRating({
  activeColor = '#ffc107',
  dir = I18nManager.isRTL ? 'rtl' : 'ltr',
  inactiveColor = '#e4e5e9',
  onChange,
  rating,
  starSize = DEFAULT_STAR_SIZE,
  totalStars = 5,
}: StarRatingProps) {
  const uniqueId = useId();
  const [hovered, setHovered] = useState<null | number>(null);

  const effectiveRating =
    typeof onChange === 'function' && hovered !== null ? hovered : rating;

  const renderStar = (index: number) => {
    const fillPercentage =
      index + 1 <= effectiveRating
        ? FULL_PERCENTAGE
        : index < effectiveRating
          ? (effectiveRating - index) * FULL_PERCENTAGE
          : 0;

    return (
      <Pressable
        disabled={!onChange}
        key={index}
        onHoverIn={() => {
          setHovered(index + 1);
        }}
        onHoverOut={() => {
          setHovered(null);
        }}
        onPress={() => onChange?.(index + 1)}
      >
        <Svg
          height={starSize}
          style={{
            transform: [{ rotateY: dir === 'rtl' ? '180deg' : '0deg' }],
          }}
          viewBox="0 0 10 11"
          width={starSize}
        >
          <Defs>
            <LinearGradient
              id={`${uniqueId}-grad-${index}`}
              x1="0%"
              x2="100%"
              y1="0%"
              y2="0%"
            >
              <Stop offset={`${fillPercentage}%`} stopColor={activeColor} />
              <Stop offset={`${fillPercentage}%`} stopColor={inactiveColor} />
            </LinearGradient>
          </Defs>
          <Path
            d="M3.57658 2.20419C4.20991 1.06806 4.52657 0.5 5 0.5C5.47343 0.5 5.79009 1.06806 6.42342 2.20419L6.58727 2.49812C6.76724 2.82097 6.85722 2.98239 6.99753 3.0889C7.13783 3.19541 7.31257 3.23495 7.66206 3.31402L7.98023 3.38601C9.21007 3.66428 9.82499 3.80341 9.97129 4.27387C10.1176 4.74432 9.69838 5.23454 8.85995 6.21496L8.64304 6.46861C8.40479 6.74722 8.28566 6.88652 8.23207 7.05886C8.17848 7.23119 8.19649 7.41706 8.23251 7.78878L8.2653 8.1272C8.39206 9.4353 8.45544 10.0894 8.07243 10.3801C7.68941 10.6709 7.11366 10.4058 5.96216 9.87559L5.66426 9.73842C5.33704 9.58776 5.17343 9.51242 5 9.51242C4.82657 9.51242 4.66296 9.58776 4.33574 9.73842L4.03784 9.87558C2.88634 10.4058 2.31059 10.6709 1.92757 10.3801C1.54456 10.0894 1.60794 9.4353 1.7347 8.1272L1.76749 7.78878C1.80351 7.41706 1.82152 7.23119 1.76793 7.05886C1.71434 6.88652 1.59521 6.74722 1.35696 6.46861L1.14005 6.21496C0.301624 5.23454 -0.117588 4.74432 0.0287105 4.27387C0.175009 3.80341 0.789928 3.66428 2.01977 3.38601L2.33794 3.31402C2.68743 3.23495 2.86217 3.19541 3.00247 3.0889C3.14278 2.98239 3.23276 2.82097 3.41273 2.49812L3.57658 2.20419Z"
            fill={`url(#${uniqueId}-grad-${index})`}
          />
        </Svg>
      </Pressable>
    );
  };

  return (
    <View
      style={[
        styles.starContainer,
        { flexDirection: dir === 'rtl' ? 'row' : 'row-reverse' },
      ]}
    >
      {Array.from({ length: totalStars }, (_, index) => renderStar(index))}
    </View>
  );
}

const styles = StyleSheet.create({
  starContainer: {
    alignItems: 'center',
    gap: 4,
  },
});
