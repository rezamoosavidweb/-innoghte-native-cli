import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

import colors from "@/lib/colors";

type Props = {
  readonly focusPathColor?: string;
  readonly isFocused?: boolean;
} & SvgProps
export function FolderIcon({
  color,
  focusPathColor=colors.grayscale[300],
  isFocused=false,
  ...props
}: Props) {
  return <Svg fill="none" height={24} viewBox="0 0 25 24" width={25} {...props}>
    <Path
      clipRule="evenodd"
      d="M21.75 20.3265H3.25V3.67346H10.2133L12.4749 6.45239H21.75V20.3265Z"
      fill={isFocused ? color : "none"}
      fillRule="evenodd"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M8.13281 15.0865H16.8678"
      fill={isFocused ? focusPathColor : color}
      stroke={isFocused ? focusPathColor : color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
