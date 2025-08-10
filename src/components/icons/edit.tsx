import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function EditIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M16.1006 3.98828L21 8.88767L7.89939 21.9883L3.00461 21.9837L3 17.0889L16.1006 3.98828Z"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M20.3222 21.983L3.00488 21.9824"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
