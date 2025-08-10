import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function BurgerIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={28} viewBox="0 0 28 28" width={28} {...props}>
    <Path
      d="M5.04004 7H22.96"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="2"
    />
    <Path
      d="M5.04004 13.65H22.96"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="2"
    />
    <Path
      d="M5.04004 20.3H22.96"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="2"
    />
  </Svg>
}
