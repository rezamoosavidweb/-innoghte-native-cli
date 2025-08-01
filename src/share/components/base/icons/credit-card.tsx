import type { SvgProps } from "react-native-svg";
import Svg, { Path, Rect } from "react-native-svg";

export const CreditCardIcon = ({ color = "#fff", ...props }: SvgProps) => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <Rect
      x="2.75"
      y="5.47021"
      width="18.5"
      height="14.06"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M14.8516 15.8423H18.3268"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M10.626 15.8423H11.3738"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M2.75 10.2832H21.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </Svg>
);
