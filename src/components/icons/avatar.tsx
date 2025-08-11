import type { SvgProps } from "react-native-svg";

import Svg, { Circle, Path } from "react-native-svg";

export function AvatarIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={18} viewBox="0 0 18 18" width={18} {...props}>
    <Circle
      cx="9"
      cy="8.99951"
      r="6.9375"
      stroke={color}
      strokeWidth="1.48225"
    />
    <Path
      d="M12.2891 8.38086H12.2967"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.48225"
    />
    <Path
      d="M5.19922 8.38086H5.20681"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.48225"
    />
    <Path
      d="M8.57745 6.20801L7.14062 11.0779L7.27656 11.3044H9.97109"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.48225"
    />
  </Svg>
}
