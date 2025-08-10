import type { SvgProps } from "react-native-svg";

import Svg, { Circle, Path } from "react-native-svg";

export function OutlineQuestionIcon({ color, ...props }: SvgProps) {
  return (
    <Svg fill="none"height={24}  viewBox="0 0 25 24" width={25} {...props}>
      <Circle cx="12" cy="12.5" r="10" stroke={color} stroke-width="1.5" />
      <Path
        d="M10.125 10.375C10.125 9.33947 10.9645 8.5 12 8.5C13.0355 8.5 13.875 9.33947 13.875 10.375C13.875 11.0624 13.505 11.6635 12.9534 11.9899C12.478 12.2711 12 12.6977 12 13.25V14.5"
        stroke={color}
        stroke-width="1.5"
        strokeLinecap="square"
      />
      <Circle cx="12" cy="17.5" fill="white" r="1"  />
    </Svg>
  );
}
