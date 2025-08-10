import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function CheckedFieldIcon({ color = "#fff", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M9.38672 11.1959L11.2787 13.0909L15.1767 9.19092"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      clip-rule="evenodd"
      d="M12.0006 21.5C12.0006 21.5 19.8685 19.1177 19.8685 12.5503V3.5H4.13281V12.5503C4.13281 19.1177 12.0006 21.5 12.0006 21.5Z"
      fill-rule="evenodd"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </Svg>
}
