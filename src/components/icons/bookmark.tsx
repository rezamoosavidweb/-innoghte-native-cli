import type { SvgProps } from 'react-native-svg';

import Svg, { Path } from 'react-native-svg';

export function BookmarkIcon({ color = '#fff', ...props }: SvgProps) {
  return <Svg fill="none" height={25} viewBox="0 0 24 25" width={24} {...props}>
    <Path
      clipRule="evenodd"
      d="M19.4776 3.25C13.6373 3.25 10.3628 3.25 4.52246 3.25V21.75L12.0251 18.3045L19.4776 21.75V3.25Z"
      fillRule="evenodd"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
    <Path
      d="M8.47852 9.72534H15.5219"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </Svg>
}
