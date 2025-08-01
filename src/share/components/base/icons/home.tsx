import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

interface Props extends SvgProps {
  focusPathColor?: string;
  isFocused?: boolean;
}

export function HomeIcon({
  color,
  isFocused,
  focusPathColor,
  ...props
}: Props) {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M2.43359 11.3755L12.4998 2.75L22.5659 11.3755"
        stroke={color}
        fill={isFocused ? color : "none"}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <Path
        d="M4.59277 10.1592V21.2501H20.4103V10.1592"
        stroke={color}
        fill={isFocused ? color : "none"}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <Path
        d="M12.4998 12.7048L12.4998 16.1132"
        stroke={isFocused ? focusPathColor : color}
        fill={isFocused ? focusPathColor : color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </Svg>
  );
}
