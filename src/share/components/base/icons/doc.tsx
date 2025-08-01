import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

export const DocIcon = ({ color = "#CCC", ...props }: SvgProps) => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      d="M14.0927 16.7865H8.64941"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <Path
      d="M12.0313 13.004H8.64844"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5679 3.25L4.3252 3.25V21.75H19.6745V8.56826L14.5679 3.25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M14.0918 3.80469V9.15011H19.1989"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </Svg>
);
