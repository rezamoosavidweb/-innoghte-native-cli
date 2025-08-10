import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function HeadphoneIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M3.6001 16.5884H6.0001C6.66284 16.5884 7.2001 17.1256 7.2001 17.7884V20.1884C7.2001 20.8511 6.66284 21.3884 6.0001 21.3884H3.6001V12.9884C3.6001 8.34919 7.36091 4.58838 12.0001 4.58838C16.6393 4.58838 20.4001 8.34919 20.4001 12.9884V21.3884H18.0001C17.3374 21.3884 16.8001 20.8511 16.8001 20.1884V17.7884C16.8001 17.1256 17.3374 16.5884 18.0001 16.5884H20.4001"
      stroke={color}
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Svg>
}
