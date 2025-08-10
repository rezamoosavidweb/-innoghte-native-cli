import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function HeartIcon({ color = "#fff", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M21.2499 10.1356C21.24 7.59969 19.9096 5.21489 17.2866 4.36991C15.4855 3.78869 13.5236 4.11191 12 6.29939C10.4764 4.11191 8.51447 3.78869 6.71339 4.36991C4.09014 5.21498 2.75971 7.60024 2.75008 10.1364C2.72582 15.1801 7.83662 19.0397 11.9987 20.8844L12 20.8838L12.0013 20.8844C16.1636 19.0396 21.2748 15.1797 21.2499 10.1356Z"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
