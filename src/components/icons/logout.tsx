/* eslint-disable @typescript-eslint/no-deprecated */
import type { SvgProps } from "react-native-svg";

import Svg, { G, Mask, Path } from "react-native-svg";

import colors from "@/lib/colors";

export function LogoutIcon({
  color = colors.danger["500"],
  ...props
}: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      clip-rule="evenodd"
      d="M11.3195 22.5H6.43349C3.98949 22.5 2.00049 20.511 2.00049 18.065V6.936C2.00049 4.49 3.98949 2.5 6.43349 2.5H11.3085C13.7545 2.5 15.7445 4.49 15.7445 6.936V7.868C15.7445 8.282 15.4085 8.618 14.9945 8.618C14.5805 8.618 14.2445 8.282 14.2445 7.868V6.936C14.2445 5.316 12.9275 4 11.3085 4H6.43349C4.81649 4 3.50049 5.316 3.50049 6.936V18.065C3.50049 19.684 4.81649 21 6.43349 21H11.3195C12.9315 21 14.2445 19.688 14.2445 18.076V17.133C14.2445 16.719 14.5805 16.383 14.9945 16.383C15.4085 16.383 15.7445 16.719 15.7445 17.133V18.076C15.7445 20.516 13.7585 22.5 11.3195 22.5Z"
      fill={color}
      fill-rule="evenodd"
    />
    <Mask
      height="3"
      id="mask0_8282_12916"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
      width="15"
      x="8"
      y="11"
    >
      <Path
        clip-rule="evenodd"
        d="M8.99609 11.75H22.537V13.25H8.99609V11.75Z"
        fill="white"
        fill-rule="evenodd"
      />
    </Mask>
    <G mask="url(#mask0_8282_12916)">
      <Path
        clip-rule="evenodd"
        d="M21.7871 13.25H9.74609C9.33209 13.25 8.99609 12.914 8.99609 12.5C8.99609 12.086 9.33209 11.75 9.74609 11.75H21.7871C22.2011 11.75 22.5371 12.086 22.5371 12.5C22.5371 12.914 22.2011 13.25 21.7871 13.25Z"
        fill={color}
        fill-rule="evenodd"
      />
    </G>
    <Mask
      height="9"
      id="mask1_8282_12916"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
      width="5"
      x="18"
      y="8"
    >
      <Path
        clip-rule="evenodd"
        d="M18.1099 8.83527H22.5372V16.166H18.1099V8.83527Z"
        fill="white"
        fill-rule="evenodd"
      />
    </Mask>
    <G mask="url(#mask1_8282_12916)">
      <Path
        clip-rule="evenodd"
        d="M18.8596 16.166C18.6676 16.166 18.4746 16.093 18.3286 15.945C18.0366 15.651 18.0376 15.177 18.3306 14.885L20.7246 12.5L18.3306 10.116C18.0376 9.82402 18.0356 9.35002 18.3286 9.05602C18.6206 8.76202 19.0946 8.76202 19.3886 9.05402L22.3166 11.969C22.4586 12.109 22.5376 12.301 22.5376 12.5C22.5376 12.699 22.4586 12.891 22.3166 13.031L19.3886 15.947C19.2426 16.093 19.0506 16.166 18.8596 16.166Z"
        fill={color}
        fill-rule="evenodd"
      />
    </G>
  </Svg>
}
