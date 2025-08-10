import type { SvgProps } from 'react-native-svg';

import Svg, { Path } from 'react-native-svg';

import colors from '@/lib/colors';

type Props = {
  readonly focusPathColor?: string;
  readonly isFocused?: boolean;
} & SvgProps;

export function HomeIcon({
  color,
  focusPathColor = colors.grayscale[300],
  isFocused = false,
  ...props
}: Props) {
  return (
    <Svg fill="none" height={24} viewBox="0 0 25 24" width={25} {...props}>
      <Path
        d="M2.43359 11.3755L12.4998 2.75L22.5659 11.3755"
        fill={isFocused ? color : 'none'}
        stroke={color}
        strokeLinecap="square"
        strokeWidth="1.5"
      />
      <Path
        d="M4.59277 10.1592V21.2501H20.4103V10.1592"
        fill={isFocused ? color : 'none'}
        stroke={color}
        strokeLinecap="square"
        strokeWidth="1.5"
      />
      <Path
        d="M12.4998 12.7048L12.4998 16.1132"
        fill={isFocused ? focusPathColor : color}
        stroke={isFocused ? focusPathColor : color}
        strokeLinecap="square"
        strokeWidth="1.5"
      />
    </Svg>
  );
}
