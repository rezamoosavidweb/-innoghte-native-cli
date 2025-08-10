/* eslint-disable @typescript-eslint/no-deprecated */
import type { SvgProps } from "react-native-svg";

import Svg, { Rect } from "react-native-svg";

import colors from "@/lib/colors";



export function CategoryIcon({
  color = colors.neutral[500],
  focusable,
  ...props
}: SvgProps) {
  return <Svg fill="none" height={24} viewBox="0 0 25 24" width={25} {...props}>
    <Rect
      fill={focusable ? color : "none"}
      height={7}
      stroke={color}
      strokeLinecap="square"
      strokeWidth={1.5}
      width={7}
      x="14.1074"
      y="14.3933"
    />
    <Rect
      fill={focusable ? color : "none"}
      height={7}
      stroke={color}
      strokeLinecap="square"
      strokeWidth={1.5}
      width={7}
      x="3.10742"
      y="14.3933"
    />
    <Rect
      fill={focusable ? color : "none"}
      height={7}
      stroke={color}
      strokeLinecap="square"
      strokeWidth={1.5}
      width={7}
      x="3.10742"
      y="3.39331"
    />
    <Rect
      fill={focusable ? color : "none"}
      height={7}
      stroke={color}
      strokeLinecap="square"
      strokeWidth={1.5}
      transform="rotate(15 15.1318 2.60669)"
      width={7}
      x="15.1318"
      y="2.60669"
    />
  </Svg>
}
