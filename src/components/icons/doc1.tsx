/* eslint-disable @typescript-eslint/no-deprecated */
import type { SvgProps } from "react-native-svg";

import Svg, { Path, Rect } from "react-native-svg";

export function Doc1Icon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M10.6881 13.8932H8.37207"
      stroke={color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <Path
      d="M14.4418 9.72904H8.37207"
      stroke={color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <Rect
      height="18.5"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
      width="16.7465"
      x="3.62695"
      y="3.25"
    />
  </Svg>
}
