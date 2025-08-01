import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

export const BurgerIcon = ({ color = "#CCC", ...props }: SvgProps) => (
  <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
    <Path
      d="M5.04004 7H22.96"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
    />
    <Path
      d="M5.04004 13.65H22.96"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
    />
    <Path
      d="M5.04004 20.3H22.96"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
    />
  </Svg>
);
