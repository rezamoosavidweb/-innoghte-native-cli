import type { SvgProps } from "react-native-svg";

import Svg, { Path } from "react-native-svg";

export function MessageLockIcon({ color = "#CCC", ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      d="M15.8202 10.0981H8.18018V15.8281H15.8202V10.0981Z"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <Path
      d="M11.9998 6.28809C12.5047 6.28808 12.989 6.48794 13.3469 6.84397C13.7048 7.20001 13.9072 7.68326 13.9098 8.18809V10.0981H10.0898V8.18809C10.0925 7.68326 10.2949 7.20001 10.6528 6.84397C11.0107 6.48794 11.495 6.28808 11.9998 6.28809Z"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <Path
      d="M1.5 6.28826V15.8283C1.5 16.8414 1.90246 17.813 2.61885 18.5294C3.33524 19.2458 4.30687 19.6483 5.32 19.6483H7.23V22.5083L13 19.6483H18.73C19.7431 19.6483 20.7148 19.2458 21.4311 18.5294C22.1475 17.813 22.55 16.8414 22.55 15.8283V6.28826C22.55 5.27513 22.1475 4.3035 21.4311 3.58711C20.7148 2.87072 19.7431 2.46826 18.73 2.46826H5.32C4.30687 2.46826 3.33524 2.87072 2.61885 3.58711C1.90246 4.3035 1.5 5.27513 1.5 6.28826Z"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
  </Svg>
}
