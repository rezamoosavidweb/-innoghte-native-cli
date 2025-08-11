import type { SvgProps } from 'react-native-svg';

import Svg, { Path } from 'react-native-svg';

export function ArrowRightIcon({ color = '#CCC', ...props }: SvgProps) {
  return (
    <Svg fill="none" height={18} viewBox="0 0 22 18" width={22} {...props}>
      <Path
        clipRule="evenodd"
        d="M12.4449 0.321777L10.7988 1.97494L16.6823 7.83278H0.840088V10.1661H16.6811L10.7988 16.0251L12.4449 17.6783L21.1599 8.99944L12.4449 0.321777Z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
}
