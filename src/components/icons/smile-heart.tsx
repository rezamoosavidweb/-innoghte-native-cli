import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function SmileHeartIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M21.2499 9.95709C21.24 7.42122 19.9096 5.03642 17.2866 4.19144C15.4855 3.61023 13.5236 3.93344 12 6.12092C10.4764 3.93344 8.51447 3.61023 6.71339 4.19144C4.09014 5.03652 2.75971 7.42177 2.75008 9.95796C2.72582 15.0017 7.83662 18.8612 11.9987 20.7059L12 20.7054L12.0013 20.7059C16.1636 18.8611 21.2748 15.0012 21.2499 9.95709Z"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M15.7432 11.6118C14.973 12.9347 13.6033 14.0047 12.0196 13.9774C10.4358 14.0047 9.0661 12.9347 8.2959 11.6118"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
