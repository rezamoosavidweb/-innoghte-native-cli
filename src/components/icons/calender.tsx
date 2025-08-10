import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function CalenderIcon({ color = "#fff", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M12.0043 17.3065H12.0128"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M7.89097 17.3065H7.89954"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M16.1087 17.3065H16.1173"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M12.0043 13.7115H12.0128"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M7.89097 13.7115H7.89954"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M16.1087 13.7115H16.1173"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M3.76074 10.099H20.248"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M15.741 3.25V6.29399"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M8.26831 3.25V6.29399"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      clip-rule="evenodd"
      d="M20.3258 4.71069H3.67578V21.75H20.3258V4.71069Z"
      fill-rule="evenodd"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
