import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

interface Props extends SvgProps {
  focusPathColor?: string;
  isFocused?: boolean;
}
export const FolderIcon = ({
  color,
  isFocused,
  focusPathColor,
  ...props
}: Props) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.75 20.3265H3.25V3.67346H10.2133L12.4749 6.45239H21.75V20.3265Z"
      stroke={color}
      fill={isFocused ? color : "none"}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <Path
      d="M8.13281 15.0865H16.8678"
      stroke={isFocused ? focusPathColor : color}
      fill={isFocused ? focusPathColor : color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </Svg>
);
