import { StyleSheet } from 'react-native';

import { translate } from '@/translations/utils';

import { Badge } from '@/components/base';

type ProductTypeProps = {
  readonly isPackage: boolean;
};

export default function ProductType({ isPackage }: ProductTypeProps) {
  return (
    <Badge
      containerStyle={isPackage ? styles.packageBadge : undefined}
      title={isPackage ? translate('package') : translate('normal')}
    />
  );
}

const styles = StyleSheet.create({
  packageBadge: {
    backgroundColor: 'rgba(0, 168, 107, 0.15)', // #00A86B26 with 0.15 alpha
  },
});
