/* eslint-disable @typescript-eslint/no-deprecated */
import type { SvgProps } from "react-native-svg";

import Svg, { G, Mask, Path } from "react-native-svg";

import colors from "@/lib/colors";

export function SearchIcon({
  color = colors.neutral[500],
  ...props
}: SvgProps) {
  return <Svg fill="none" height={20} viewBox="0 0 20 20" width={20} {...props}>
    <Mask
      height="17"
      id="mask0_8301_6884"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
      width="17"
      x="1"
      y="1"
    >
      <Path
        clipRule="evenodd"
        d="M1.6665 1.66663H17.8972V17.8975H1.6665V1.66663Z"
        fill="white"
        fillRule="evenodd"
      />
    </Mask>
    <G mask="url(#mask0_8301_6884)">
      <Path
        clipRule="evenodd"
        d="M9.78234 2.91663C5.9965 2.91663 2.9165 5.99579 2.9165 9.78163C2.9165 13.5675 5.9965 16.6475 9.78234 16.6475C13.5673 16.6475 16.6473 13.5675 16.6473 9.78163C16.6473 5.99579 13.5673 2.91663 9.78234 2.91663ZM9.78234 17.8975C5.30734 17.8975 1.6665 14.2566 1.6665 9.78163C1.6665 5.30663 5.30734 1.66663 9.78234 1.66663C14.2573 1.66663 17.8973 5.30663 17.8973 9.78163C17.8973 14.2566 14.2573 17.8975 9.78234 17.8975Z"
        fill={color}
        fillRule="evenodd"
      />
    </G>
    <Mask
      height="5"
      id="mask1_8301_6884"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
      width="5"
      x="14"
      y="14"
    >
      <Path
        clipRule="evenodd"
        d="M14.3667 14.7557H18.5534V18.9347H14.3667V14.7557Z"
        fill="white"
        fillRule="evenodd"
      />
    </Mask>
    <G mask="url(#mask1_8301_6884)">
      <Path
        clipRule="evenodd"
        d="M17.9286 18.9347C17.7694 18.9347 17.6094 18.8739 17.4869 18.7522L14.5502 15.8239C14.3061 15.5797 14.3052 15.1839 14.5494 14.9397C14.7927 14.6939 15.1886 14.6955 15.4336 14.938L18.3702 17.8672C18.6144 18.1114 18.6152 18.5064 18.3711 18.7505C18.2494 18.8739 18.0886 18.9347 17.9286 18.9347Z"
        fill={color}
        fillRule="evenodd"
      />
    </G>
  </Svg>
}
