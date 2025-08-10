import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function TicketIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={18} viewBox="0 0 18 18" width={18} {...props}>
    <Path
      d="M10.2824 12.9961V14.4002"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M10.2824 10.8216V7.47705"
      stroke="#212121"
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M10.2824 3.62402V5.3029"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      clip-rule="evenodd"
      d="M15.9375 14.5502V10.4922C15.1011 10.4922 14.4274 9.82694 14.4274 9.00091C14.4274 8.17488 15.1011 7.50891 15.9375 7.50891V3.4502H2.0625V7.5675C2.89894 7.5675 3.57257 8.17488 3.57257 9.00091C3.57257 9.82694 2.89894 10.4922 2.0625 10.4922V14.5502H15.9375Z"
      fill-rule="evenodd"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
