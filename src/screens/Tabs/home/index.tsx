import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

function HomeTab() {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t('home')}</Text>
    </View>
  );
}

export default HomeTab;
