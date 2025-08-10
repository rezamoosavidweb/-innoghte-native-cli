/* eslint-disable @typescript-eslint/no-deprecated */
import type { SvgProps } from "react-native-svg";

import Svg, { Path, Rect } from "react-native-svg";

export function CreditCardIcon({ color = "#fff", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Rect
      height="14.06"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
      width="18.5"
      x="2.75"
      y="5.47021"
    />
    <Path
      d="M14.8516 15.8423H18.3268"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M10.626 15.8423H11.3738"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M2.75 10.2832H21.25"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
