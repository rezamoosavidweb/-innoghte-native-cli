import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

export const EditIcon = ({ color = "#CCC", ...props }: SvgProps) => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      d="M16.1006 3.98828L21 8.88767L7.89939 21.9883L3.00461 21.9837L3 17.0889L16.1006 3.98828Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M20.3222 21.983L3.00488 21.9824"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </Svg>
);
