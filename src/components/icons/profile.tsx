import type { SvgProps } from "react-native-svg";

import { StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

import { isRTL } from "@/translations";

export function ProfileIcon({
  color = "#fff",
  focusable,
  style,
  ...props
}: SvgProps) {
  return <Svg
    fill="none"
    height={24}
    viewBox="0 0 25 24"
    width={25}
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      d="M12.4999 14.8189C15.7563 14.8106 18.5251 16.3057 19.5428 19.5242C17.4914 20.7748 15.0768 21.2564 12.4999 21.2501C9.92304 21.2564 7.5084 20.7748 5.45703 19.5242C6.47593 16.3022 9.24006 14.8105 12.4999 14.8189Z"
      fill={focusable ? color : "none"}
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Circle
      cx="12.4998"
      cy="7.16973"
      fill={focusable ? color : "none"}
      r="4.41973"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
