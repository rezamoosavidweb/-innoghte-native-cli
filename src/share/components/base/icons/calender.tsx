import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

export const CalenderIcon = ({ color = "#fff", ...props }: SvgProps) => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      d="M12.0043 17.3065H12.0128"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M7.89097 17.3065H7.89954"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M16.1087 17.3065H16.1173"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M12.0043 13.7115H12.0128"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M7.89097 13.7115H7.89954"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M16.1087 13.7115H16.1173"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M3.76074 10.099H20.248"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M15.741 3.25V6.29399"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M8.26831 3.25V6.29399"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.3258 4.71069H3.67578V21.75H20.3258V4.71069Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </Svg>
);
