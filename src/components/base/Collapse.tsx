import { type ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type CollapseProps = {
  readonly children: ReactNode;
  readonly duration?: number;
  readonly isExpanded: boolean;
  readonly style?: ViewStyle;
  readonly viewKey?: string;
};
const DEFAULT_DURATION = 200;
export function Collapse({
  children,
  duration = DEFAULT_DURATION,
  isExpanded,
  style,
  viewKey,
}: CollapseProps) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded), { duration }),
  );

  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[styles.animatedContainer, bodyStyle, style]}
    >
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.innerContainer}
      >
        {children}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animatedContainer: {
    overflow: 'hidden',
    width: '100%',
  },
  innerContainer: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
  },
});
