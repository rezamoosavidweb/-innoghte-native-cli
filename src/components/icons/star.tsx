import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function StarIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={18} viewBox="0 0 18 18" width={18} {...props}>
    <Path
      d="M9 2.0625C9.87774 5.46516 12.5348 8.12226 15.9375 9C12.5348 9.87774 9.87774 12.5348 9 15.9375C8.12226 12.5348 5.46516 9.87774 2.0625 9C5.46516 8.12226 8.12226 5.46516 9 2.0625Z"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="1.5"
    />
    <Path
      d="M14.0632 2.0625C14.0632 2.92312 15.0527 3.93627 15.937 3.93627C15.0186 3.93627 14.0632 4.93892 14.0632 5.81003C14.0632 4.93324 13.0483 3.93627 12.1895 3.93627C13.0823 3.93627 14.0632 2.92312 14.0632 2.0625Z"
      fill={color}
    />
  </Svg>
}
