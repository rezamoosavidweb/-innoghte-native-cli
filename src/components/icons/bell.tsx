import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function BellIcon({ color = "#fff", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M11.9997 4.65835C15.4838 4.65835 18.3083 7.48283 18.3083 10.967V13.7602C18.3083 15.6465 18.8817 17.4882 19.9525 19.0411H4.04688C5.11762 17.4882 5.69101 15.6465 5.69101 13.7602V10.967C5.69101 7.48283 8.5155 4.65835 11.9997 4.65835ZM11.9997 4.65835V2.49978"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M15.2285 19.041V19.2714C15.2285 21.0545 13.7831 22.5 12 22.5C10.2169 22.5 8.77148 21.0545 8.77148 19.2714V19.041"
      stroke={color}
      strokeWidth="1.5"
    />
  </Svg>
}
