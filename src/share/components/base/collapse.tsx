import { type ReactNode } from "react";
import { View, type ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface CollapseProps {
  isExpanded: boolean;
  children: ReactNode;
  viewKey?: string;
  style?: ViewStyle;
  duration?: number;
}

export function Collapse({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 200,
}: CollapseProps) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded), {
      duration,
    }),
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      className="w-full overflow-hidden"
      style={[bodyStyle, style]}
    >
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        className="absolute flex w-full items-center"
      >
        {children}
      </View>
    </Animated.View>
  );
}
