import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function CallIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M14.2471 3.25C17.9481 3.661 20.8721 6.581 21.2871 10.282"
      stroke={color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <Path
      d="M14.2471 6.79297C16.0181 7.13697 17.4021 8.52197 17.7471 10.293"
      stroke={color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <Path
      d="M17.8157 21.7377C8.6665 22.1565 1.85318 11.7831 2.79979 6.72175C3.66833 5.2293 4.7816 4.12391 6.27155 3.25L9.51207 7.70123L7.86867 10.5553C7.86867 10.5553 8.32246 12.4607 10.0304 14.1686C11.823 15.9612 13.8227 16.5093 13.8227 16.5093L16.6768 14.8659L21.2875 18.2659C20.4297 19.7985 19.3483 20.8799 17.8157 21.7377Z"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
