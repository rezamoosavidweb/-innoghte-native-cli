import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function DocIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M14.0927 16.7865H8.64941"
      stroke={color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <Path
      d="M12.0313 13.004H8.64844"
      stroke={color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <Path
      clip-rule="evenodd"
      d="M14.5679 3.25L4.3252 3.25V21.75H19.6745V8.56826L14.5679 3.25Z"
      fill-rule="evenodd"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M14.0918 3.80469V9.15011H19.1989"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
