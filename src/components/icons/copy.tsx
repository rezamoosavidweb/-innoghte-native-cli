import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function CopyIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M4.5 19.7383V3.23828H16.5V20.4883H5.25"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <Path
      d="M16.5 4.73828H18.75V22.7383H6L4.5 20.4883"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <Path
      d="M4.5 18.9883V20.4883L6 22.7383H9"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <Path
      d="M6.75 6.23828H14.25"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
  </Svg>
}
