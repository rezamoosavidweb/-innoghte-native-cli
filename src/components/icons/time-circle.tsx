import type { SvgProps } from 'react-native-svg';

import Svg, { Path } from 'react-native-svg';

export function TimeCircleIcon({ color = '#fff', ...props }: SvgProps) {
  return (
    <Svg fill="none" height={18} viewBox="0 0 18 18" width={18} {...props}>
      <Path
        clipRule="evenodd"
        d="M15.9377 9C15.9377 12.8318 12.832 15.9375 9.00024 15.9375C5.16849 15.9375 2.06274 12.8318 2.06274 9C2.06274 5.16825 5.16849 2.0625 9.00024 2.0625C12.832 2.0625 15.9377 5.16825 15.9377 9Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="square"
        strokeWidth="1.5"
      />
      <Path
        d="M11.5743 11.2068L8.74683 9.52002V5.88477"
        stroke={color}
        strokeLinecap="square"
        strokeWidth="1.5"
      />
    </Svg>
  );
}
