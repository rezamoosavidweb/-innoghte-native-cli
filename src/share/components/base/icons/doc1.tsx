import type { SvgProps } from "react-native-svg";
import Svg, { Path, Rect } from "react-native-svg";

export const Doc1Icon = ({ color = "#CCC", ...props }: SvgProps) => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      d="M10.6881 13.8932H8.37207"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <Path
      d="M14.4418 9.72904H8.37207"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <Rect
      x="3.62695"
      y="3.25"
      width="16.7465"
      height="18.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </Svg>
);
