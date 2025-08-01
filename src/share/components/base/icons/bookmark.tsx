import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

export const BookmarkIcon = ({ color = "#fff", ...props }: SvgProps) => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.4776 3.25C13.6373 3.25 10.3628 3.25 4.52246 3.25V21.75L12.0251 18.3045L19.4776 21.75V3.25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M8.47852 9.72534H15.5219"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </Svg>
);
