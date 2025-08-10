import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Text } from '@/components/base';

function HomeTab() {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t('home')}</Text>
    </View>
  );
}

export default HomeTab;
