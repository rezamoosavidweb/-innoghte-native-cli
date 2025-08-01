import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

import { Image } from "@/share/components/base";
import Images from "@/share/lib/images";
import { useThemeConfig } from "@/share/hooks/use-theme-config";

const AnimatedView = Animated.createAnimatedComponent(View);

type InfiniteRotatingProgressProps = {
  size?: number;
  strokeWidth?: number;
  colorStops?: [string, string];
  src?: string;
};

export default function CircularProgress({
  size = 100,
  strokeWidth = 5,
  colorStops,
  src,
}: InfiniteRotatingProgressProps) {
  const theme = useThemeConfig();
  const defaultColorStops = [theme.colors.background, theme.colors.primary];
  const radius = (size - strokeWidth) / 2 - 2;
  //   const circumference = 2 * Math.PI * radius;

  // Animation: shared value for rotation
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.out(Easing.ease),
      }),
      -1,
      false,
    );
  }, []);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <AnimatedView style={[{ width: size, height: size }, animatedStyle]}>
        <Svg width={size} height={size} fill="none">
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop
                offset="0%"
                stopColor={(colorStops || defaultColorStops)[1]}
                stopOpacity={0}
              />
              <Stop
                offset="100%"
                stopOpacity={100}
                stopColor={(colorStops || defaultColorStops)[1]}
              />
            </LinearGradient>
          </Defs>

          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#grad)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
          />
        </Svg>
      </AnimatedView>

      <View
        style={[
          styles.innerCircle,
          {
            width: radius * 2 - 10,
            height: radius * 2 - 10,
            backgroundColor: theme.colors.background,
          },
        ]}
      >
        <Image
          className="size-full overflow-hidden rounded-t-xl"
          contentFit="cover"
          source={src ? { uri: src } : Images.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    position: "absolute",
    borderRadius: "100%",
    zIndex: 10,
  },
});
